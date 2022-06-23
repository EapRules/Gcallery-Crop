import { FC } from "react";
import Card from "../Card/Card";
import InputFile from "../InputFile/InputFile";
import styles from "./Gallery.module.css";

interface Props {
  data: any[];
  setImageSelected: React.Dispatch<any>;
}

const Gallery: FC<Props> = ({ data, setImageSelected }) => {
  return (
    <div className={styles.container}>
      <div className={styles.galleryWrapper}>
        <h3 style={{ margin: 0, padding: 20 }}>Gallery</h3>
        <div className={styles.galleryList}>
          {data.map((item) => (
            <Card {...item} setImageSelected={setImageSelected} />
          ))}
        </div>
        <div className={styles.buttonsContainer}>
          <InputFile />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
