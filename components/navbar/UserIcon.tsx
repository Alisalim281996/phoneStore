import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { LuUser } from "react-icons/lu";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImg = user?.imageUrl;

  if (profileImg) {
    return (
      <div>
        <img src={profileImg} className="w-6 h-6 rounded-full object-cover" />
      </div>
    );
  }
  return <LuUser className="w-6 h-6 rounded-full bg-blue-700 text-white" />;
};

export default UserIcon;
