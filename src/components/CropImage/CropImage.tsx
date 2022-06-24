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
    const croppedImage: any = await getCroppedImg(imgUrl, croppedAreaPixels);
    
    const data = new FormData();
    data.append("file", croppedImage);
    fetch("https://us-central1-react-ecommerce-8b79b.cloudfunctions.net/api1/upload", {
      method: "POST",
      body: data,
      redirect: 'follow'
    })
      .then(
        (response) => response.json() // if the response is a JSON object
      )
      .then(
        (success) => console.log(success) // Handle the success response object
      )
      .catch(
        (error) => console.log(error) // Handle the error response object
      );
    //setCroppedImg(croppedImage);
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
        <div className={styles.rangeContainer}>
          <input
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e: any) => {
              setZoom(e.target.value);
            }}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <button onClick={onCrop}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default CropImage;
