import React from "react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER } from "../utils/constants";
const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");

        // ...
      } else {
        dispatch(removeUser());
        navigate("/");

        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <div className=" flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex w-28 justify-between align-middle ">
          <img className=" mt-4 w-15 h-10 " src={USER} />
          <button className="font-bold text-white" onClick={HandleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
