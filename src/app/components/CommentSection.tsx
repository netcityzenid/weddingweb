// app/components/CommentForm.tsx
"use client";

import { useState } from "react";

interface CommentFormProps {
  onCommentSubmitted: () => void;
}

const CommentForm = ({ onCommentSubmitted }: CommentFormProps) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [attendance, setAttendance] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, comment, attendance }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setName("");
        setComment("");
        setAttendance(undefined);
        onCommentSubmitted(); // Panggil fungsi untuk pembaruan komentar
      } else {
        setMessage("Failed to save comment");
      }
    } catch (error) {
      setMessage("An error occurred");
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input className="w-full p-2 rounded-lg shadow-sm" placeholder="Nama" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-0.5">
          <textarea className="w-full p-2 min-h-20 rounded-lg shadow-sm" placeholder="Ucapan" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
        </div>
        <div className="mb-5">
          <select id="attendance" value={attendance ?? ""} onChange={(e) => setAttendance(e.target.value)} className="w-full p-2 rounded-lg shadow-sm" required>
            <option value="" disabled>
              Konfirmasi kehadiran
            </option>
            <option value="true">Hadir</option>
            <option value="false">Tidak Hadir</option>
          </select>
        </div>
        <button className="w-full shadow-sm rounded-lg font-medium p-2 bg-gradient-to-b from-[#d6b064] to-[#d6b064]" type="submit" disabled={loading}>
          {loading ? <div>Mengirim</div> : <div>Kirim Ucapan</div>}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CommentForm;
