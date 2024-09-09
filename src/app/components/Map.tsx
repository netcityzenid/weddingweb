// components/GoogleMap.tsx
export default function GoogleMap() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        src="https://www.google.com/maps/place/6%C2%B015'28.1%22S+106%C2%B059'11.6%22E/@-6.25781,106.986547,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.25781!4d106.986547?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
}
