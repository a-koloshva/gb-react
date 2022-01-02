import { useContext } from "react";
import AUTHORS from "../../../utils/constants";
import { ProfileContext } from "../../../utils/ProfileContext";

export const Message = ({ author, text }) => {
  const { name } = useContext(ProfileContext);
  return (
    <div>
      {author === AUTHORS.HUMAN ? name : author}: {text}
    </div>
  );
};
