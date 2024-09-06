"use client"
import UndanganContainer from "./components/InvitationCard";
import HalamanUtama from "./components/HalamanUtama";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Halaman utama di bawah */}
      <HalamanUtama />

      {/* Undangan container di atas dengan posisi absolute */}
      <UndanganContainer />
    </div>
  );
}
