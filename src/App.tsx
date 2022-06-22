import React from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import { useImages } from "./mock/useImages";

function App() {
  const { data } = useImages();

  return (
    <div>
      <Gallery data={data} />
    </div>
  );
}

export default App;
