"use client";

import { useEffect, useState } from "react";
import CommentForm from "./CommentSection"; // Pastikan path import sesuai dengan struktur project Anda

interface Comment {
  _id: string;
  name: string;
  comment: string;
  attendance: boolean;
  createdAt: string;
}

const COLORS = [
  "#FF6F61", // Coral
  "#6B5B95", // Purple
  "#88B04B", // Green
  "#F7CAC9", // Pink
  "#92A8D1", // Blue
  "#F5BE42", // Yellow
  "#6B8E23", // Olive
  "#D2691E", // Chocolate
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};

const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  
  const fetchComments = async () => {
    try {
      const res = await fetch("/api/getComment");
      const data: Comment[] = await res.json();
      setComments(data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCommentSubmitted = () => {
    fetchComments(); // Panggil fetchComments setelah data baru berhasil dikirim
  };

  useEffect(() => {
    fetchComments();
 // Clear interval on component unmount
  }, []);

  const timeAgo = (timestamp: string) => {
    const now = new Date();
    const createdAt = new Date(timestamp);
    const differenceInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
    const minutes = Math.floor(differenceInSeconds / 60);
    const hours = Math.floor(differenceInSeconds / 3600);
    const days = Math.floor(differenceInSeconds / 86400);

    if (days > 0) {
      return `${days} hari yang lalu`;
    } else if (hours > 0) {
      return `${hours} jam yang lalu`;
    } else if (minutes > 0) {
      return `${minutes} menit yang lalu`;
    } else {
      return `${Math.floor(differenceInSeconds)} detik yang lalu`;
    }
  };

  return (
    <div className="relative z-50">
      <CommentForm onCommentSubmitted={handleCommentSubmitted} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="whitespace-nowrap overflow-y-auto h-96 mt-10 ">
          {comments.map((comment) => (
            <li key={comment._id} className="bg-white/50 shadow-sm rounded-lg p-4 mb-2 relative overflow-hidden">
              <div className="flex">
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-center font-medium text-white" style={{ backgroundColor: getRandomColor() }}>
                  <div className="uppercase">{(comment.name.slice(0,2))}</div>
                </div>
                <div className="ml-2">
                  <div>
                    <div className="flex gap-1 items-center">
                      <div className="font-bold">{comment.name}</div>
                      <div>
                        {comment.attendance ? (
                          <div className="text-xs py-1 px-3 bg-[#89ff91aa] text-[#099625] rounded-lg absolute right-2 top-2 shadow-sm">Hadir</div>
                        ) : (
                          <div className="text-xs bg-[#ff8989aa] rounded-lg text-[#960909] py-1 px-3 absolute right-2 top-2 shadow-sm">Tidak Hadir / masih ragu</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">{comment.comment}</p>
                  <p className="mt-2 text-xs text-black/50">
                    <i>{timeAgo(comment.createdAt)}</i>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
