// src/components/HalamanUtama.tsx
import React from "react";
import Image from "next/image";
import couple from "../../../public/images/couple-1.jpg";
import CountdownTimer from "./Countdown";
import afni from "../../../public/images/afni.jpg";
import galang from "../../../public/images/galang.jpg";
import GoogleMap from "./Map";

interface HalamanUtamaProps {
  className?: string; // Izinkan properti className
}

const HalamanUtama: React.FC<HalamanUtamaProps> = ({ className }) => {
  const targetDate = "2025-04-19T00:00:00";
  return (
    <div className={className}>
      <div id="section-1" className="w-full h-full pb-20 bg-[#f0f0f0]">
        <Image src={couple} alt="couple" className=" rounded-b-[100px] "></Image>
        <div className="text-white px-5">
          <div className="text-center uppercase text-black/60 mt-5">The wedding of</div>
          <div className="font-sacramento text-center text-5xl mt-5 text-black/60">
            Afni <span className="px-2">&</span> Galang
          </div>
          <div className=" mt-10 ">
            <div className="">
              <CountdownTimer targetDate={targetDate} />
            </div>
            <div className="text-center mt-5 text-sm text-black/60">Sabtu, 19 April 2025</div>
            <div className="bg-black/10 shadow-lg text-center my-5 py-2 px-6 mx-auto rounded-xl text-sm text-black/70 flex w-max">Save the Date</div>
          </div>
        </div>
      </div>
      <div id="section2" className=" bg-[#000] px-5 mb-20">
        <div className="text-white pt-20 text-center ">
          <p className="text-lg">Assalamu{"'"}alaikum Wr. Wb.</p>
          <p className="mt-5">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat dan teman-teman sekalian untuk menghadiri acara pernikahan kami :</p>
        </div>
        <div className="w-full text-white text-center">
          <Image src={afni} alt="" className="rounded-full p-10"></Image>
          <p className="-mt-5 text-2xl">Nurafni Putri Azzahra</p>
          <p className="mt-4">Putri pertama bapak Ismail & Ibu Fitri</p>
          <div className="mt-4">Instagram</div>
        </div>
        <div className="text-white text-center my-7">
          <span>
            <svg className="h-10 w-auto flex justify-center mx-auto" fill="#ff5252" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
              </g>
            </svg>
          </span>
        </div>
        <div className="w-full text-white text-center ">
          <Image src={galang} alt="" className="rounded-full p-10 -mt-7"></Image>
          <p className="-mt-5 text-2xl">Galang Al Rizky</p>
          <p className="mt-4">Putra ke-3 Bapak Harun & Ibu Rahma</p>
          <div className="mt-4">Instagram</div>
        </div>
      </div>
      <div id="section-2" className=" bg-[#f0f0f0] pt-20 text-center px-5 pb-40">
        <div className="mb-10 text-4xl">Wedding Event</div>
        <div className="p-5 bg-white/50 shadow-lg text-black/80 rounded-3xl">
          <div className="text-4xl ">Akad Nikah</div>
          <div>Sabtu, 19 April 2025</div>
          <div className="my-3">Pukul 09.00 WIB</div>
          <div>Cipinang, Jakarta timur</div>
        </div>
        <div className="p-5 mt-5 bg-white/50 shadow-lg text-black/80 rounded-3xl">
          <div className="text-4xl ">Resepsi</div>
          <div>Sabtu, 19 April 2025</div>
          <div className="my-3">Pukul 11.00 WIB</div>
          <div>Gedung Serbaguna, Bekasi Timur</div>
          <div className="mt-10"><GoogleMap/></div>
        </div>
      </div>
    </div>
  );
};

export default HalamanUtama;
