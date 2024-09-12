import { useEffect, useState } from "react";

interface Comment {
  _id: string;
  name: string;
  comment: string;
  attendance: boolean;
  createdAt: string;
}

const timeAgo = (date: string) => {
  const now = new Date();
  const createdAt = new Date(date);
  const diffMs = now.getTime() - createdAt.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  if (diffMinutes < 60) return `${diffMinutes} menit yang lalu`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} jam yang lalu`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} hari yang lalu`;
};

const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true); // Jika kamu menggunakan state loading
      try {
        const res = await fetch("/api/comments/get"); // Endpoint API yang sesuai
        const data = await res.json();

        if (res.ok) {
          // Asumsi data yang diterima adalah dalam bentuk { success: boolean, comments: Comment[] }
          if (data.success) {
            setComments(data.comments); // Update state dengan data yang diterima
          } else {
            setError("Failed to fetch comments"); // Pesan error jika data.success false
          }
        } else {
          // Jika status response tidak ok (misalnya 4xx, 5xx)
          setError("Failed to fetch comments"); // Pesan error jika response tidak ok
        }
      } catch (err) {
        // Tangani kesalahan yang terjadi selama fetch
        setError("An error occurred while fetching comments"); // Pesan error untuk kesalahan jaringan atau lain-lain
      } finally {
        setLoading(false); // Set loading false di akhir
      }
    };

    fetchComments();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id} className="comment">
          <h3>{comment.name}</h3>
          <p>{comment.comment}</p>
          <p>{comment.attendance ? "Hadir" : "Tidak Hadir"}</p>
          <span>{timeAgo(comment.createdAt)}</span>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
