import { Fragment } from "react";
import UserNavbar from "navbars/user/UserNavbar";

const UserLayout = ({ children }) => {
  return (
    <>
      <Fragment>
        <UserNavbar />
        <main>{children}</main>
      </Fragment>
    </>
  );
};

export default UserLayout;
