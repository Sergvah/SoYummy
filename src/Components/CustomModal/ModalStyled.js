import { AiOutlineClose } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
`;
export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
export const EditContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 425px;

  background: #fafafa;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 50px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CircleImage = styled.div`
  position: relative;
  margin-top: 10px;
  width: 103px;
  height: 103px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

export const AddPhotoButton = styled.label`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #8baa36;
  border-radius: 50%;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  margin-top: 16px;
  padding: 8px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  width: 100%;

  font-size: 14px;
  line-height: 21px;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 52px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
export const IconPen = styled(HiOutlinePencil)`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  padding: 8px 8px 8px 36px;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  width: 400px;
  height: 59px;
  font-size: 14px;
  line-height: 21px;

  &:focus {
    outline: none;
    border: 2px solid #8baa36;
    size: 18px;
  }
  ::placeholder {
    width: 52px;
    height: 27px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: #23262a;
    opacity: 0.8;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const Button = styled.button`
  margin-top: 32px;
  padding: 21px 138px;
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 8px;
  background-color: #8baa36;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #fafafa;
  cursor: pointer;
`;
export const ButtonClose = styled(AiOutlineClose)`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 24px;
  height: 24px;
`;

export const LogOutContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 215px;

  background: #fafafa;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 50px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LogOutText = styled.p`
  width: 288px;
  height: 24px;
  left: 106px;
  top: 50px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #23262a;
`;
export const LogOutButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 21px 39px;
  gap: 8px;

  background: #8baa36;
  border-radius: 6px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;

  color: #fafafa;
`;

export const ButtonList = styled.div`
display: flex;
gap: 16px;
margin-top: 32px;

`