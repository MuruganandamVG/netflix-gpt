import React from "react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const user = useSelector((state) => state.user);

  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
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

  const HandleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const HandleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
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
        <div className="flex justify-between items-center ">
          {showGptSearch && (
            <select
              className="px-2 m-2 h-10 bg-gray-700 text-white"
              onChange={HandleChangeLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-purple-700 my-4 mx-2  px-4 py-2 rounded-lg text-white"
            onClick={HandleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "Gpt Search"}
          </button>
          <img className="  mr-2 w-15 h-10 " src={USER} />
          <button className="font-bold text-white" onClick={HandleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
