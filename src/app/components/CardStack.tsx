// components/SwipeCard.tsx
import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const initialCards = [
  { id: 1, url: "/images/im1.jpg" },
  { id: 2, url: "/images/im2.jpg" },
  { id: 3, url: "/images/im3.jpg" },
  { id: 4, url: "/images/im4.jpg" },
  { id: 5, url: "/images/im5.jpg" },
  { id: 6, url: "/images/im6.jpg" },
  { id: 7, url: "/images/im7.jpg" },
  { id: 8, url: "/images/im8.jpg" },
  { id: 9, url: "/images/im9.jpg" },
  { id: 10, url: "/images/im10.jpg" },
  { id: 11, url: "/images/im11.jpg" },
  { id: 12, url: "/images/im12.jpg" },
  { id: 13, url: "/images/im13.jpg" },
  { id: 14, url: "/images/im14.jpg" },
  { id: 15, url: "/images/im15.jpg" },
];

const SwipeCard: React.FC = () => {
  const [cards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
  const [, setShowReload] = useState(false);

  // Handle swipe actions
  const swiped = (direction: string, id: number) => {
    console.log(`Swiped ${direction} on card ${id}`);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setShowReload(true); // Tampilkan tombol reload ketika kartu habis
    }
  };

  // Handle when card is out of frame
  const outOfFrame = (id: number) => {
    console.log(`Card ${id} is out of frame!`);
  };

  return (
    <div className="relative flex justify-center pt-5 min-h-screen">
      {cards.slice(0, currentIndex + 1).map((card, index) => (
        <TinderCard key={card.id} onSwipe={(dir) => swiped(dir, card.id)} onCardLeftScreen={() => outOfFrame(card.id)} preventSwipe={index === cards.length - 1 ? [] : ["up", "down"]}>
          <div
            className="border-2 border-[#000]"
            style={{
              width: "300px",
              height: "400px",
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              borderRadius: "10px",
              position: "absolute",
              top: "0%", // Posisi atas dari gambar
              left: "50%",
              transform: `translate(-50%, 0) rotate(${index === currentIndex ? 0 : -5}deg)`,
              zIndex: index === currentIndex ? 1 : 0,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Menambahkan bayangan
            }}
          />
        </TinderCard>
      ))}

      {/* Gambar terakhir sebagai penanda */}
      {currentIndex < 1 && (
        <div
          className="border-2 border-[#000]"
          style={{
            width: "300px",
            height: "400px",
            backgroundImage: `url(${cards[cards.length - 15].url})`, // Gambar terakhir
            backgroundSize: "cover",
            borderRadius: "10px",
            position: "absolute",
            top: "0%", // Posisi atas dari gambar
            left: "50%",
            transform: `translate(-50%, 0)`,
            zIndex: 0,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Menambahkan bayangan
            opacity: 1, // Memberi efek transparansi jika diinginkan
          }}
        />
      )}
    </div>
  );
};

export default SwipeCard;
