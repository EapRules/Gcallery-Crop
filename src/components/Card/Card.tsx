import { FC } from "react";
import styles from "./Card.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CropIcon from "@mui/icons-material/Crop";

interface Props {
  id: any;
  name: string;
  url: string;
  size: string;
  extension: string;
  aspect_ratio: string;
  setImageSelected: React.Dispatch<any>;
}

const Card: FC<Props> = ({
  id,
  name,
  url,
  size,
  extension,
  setImageSelected,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageDetails}>
        <img className={styles.thumbnail} src={url} alt="thumbnail" />
        <div className={styles.imageDetails}>
          <div className={styles.description}>
            <span>Name: {name}</span>
            <span>Size: {size}</span>
            <span>Extension: {extension}</span>
          </div>
        </div>
      </div>
      <div className={styles.iconsContainer}>
        <CropIcon onClick={() => setImageSelected(id)} />
        <OpenInFullIcon />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Card;
