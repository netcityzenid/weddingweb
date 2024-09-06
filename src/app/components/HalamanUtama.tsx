// src/components/HalamanUtama.tsx
import React from 'react';

interface HalamanUtamaProps {
  className?: string; // Izinkan properti className
}

const HalamanUtama: React.FC<HalamanUtamaProps> = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="text-5xl font-bold">Ini Halaman Utama</h1>
    </div>
  );
};

export default HalamanUtama;
