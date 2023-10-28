import avatarImage from "../assets/avatar.jpg";

export const Avatar = () => {
  return (
    <div className="avatar">
      <img className="avatar_image" src={avatarImage} alt="Avatar"></img>
    </div>
  );
};
