import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {clearUser} from "../redux/userReducer"; // Adjust the path to your userReducer
import {useNavigate} from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user);
  console.log(user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login"); // Adjust the path to your login route
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Kanban App</h1>
      <div className="flex items-center">
        {user.user ? (
          <>
            <span className="mr-4">{user.user.username}</span>
            <button
              onClick={handleLogout}
              className="bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")} // 
            className="bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 transition duration-200"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
