import React from "react";

function TopBar({ BlockOrUnblock, deleteUsers, Logout, user }) {
  return (
    <div className="bg-gray-700 lg:h-20 h-56 flex flex-col lg:flex-row justify-center items-center md:gap-[1em]">
      <span className="text-white font-medium ms-12 text-2xl font-sans">
        User Management
      </span>
      <div className="flex gap-24 mx-auto py-3 px-12">
        {/*block button*/}
        <button
          title="block users"
          className="bg-red-500 py-2 w-20 text-white text-center text-base font-medium tracking-wider mx-auto rounded-md hover:bg-red-400 hover:text-gray-100 hover:translate-y-[0.5px]"
          onClick={() => BlockOrUnblock(false)}
        >
          Block
        </button>

        {/*unblock button*/}
        <button
          title="unblock users"
          className="bg-green-600 py-2 w-20 font-medium tracking-wider rounded-md hover:bg-green-500 hover:translate-y-[0.5px]"
          onClick={() => BlockOrUnblock(true)}
        >
          <img className="w-6 mx-auto" src="/unblock.svg" alt="unblock_img" />
        </button>

        {/*delete button*/}
        <button
          title="delete users"
          className="bg-red-500 py-2 w-20 text-white text-center text-sm font-medium tracking-wider mx-auto rounded-md hover:bg-red-400 hover:text-gray-100 hover:translate-y-[0.5px]"
          onClick={deleteUsers}
        >
          <img className="w-5 mx-auto" src="/delete.svg" alt="delete_img" />
        </button>
      </div>

      {/*Logout button*/}
      <div className="me-12 flex flex-col items-center">
        <p className=" text-gray-300">{user}</p>
        <button
          className=" text-white text-base tracking-wider underline hover:text-blue-300 hover:translate-y-[0.5px]"
          onClick={Logout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default TopBar;
