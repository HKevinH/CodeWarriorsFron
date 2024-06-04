import { React } from "react";
import AVATAR from "../../assets/img/avatarDefault.png";

const Avatar = ({ src, alt }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={src || AVATAR}
        alt={alt}
        className="w-[300px] h-[326px] object-cover rounded-full"
      />
    </div>
  );
};

export { Avatar };
