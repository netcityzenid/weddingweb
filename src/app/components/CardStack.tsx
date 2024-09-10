// components/SwipeCard.tsx
import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const initialCards = [
  { id: 1, url: "/images/IMG_3835.jpg" },
  { id: 2, url: "/images/IMG_3838.jpg" },
  { id: 3, url: "/images/IMG_3854.jpg" },
  { id: 4, url: "/images/IMG_3860.jpg" },
  { id: 5, url: "/images/IMG_3865.jpg" },
  { id: 6, url: "/images/IMG_3899.jpg" },
  { id: 7, url: "/images/IMG_3901.jpg" },
  { id: 8, url: "/images/IMG_3909.jpg" },
  { id: 9, url: "/images/IMG_3911.jpg" },
  { id: 10, url: "/images/IMG_3925.jpg" },
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
      {cards.map((card, index) => (
        <TinderCard key={card.id} onSwipe={(dir) => swiped(dir, card.id)} onCardLeftScreen={() => outOfFrame(card.id)} preventSwipe={["up", "down"]}>
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
    </div>
  );
};

export default SwipeCard;
