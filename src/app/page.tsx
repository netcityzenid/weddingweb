// app/page.tsx
"use client";
import UndanganContainer from "./components/InvitationCard";
import HalamanUtama from "./components/HalamanUtama";
import { useState } from "react";
import { AudioProvider } from "./components/AudioContext";

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
  };

  return (
    <AudioProvider>
      <div className="relative min-h-screen max-w-sm mx-auto bg-white">
        {/* Halaman utama di bawah */}
        <HalamanUtama className={`${isInvitationOpen ? "relative" : "fixed w-full h-full"}`} />

        {/* Undangan container di atas dengan posisi absolute */}
        <UndanganContainer onOpenInvitation={handleOpenInvitation} />
      </div>
    </AudioProvider>
  );
}
