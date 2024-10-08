import Avatar from "./Avatar";

function Profile() {
  return (
    <Avatar
      person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
      size={100}
      age={18}
      edu="null"
    />
  );
}

export default Profile;
