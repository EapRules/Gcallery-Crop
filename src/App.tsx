import { useState } from "react";
import "./App.css";
import CropImage from "./components/CropImage/CropImage";
import Gallery from "./components/Gallery/Gallery";
import { useImages } from "./mock/useImages";

function App() {
  const { data } = useImages();
  const [imageSelected, setImageSelected] = useState<any>(null);

  const selected = (id: any) => {
    const selectedImage = data.find((img) => id === img.id);
    setImageSelected(selectedImage?.url);

    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      <Gallery data={data} setImageSelected={selected} />
      {imageSelected && <CropImage imgUrl={imageSelected} />}
    </>
  );
}

export default App;
