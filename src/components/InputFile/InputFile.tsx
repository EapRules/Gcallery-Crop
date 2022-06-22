import styles from "./InputFile.module.css";

interface Props {}

const InputFile = () => {
  const onChange = (e: any) => {
    console.log(e.target.files);
  };

  return (
    <div className={styles.container}>
      <input type="file" id="file" style={{display: 'none'}} />
      <label htmlFor="file">
        <a>Upload File</a>
      </label>
    </div>
  );
};

export default InputFile;
