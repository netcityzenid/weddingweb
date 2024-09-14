import useSWR from "swr";

interface Comment {
  _id: string;
  name: string;
  comment: string;
  attendance: boolean;
  createdAt: string;
  updatedAt: string;
}

// Fungsi untuk fetch data dari API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CommentList() {
  const { data, error, isLoading } = useSWR<{ success: boolean; comments: Comment[] }>("/api/comments/get", fetcher, {
    refreshInterval: 5000, // Polling setiap 5 detik
  });

  if (error) return <div>Error loading comments.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data?.comments.map((comment) => (
        <div key={comment._id} className="comment">
          <p>{comment.name}</p>
          <p>{comment.comment}</p>
          <p>{comment.attendance ? "Hadir" : "Tidak Hadir"}</p>
          <p>{new Date(comment.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
