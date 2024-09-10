// components/Gallery.tsx
import React from "react";
import Gallery from "react-photo-gallery";

interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: "/images/IMG_3835.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/IMG_3838.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/IMG_3854.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/IMG_3860.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/IMG_3897.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/IMG_3898.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/IMG_3899.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/IMG_3901.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/IMG_3838.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/IMG_3902.jpg",
    width: 3,
    height: 4,
  },
  // Tambahkan gambar lainnya sesuai keinginan
];

const MyGallery: React.FC = () => {
  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
};

export default MyGallery;
