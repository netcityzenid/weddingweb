// app/page.tsx
"use client";
import UndanganContainer from "./components/InvitationCard";
import HalamanUtama from "./components/HalamanUtama";
import { useState, useEffect } from "react";

interface Comment {
  _id: string;
  name: string;
  comment: string;
  attendance: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`);
      const data = await res.json();
      setComments(data.comments);
    };

    fetchComments();
  }, []);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true); 
  };

  return (
    <div className="relative min-h-screen">
      {/* Halaman utama di bawah */}
      <HalamanUtama className={`${isInvitationOpen ? "relative" : "fixed w-full h-full"}`} comments={comments} />

      {/* Undangan container di atas dengan posisi absolute */}
      <UndanganContainer onOpenInvitation={handleOpenInvitation} />
    </div> 
  );
}
