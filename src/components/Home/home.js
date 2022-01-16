import { useState } from "react";
import { Link } from "react-router-dom";
import { logIn, signUp } from "../../service/firebase";

export const Home = ({ isSignUp }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUp(email, pass);
      } else {
        await logIn(email, pass);
      }
      setEmail("");
      setPass("");
    } catch (e) {
      setError(e.message);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <>
      <h3>{isSignUp ? "Sign Up" : "Sign In"}</h3>
      <form onSubmit={handleClick}>
        <input type="email" value={email} onChange={onChangeEmail} />
        <input type="password" value={pass} onChange={onChangePass} />
        <button>SingIn</button>
      </form>
      {error && <h4>{error}</h4>}
      <Link to={isSignUp ? "/" : "/signup"}>
        {isSignUp ? "Sign In" : "Sign Up"}
      </Link>
    </>
  );
};
