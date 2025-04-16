import "./Gallery.css";
import img1 from "../../assets/galeria/DALL·E 2024-05-24 21.01.50 - Create an individual persona for Pedro in a similar style to the provided example. __Persona (Pedro)_ _- 12-year-old boy with light brown hair and bro.jpg";
import img2 from "../../assets/galeria/DALL·E 2024-05-24 21.06.09 - Create an individual persona for Julia in the same layout and style as the previous persona for Pedro. __Persona (Julia)_ _- 16-year-old girl with dar.jpg";
import img3 from "../../assets/galeria/DALL·E 2024-05-24 21.06.11 - Create an individual persona for Lucas in the same layout and style as the previous persona for Pedro. __Persona (Lucas)_ _- 14-year-old boy with dark.jpg";
import img4 from "../../assets/galeria/Times_Square-27527 (2).jpg";
import img5 from "../../assets/galeria//b2e69c61d4261ed21be2f6858ac347d7.jpg";
import img6 from "../../assets/galeria/gameover.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Imagem ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;
