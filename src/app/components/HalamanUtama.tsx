// src/components/HalamanUtama.tsx
import React from "react";
import Image from "next/image";
import couple from "../../../public/images/couples.png";
import CountdownTimer from "./Countdown";

interface HalamanUtamaProps {
  className?: string; // Izinkan properti className
}

const HalamanUtama: React.FC<HalamanUtamaProps> = ({ className }) => {
  const targetDate = "2025-04-19T00:00:00";
  return (
    <div className={className}>
      <div className="">
        <Image src={couple} alt="couple" className=""></Image>
        <div className="text-white px-5">
          <div className="text-center uppercase text-white/50">The wedding of</div>
          <div className="font-sacramento text-center text-5xl mt-5">
            Afni <span className="px-2">&</span> Galang
          </div>
          <div className=" mt-10 ">
            <div className=" sticky top-0 py-5">
              <CountdownTimer targetDate={targetDate} />
            </div>
            <div className="text-center mt-5 text-sm ">Sabtu, 19 April 2024</div>

            <div className="h-screen bg-red-">hi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanUtama;
