import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Lightbox styles
import im1 from "../../../public/images/im1.jpg";
import im2 from "../../../public/images/im2.jpg";
import im3 from "../../../public/images/im3.jpg";
import im4 from "../../../public/images/im4.jpg";
import im5 from "../../../public/images/im5.jpg";
import im6 from "../../../public/images/im6.jpg";
import im7 from "../../../public/images/im7.jpg";
import im8 from "../../../public/images/im8.jpg";
import im9 from "../../../public/images/im9.jpg";
import im10 from "../../../public/images/im10.jpg";
import im11 from "../../../public/images/im11.jpg";
import im12 from "../../../public/images/im12.jpg";

export default function Gallery() {
  const images = [im1.src, im2.src, im3.src, im4.src, im5.src, im6.src, im7.src, im8.src, im9.src, im10.src, im11.src, im12.src]; // Array of image sources
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0); // Track the current photo index

  const openImage = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="mt-20">
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(0)}>
          <Image src={im1} alt="Image 1" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
        </div>
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(1)}>
          <Image src={im2} alt="Image 2" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(2)}>
          <Image src={im3} alt="Image 3" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
        </div>
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(3)}>
          <Image src={im4} alt="Image 4" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
        </div>
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(4)}>
          <Image src={im5} alt="Image 5" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(5)}>
          <Image src={im6} alt="Image 6" layout="intrinsic" objectFit="cover" className="absolute -bottom-2" />
        </div>
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(6)}>
          <Image src={im7} alt="Image 7" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(7)}>
          <Image src={im8} alt="Image 8" layout="intrinsic" objectFit="cover" className="absolute -bottom-2" />
        </div>
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(8)}>
          <Image src={im9} alt="Image 9" layout="intrinsic" objectFit="cover" className="absolute -bottom-2" />
        </div>
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(9)}>
          <Image src={im10} alt="Image 10" layout="intrinsic" objectFit="cover" className="absolute bottom-0" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(7)}>
          <Image src={im11} alt="Image 11" layout="intrinsic" objectFit="cover" className="absolute -bottom-5" />
        </div>
        <div style={{ aspectRatio: "1/1" }} className="flex overflow-hidden relative cursor-pointer" onClick={() => openImage(8)}>
          <Image src={im12} alt="Image 12" layout="intrinsic" objectFit="cover" className="absolute -bottom-10" />
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]} // Next image in array
          prevSrc={images[(photoIndex + images.length - 1) % images.length]} // Previous image in array
          onCloseRequest={() => setIsOpen(false)} // Close the lightbox
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)} // Go to previous image
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)} // Go to next image
        />
      )}
    </div>
  );
}
