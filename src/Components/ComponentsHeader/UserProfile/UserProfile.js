import { setUserData } from "api";

import { useState } from "react";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import {
  AddPhotoButton,
  Button,
  ButtonClose,
  CircleImage,
  EditContainer,
  IconPen,
  Input,
  InputContainer,
  InputIcon,
} from "./UserProfile.styled";
import Loader from "Components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/categories/selectors";

export const UserProfile = ({ onClose, photoUrl, userName }) => {
  const [newName, setNewName] = useState(userName);
  const [avatar, setAvatar] = useState(photoUrl);
  const [file, setFile] = useState()
  const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);
  const uploadContent = (e) => {
    if (e.target.files[0]) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setAvatar(objectUrl);
      setFile(e.target.files[0])
    }
  };

  const handleChange = async () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", newName);

    try {
      await setUserData(formData);

    } catch (error) {
      console.log(error);
    }
     window.location.reload();
  };

  return (
    <EditContainer>
      <CircleImage style={{ backgroundImage: `url(${avatar})` }}>
        <AddPhotoButton>
          <AiOutlinePlus
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          <input type="file" accept="image/*" onChange={uploadContent} hidden />
        </AddPhotoButton>
      </CircleImage>

      <InputContainer>
        <Input
          type="text"
          placeholder="name"
          value={newName}
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />

        <InputIcon>
          <AiOutlineUser
            style={{
              width: "24px",
              height: "24px",
              color: `${({ theme }) => theme.colors.textPrimary}`,
            }}
          />
        </InputIcon>
        <IconPen />
      </InputContainer>
      <Button type="submit" onClick={handleChange}>
        Save changes
      </Button>
      <ButtonClose onClick={onClose} />
      {isLoading && !error && <Loader />}
    </EditContainer>
  );
};
