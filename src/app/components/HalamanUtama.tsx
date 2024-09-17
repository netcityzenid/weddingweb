// src/components/HalamanUtama.tsx
import React, { useState } from "react";
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
import FormData from "./FromData";
import { motion, AnimatePresence } from "framer-motion";
import permata from "../../../public/images/permata.png";
import bca from "../../../public/images/BCA.svg";
import lines from "../../../public/images/lines.png";
import im12 from "../../../public/images/im12.jpg";
interface HalamanUtamaProps {
  className?: string; // Tambahkan prop comments
}

const HalamanUtama: React.FC<HalamanUtamaProps> = ({ className }) => {
  const targetDate = "2025-04-19T00:00:00";
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const copyToClipboard = () => {
    // The text you want to copy
    const textToCopy = "1235003860";

    // Use the Clipboard API to write the text
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        // Optionally handle success (e.g., show a message)
        alert("Text copied to clipboard!");
      },
      (err) => {
        // Optionally handle error (e.g., show an error message)
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const copyToClipboards = () => {
    // The text you want to copy
    const textToCopy = "123123123";

    // Use the Clipboard API to write the text
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        // Optionally handle success (e.g., show a message)
        alert("Text copied to clipboard!");
      },
      (err) => {
        // Optionally handle error (e.g., show an error message)
        console.error("Failed to copy text: ", err);
      }
    );
  };
  const copyAlamat = () => {
    // The text you want to copy
    const textToCopy = "Jl. laskar raya Gg. mushola al ikhlas rt.003/02 no.128 pekayon jaya, bekasi selatan, Bekasi 17148";

    // Use the Clipboard API to write the text
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        // Optionally handle success (e.g., show a message)
        alert("Text copied to clipboard!");
      },
      (err) => {
        // Optionally handle error (e.g., show an error message)
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleOpen1 = () => setIsOpen1(!isOpen1);
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
              <div className="text-center mt-5 text-sm text-black/80 items-center flex mx-auto justify-center">
                <span>
                  <svg className="h-4 w-auto mr-1" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>{" "}
                      <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#000000"></rect> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#000000"></rect>{" "}
                      <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#000000"></rect>{" "}
                    </g>
                  </svg>
                </span>
                <span>Sabtu, 19 April 2025</span>
              </div>
              <div className="bg-[#d6b064] shadow-lg text-center my-5 py-2 px-6 mx-auto text-sm text-black/70 flex w-max">Save the Date</div>
            </div>
          </div>
        </div>
        <div id="section2" className=" bg-[#0a0a0a] px-5 mb-20">
          <div className="text-white pt-20 text-center font-serif ">
            <p className="text-xl font-semibold">Assalamu{"'"}alaikum Wr. Wb.</p>
            <p className="mt-5">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat dan teman-teman sekalian untuk menghadiri acara pernikahan kami :</p>
          </div>
          <div className="w-full text-white text-center bg-white/5  p-5 mt-4">
            <Image src={afni} alt="" className="  mx-auto"></Image>
            <p className="mt-5 text-2xl font-bold text-white/70">Nurafni Putri Azzahra</p>
            <p className="mt-4 text-white/50">Putri pertama bapak Ismail & Ibu Fitri</p>
            <div className="mt-4">Instagram</div>
          </div>
          <div className="text-white text-center my-7">
            <span className=" font-sacramento text-6xl items-end flex justify-center">&</span>
          </div>
          <div className="w-full text-white text-center bg-white/5 p-5 mt-4">
            <Image src={galang} alt="" className=" mx-auto"></Image>
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
            <div className="p-5 bg-white/50 overflow-hidden shadow-lg text-black/80 relative">
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
            <div className="p-5 mt-5 overflow-hidden bg-white/50 shadow-lg text-black/80  backdrop-blur-lg backdrop-filter relative">
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
            <div className="h-[430px] w-[300px] overflow-hidden top-[60px] rotate-[5deg] absolute">
              <Image src={im15} alt="" className=" "></Image>
            </div>
            <SwipeCard />
          </div>
          <div className="bg-[#191919]  mt-10 overflow-hidden">
            <div className="text-white/60 bg-[#]  text-center p-5  leading-8 text-sm font-light">
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
        <div id="section-4" className="h-full bg-[#f0f0f0] pt-20 mb-20">
          <div className="text-center">
            <p className=" text-4xl z-1 relative uppercase text-[#0a0a0a]">Ucapan</p>
            <p className="text-5xl text-[#d6b064] font-custom -mt-5">dan Doa</p>
          </div>
          <div className="text-center mt-2">Kirim Ucapan dan Doa Restu</div>
          <div className="mt-5">
            <FormData />
          </div>
        </div>
        <div id="section-5" className="h-full mb-20 text-[#f0f0f0] px-5">
          <div className="text-4xl text-center text-[#d6b064] relative z-1 uppercase">Give a Gift</div>
          <div className="text-5xl text-center text-[#f0f0f0] font-custom -mt-5">Beri Hadiah</div>
          <div className=" text-center mt-5 text-[#f0f0f0] text-sm">kami menyambut setiap bentuk dukungan dan doa Anda. Terima kasih telah menjadi bagian dari perayaan ini dan berbagi kebahagiaan bersama kami.</div>
          <div className="mt-10">
            <div className="  rounded-[10px]">
              <div onClick={toggleOpen} className="text-center flex justify-center bg-[#d6b064] py-2  text-black cursor-pointer">
                <span>
                  <svg className="h-5 w-auto mr-1" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 8V21M12 8H7.5C6.83696 8 6.20107 7.73661 5.73223 7.26777C5.26339 6.79893 5 6.16304 5 5.5C5 4.83696 5.26339 4.20107 5.73223 3.73223C6.20107 3.26339 6.83696 3 7.5 3C11 3 12 8 12 8ZM12 8H16.5C17.163 8 17.7989 7.73661 18.2678 7.26777C18.7366 6.79893 19 6.16304 19 5.5C19 4.83696 18.7366 4.20107 18.2678 3.73223C17.7989 3.26339 17.163 3 16.5 3C13 3 12 8 12 8ZM3 14H21M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H6.2C5.0799 8 4.51984 8 4.09202 8.21799C3.71569 8.40973 3.40973 8.71569 3.21799 9.09202C3 9.51984 3 10.0799 3 11.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
                <span className="font-semibold">Cashless Gift</span>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.8 }}>
                    <div className=" overflow-hidden relative p-5 bg-gradient-to-bl from-[#111111] to-[#222222] mt-5 rounded-xl">
                      <Image src={lines} alt="lines" className="absolute -bottom-1 -right-1 opacity-50"></Image>
                      <div className="mb-8">
                        <Image src={permata} alt="permata" className="h-autp w-24"></Image>
                      </div>
                      <div className="grid grid-cols-3 h-8 w-14 mb-5 rounded bg-[#d6b064]">
                        <div className="grid grid-rows-3">
                          <div></div>
                          <div className="border-y border-black"></div>
                          <div></div>
                        </div>
                        <div className="border-x border-black rounded-lg"></div>
                        <div className="grid grid-rows-3">
                          <div></div>
                          <div className="border-y border-black"></div>
                          <div></div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <button onClick={copyToClipboard} className="font-mono relative text-xl mb-2 mr-2">
                          <span>1 2 3 5 0 0 3 8 6 0</span>
                          <span className="font-mono mb-2 absolute right-0 -top-5 text-xs opacity-60 ">tap to copy</span>
                        </button>
                      </div>
                      <div className="font-mono uppercase">Galang Al Rizky</div>
                    </div>
                    <div className=" overflow-hidden relative p-5 bg-gradient-to-bl from-[#111111] to-[#222222] mt-5 rounded-xl">
                      <Image src={lines} alt="lines" className="absolute -bottom-1 -right-1 opacity-50"></Image>
                      <div className="mb-8">
                        <Image src={bca} alt="permata" className="h-autp w-24"></Image>
                      </div>
                      <div className="grid grid-cols-3 h-8 w-14 mb-5 rounded bg-[#d6b064]">
                        <div className="grid grid-rows-3">
                          <div></div>
                          <div className="border-y border-black"></div>
                          <div></div>
                        </div>
                        <div className="border-x border-black rounded-lg"></div>
                        <div className="grid grid-rows-3">
                          <div></div>
                          <div className="border-y border-black"></div>
                          <div></div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <button onClick={copyToClipboards} className="font-mono relative text-xl mb-2 mr-2">
                          <span>1 2 3 1 2 3 1 2 3</span>
                          <span className="font-mono mb-2 absolute right-0 -top-5 text-xs opacity-60 ">tap to copy</span>
                        </button>
                      </div>
                      <div className="font-mono uppercase">Nurafni Putri Azzahra</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="mt-5">
            <div className="">
              <div onClick={toggleOpen1} className="text-center mb-5 flex justify-center bg-[#d6b064] py-2  text-black cursor-pointer">
                <span>
                  <svg className="h-5 w-auto mr-1" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 8V21M12 8H7.5C6.83696 8 6.20107 7.73661 5.73223 7.26777C5.26339 6.79893 5 6.16304 5 5.5C5 4.83696 5.26339 4.20107 5.73223 3.73223C6.20107 3.26339 6.83696 3 7.5 3C11 3 12 8 12 8ZM12 8H16.5C17.163 8 17.7989 7.73661 18.2678 7.26777C18.7366 6.79893 19 6.16304 19 5.5C19 4.83696 18.7366 4.20107 18.2678 3.73223C17.7989 3.26339 17.163 3 16.5 3C13 3 12 8 12 8ZM3 14H21M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H6.2C5.0799 8 4.51984 8 4.09202 8.21799C3.71569 8.40973 3.40973 8.71569 3.21799 9.09202C3 9.51984 3 10.0799 3 11.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
                <span className=" font-semibold">Special Gifts</span>
              </div>
              <AnimatePresence>
                {isOpen1 && (
                  <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.8 }}>
                    <div className="bg-gradient-to-bl font-mono overflow-hidden from-[#111111] to-[#222222] rounded-xl">
                      <div className="p-5">
                        <div className="mb-2 font-bold text-lg text-[#f0f0f0]">Afni / oma jidan</div>
                        <div className="mb-2 text-[#f0f0f0]">Jl. laskar raya Gg. mushola al ikhlas rt.003/02 no.128 pekayon jaya, bekasi selatan, Bekasi 17148</div>
                        <div className="font-bold  text-[#f0f0f0]">0895383142520</div>
                        <button onClick={copyAlamat} className="py-2 w-full flex text-center justify-center mt-5  border border-[#f0f0f093] text-[#f0f0f0]">
                          Salin Alamat{" "}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div id="section-6" className="bg-[#f0f0f0]  pt-20 relative">
          <div className="absolute top-0 h-60 bg-gradient-to-b from-[#f0f0f0] to-[#f0f0f000] via-[#f0f0f0] z-50 flex w-full"></div>
          <div className=" bg-[#f0f0f0] flex absolute "></div>
          <div className="z-50 px-5 relative">
            <div className="font-custom text-5xl text-[#0a0a0a] text-center mb-5">Terima Kasih</div>
            <div className="text-center">Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.</div>
            <div className=" relative">
              <Image src={im12} alt="couple" className=" mt-5 bg-[#f0f0f0]"></Image>
              <div className=" z-50 absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#fff] font-sacramento font-bold text-[40px] leading-none " style={{ textShadow: " 0px 0px 10px rgba(0, 0, 0, 0.6)" }}>
                Afni &<br />
                Galang
              </div>
            </div>
          </div>
          <div className="text-black text-xs relative z-50 mt-10 pb-10 text-center">
            Created with ❤️ by <a href="https://instagram.com/galangalrizky" target="_blank" className="font-semibold">galangalrizky</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanUtama;
