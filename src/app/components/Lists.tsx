import { GetServerSideProps } from 'next';
import useSWR from 'swr';

// Interface untuk komentar
interface Comment {
  _id: string;
  name: string;
  comment: string;
  attendance: boolean;
  createdAt: string;
  updatedAt: string;
}

// Fungsi fetcher untuk mengambil data dari API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments/get`);
  const data = await res.json();

  return {
    props: {
      comments: data.comments, // Data awal yang diambil di server-side
    },
  };
};

export default function CommentList({ comments }: { comments: Comment[] }) {
  // SWR digunakan untuk polling data secara berkala
  const { data, error, isLoading } = useSWR<{ success: boolean; comments: Comment[] }>('/api/comments/get', fetcher, {
    fallbackData: { success: true, comments }, // Menampilkan data awal dari SSR
    refreshInterval: 5000, // Polling setiap 5 detik untuk mengambil data terbaru
  });

  if (error) return <div>Error loading comments.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.comments.map((comment) => (
        <div key={comment._id} className="comment">
          <p>Nama: {comment.name}</p>
          <p>Komentar: {comment.comment}</p>
          <p>Absensi: {comment.attendance ? 'Hadir' : 'Tidak Hadir'}</p>
          <p>Dibuat: {new Date(comment.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
