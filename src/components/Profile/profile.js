import { connect } from "react-redux";
import { logOut } from "../../service/firebase";
// import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
// import { selectShowName, selectUserName } from "../../store/profile/selectors";
import { setName, signOut, toggleName } from "../../store/profile/actions";
import Form from "../Form/Form";

// const Profile = () => {
//   const showName = useSelector(selectShowName, shallowEqual);
//   const userName = useSelector(selectUserName, shallowEqual);
//   const dispatch = useDispatch();

//   const handleChange = () => {
//     dispatch(toggleName);
//   };

//   const handleSubmit = (newName) => {
//     dispatch(setName(newName));
//   };

//   return (
//     <>
//       <h3>THIS IS PROFILE</h3>
//       <input type="checkbox" checked={showName} onChange={handleChange} />
//       {showName && <span>{userName}</span>}
//       <Form onSubmit={handleSubmit} />
//     </>
//   );
// };

// export default Profile;

const ProfileForConnect = ({
  showName,
  userName,
  changeName,
  toggleShowName,
}) => {
  const handleChange = () => {
    toggleShowName();
  };

  const handleSubmit = (newName) => {
    changeName(newName);
  };

  return (
    <>
      <h3>THIS IS PROFILE</h3>
      <button onClick={logOut}>SignOut</button>
      <input type="checkbox" checked={showName} onChange={handleChange} />
      {showName && <span>{userName}</span>}
      <Form onSubmit={handleSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  showName: state.profile.showName,
  userName: state.profile.name,
});

const mapDispatchtoProps = {
  changeName: setName,
  toggleShowName: () => toggleName,
};

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchtoProps
)(ProfileForConnect);
export default ConnectedProfile;
