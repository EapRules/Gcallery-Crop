import { FC, useCallback, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import getCroppedImg from "../../utils/crop";
import styles from "./CropImage.module.css";

interface Props {
  imgUrl: string;
}

const CropImage: FC<Props> = ({ imgUrl }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImg, setCroppedImg] = useState<any>(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const onCrop = async () => {
    const croppedImage = await getCroppedImg(imgUrl, croppedAreaPixels);
    setCroppedImg(croppedImage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 style={{ margin: 0, padding: 20 }}>Crop</h3>
        <div className={styles.cropContent}>
          <Cropper
            image={imgUrl}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div style={{ padding: 20 }}>
          <button onClick={onCrop}>Save</button>
        </div>
        <img src={croppedImg} width={200} height={200} alt="cropped" />
      </div>
    </div>
  );
};

export default CropImage;
