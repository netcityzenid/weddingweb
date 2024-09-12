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

const CommentLists = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Menggunakan array dengan tipe Comment

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comments");
        const data: Comment[] = await res.json(); // Menentukan tipe response sebagai array Comment
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments", error);
      }
    };
    fetchComments();
  }, []);

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

export default CommentLists;
