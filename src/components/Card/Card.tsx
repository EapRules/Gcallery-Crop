import { FC } from "react";
import styles from "./Card.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

interface Props {
  name: string;
  image: string;
  size: string;
  extension: string;
  aspect_ratio: string;
}

const Card: FC<Props> = ({ name, image, size, extension, aspect_ratio }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageDetails}>
        <img className={styles.thumbnail} src={image} alt="img" />
        <div className={styles.imageDetails}>
          <div className={styles.description}>
            <span>Name: imagen4.jpg</span>
            <span>Size: 24kb</span>
            <span>Extension: jpg</span>
          </div>
        </div>
      </div>
      <div className={styles.iconsContainer}>
        <OpenInFullIcon />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Card;
