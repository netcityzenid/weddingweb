// src/components/HalamanUtama.tsx
import React from "react";
import Image from "next/image";
import CountdownTimer from "./Countdown";
import afni from "../../../public/images/afni.jpg";
import galang from "../../../public/images/galang.jpg";
import hand from "../../../public/images/hand.png";
import bl from "../../../public/images/BL.png";
import br from "../../../public/images/BR.png";
import goldleaf from "../../../public/images/goldleaf.png";
import FallingLeaves from "./FallingLeaf";
import SwipeCard from "./CardStack";
import im15 from "../../../public/images/im15.jpg";
import im1 from "../../../public/images/im1.jpg";
import couple from "../../../public/images/couple-1.jpg";
import CommentList from "./GetComment";
import CommentLists from "./Lists";
import CommentForms from "./Form";
interface HalamanUtamaProps {
  className?: string; // Izinkan properti className
}

const HalamanUtama: React.FC<HalamanUtamaProps> = ({ className }) => {
  const targetDate = "2025-04-19T00:00:00";
  return (
    <div className={className}>
      <div className=" overflow-x-hidden">
        <div id="section-1" className="w-full h-full pb-20 bg-[#f0f0f0] relative ">
          <Image src={goldleaf} alt="" className="absolute bottom-[400px] -left-20 opacity z-[51] h-32 w-auto transform scale-x-[-1] "></Image>
          <Image src={goldleaf} alt="" className="absolute bottom-[400px] -left-20 opacity z-[50] h-32 w-auto transform scale-x-[-1] blur-lg"></Image>
          <Image src={goldleaf} alt="" className="absolute -bottom-10 -right-1/2  w-auto  opacity-20 "></Image>
          <Image src={goldleaf} alt="" className="absolute top-[0] -right-16 opacity z-[51] h-32 w-auto"></Image>
          <Image src={goldleaf} alt="" className="absolute top-[0] -right-16 opacity-80 z-[50] h-32 w-auto blur-lg"></Image>
          <div className=" relative overflow-hidden">
            <FallingLeaves />
            <Image src={im1} alt="couple" className=" rounded-b-[100px] border-b-4 border-[#d6b064]"></Image>
          </div>
          <div className="text-white px-5 relative z-[50]">
            <div className="text-center uppercase text-black/60 mt-5">The wedding of</div>
            <div className="font-custom text-center text-6xl mt-5 text-black leading-none">
              Afni
              <span className="px-2">&</span>
              Galang
            </div>
            <div className=" mt-10 ">
              <div className="">
                <CountdownTimer targetDate={targetDate} />
              </div>
              <div className="text-center mt-5 text-sm text-black/80">Sabtu, 19 April 2025</div>
              <div className="bg-[#d6b064] shadow-lg text-center my-5 py-2 px-6 mx-auto rounded-xl text-sm text-black/70 flex w-max">Save the Date</div>
            </div>
          </div>
        </div>
        <div id="section2" className=" bg-[#0a0a0a] px-5 mb-20">
          <div className="text-white pt-20 text-center font-serif ">
            <p className="text-xl font-semibold">Assalamu{"'"}alaikum Wr. Wb.</p>
            <p className="mt-5">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat dan teman-teman sekalian untuk menghadiri acara pernikahan kami :</p>
          </div>
          <div className="w-full text-white text-center bg-white/5 rounded-2xl p-5 mt-4">
            <Image src={afni} alt="" className="rounded-xl  mx-auto"></Image>
            <p className="mt-5 text-2xl font-bold text-white/70">Nurafni Putri Azzahra</p>
            <p className="mt-4 text-white/50">Putri pertama bapak Ismail & Ibu Fitri</p>
            <div className="mt-4">Instagram</div>
          </div>
          <div className="text-white text-center my-7">
            <span className=" font-sacramento text-6xl items-end flex justify-center">&</span>
          </div>
          <div className="w-full text-white text-center bg-white/5 rounded-2xl p-5 mt-4">
            <Image src={galang} alt="" className="rounded-xl  mx-auto"></Image>
            <p className="mt-5 text-2xl font-bold text-white/70">Galang Al Rizky</p>
            <p className="mt-4 text-white/50">Putra ke-3 Bapak Harun & Ibu Rahma</p>
            <div className="mt-4">Instagram</div>
          </div>
        </div>
        <div id="section-2" className=" bg-[#f0f0f0] pt-20 text-center pb-56 relative">
          <Image src={hand} alt="" className=" absolute bottom-0 mb-10"></Image>
          <div className=" px-5 z-50 relative">
            <div className="mb-10 text-4xl block">
              <div className="text-black uppercase">Wedding</div>
              <div className="font-custom text-5xl -mt-5 text-[#d6b064]">Event</div>
            </div>
            <div className="p-5 bg-white/50 overflow-hidden shadow-lg text-black/80 rounded-3xl relative">
              <div className=" opacity-45">
                <Image src={br} alt="" className="absolute -right-10 bottom-0 h-20 w-auto"></Image>
                <Image src={br} alt="" className="absolute -right-10  h-40 w-auto"></Image>
                <Image src={br} alt="" className="absolute -right-10 h-20 w-auto"></Image>
              </div>
              <div className=" relative z-100">
                <div className="text-6xl font-custom">Akad Nikah</div>
                <div>Sabtu, 19 April 2025</div>
                <div className="my-3">Pukul 09.00 WIB</div>
                <div className="font-bold">KUA Cipinang, Jakarta timur</div>
                <div className="mt-5">
                  <a className="pl-2 pr-4 py-2 text-sm shadow-lg flex bg-[#d6b064] items-center w-max mx-auto rounded-full hover:scale-110 transition-all" href="https://maps.app.goo.gl/FJ6GJ2NZstnXrWrn6" target="_blank">
                    <span>
                      <svg className="h-4 w-auto mr-2" width="64px" height="64px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                            fill="#000000"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    <span>Lihat Lokasi</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-5 mt-5 overflow-hidden bg-white/50 shadow-lg text-black/80 rounded-3xl backdrop-blur-lg backdrop-filter relative">
              <div className=" opacity-45">
                <Image src={bl} alt="" className="absolute -left-10 bottom-0 h-20 w-auto"></Image>
                <Image src={bl} alt="" className="absolute -left-10  h-40 w-auto"></Image>
                <Image src={bl} alt="" className="absolute -left-10 h-20 w-auto"></Image>
              </div>
              <div className=" relative z-100">
                <div className="text-6xl font-custom ">Resepsi</div>
                <div>Sabtu, 19 April 2025</div>
                <div className="my-3">Pukul 11.00 WIB</div>
                <div className="font-bold">Gedung Serbaguna, Bekasi Timur</div>
                <div className="mt-5">
                  <a className="pl-2 pr-4 py-2 text-sm shadow-lg flex bg-[#d6b064] items-center w-max mx-auto rounded-full hover:scale-110 transition-all" href="https://maps.app.goo.gl/FJ6GJ2NZstnXrWrn6" target="_blank">
                    <span>
                      <svg className="h-4 w-auto mr-2" width="64px" height="64px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                            fill="#000000"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    <span>Lihat Lokasi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section-3" className=" bg-[#0a0a0a]  px-5  mb-20">
          <div className="text-white text-center mt-20 flex justify-center mb-5">
            <p className="text-5xl font-custom text-[#d6b064]"> Our Gallery</p>
          </div>
          <div className=" relative flex justify-center items-center ">
            <div className="absolute w-[300px] h-[400px] top-5 rounded-xl "></div>
            <div className="h-[430px] w-[300px] overflow-hidden top-[60px] rounded-[10px] absolute">
              <Image src={im15} alt="" className=" "></Image>
            </div>
            <SwipeCard />
          </div>
          <div className="bg-white/5 rounded-[30px] mt-10 overflow-hidden">
            <div className="text-[#f0f0f0] bg-[#]  text-center p-5  leading-8 text-sm font-light">
              &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang.
              Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&quot;
              <br />
              <span className="font-semibold">Q.S Ar-Rum:21</span>
            </div>
            <div className="">
              <Image src={couple} alt="" className=""></Image>
            </div>
          </div>
        </div>
        <div id="section-4" className="h-full bg-[#f0f0f0] px-5 pt-20">
          <div className="text-center">
            <p className=" text-4xl z-1 relative uppercase text-[#0a0a0a]">Ucapan</p>
            <p className="text-5xl text-[#d6b064] font-custom -mt-5">dan Doa</p>
          </div>
          <div className="text-center mb-2">Kirim Ucapan dan Doa Restu</div>
          <div className="mt-10 pb-20">
            <CommentList />
          </div>
          <div className="h-full ">
            <div>
              <CommentForms />
            </div>
            <div>
              <CommentLists />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanUtama;
