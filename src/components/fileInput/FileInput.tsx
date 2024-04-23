import React from "react";
import CustomButton from "../customButton/CustomButton";

type Props = {
  setUrl: () => void;
};

const FileInput = ({setUrl}: Props) => {

  const fileReader = new FileReader();
  
  fileReader.onloadend = () => {
    setUrl(fileReader.result);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <CustomButton>
      <label>
        Выберите фото
        <input
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handleChange(e)}
        />
      </label>
    </CustomButton>
  );
};

export default FileInput;
