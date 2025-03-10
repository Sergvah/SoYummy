import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operation";
import {
  ButtonList,
  LogOutButton,
  LogOutContainer,
  LogOutText,
} from "./LogOutModal.styled";

export const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logOut());

  return (
    <LogOutContainer>
      <LogOutText>Are you sure you want to log out?</LogOutText>
      <ButtonList>
        <LogOutButton
          className="Primary"
          onClick={handleLogout}
        >
          Log out
        </LogOutButton>
        <LogOutButton onClick={onClose}>Cancel</LogOutButton>
      </ButtonList>
    </LogOutContainer>
  );
};
