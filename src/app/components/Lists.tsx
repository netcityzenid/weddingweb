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

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comments/get", { cache: "no-store" });
        if (!res.ok) {
          const errorData = await res.text();
          throw new Error(errorData || "Failed to fetch comments");
        }
        const data: Comment[] = await res.json();
        console.log("Fetched data:", data); // Tambahkan logging
        setComments(data);
      } catch (error: unknown) {
        console.error("Error fetching comments:", error);
        if (error instanceof Error) {
          setError(error.message || "Unexpected error occurred");
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchComments();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

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
