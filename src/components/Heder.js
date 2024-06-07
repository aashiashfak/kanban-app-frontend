import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {clearUser, selectUser} from "../redux/userReducer"; // Adjust the path to your userReducer
import {useNavigate} from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);
  console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle logout button it clear the user from local storage and navigate to login page 
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login"); 
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Kanban App</h1>
      {user.user ? (
        <div className="flex items-center">
          <span className="mr-4">{user.user.username}</span>
          <button
            onClick={handleLogout}
            className="bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 transition duration-200"
          >
            Logout
          </button>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
