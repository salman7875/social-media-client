import { useLocation } from "react-router-dom";
import SearchUser from "../../layout/SearchUser/SearchUser";
import "./userList.scss";

const UserList = () => {
  const location = useLocation();

  const header = location.pathname === "/followers" ? "Followers" : "Followings";

  return (
    <div className="userList">
      <header>
        <span>{header}</span>
      </header>
      <SearchUser />
      <SearchUser />
      <SearchUser />
      <SearchUser />
      <SearchUser />
      <SearchUser />
      <SearchUser />
      <SearchUser />
    </div>
  );
};

export default UserList;
