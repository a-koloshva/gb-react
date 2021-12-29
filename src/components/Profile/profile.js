import { useContext } from "react";
import { ProfileContext } from "../../utils/ProfileContext";
import Form from "../Form/Form";

export const Profile = () => {
  const { name, setName } = useContext(ProfileContext);
  return (
    <>
      <h3>THIS IS PROFILE</h3>
      <span>{name}</span>
      <Form onSubmit={setName} />
    </>
  );
};
