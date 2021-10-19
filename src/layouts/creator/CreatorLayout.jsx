import { Fragment } from "react";
import CreatorNavbar from "navbars/creator/CreatorNavbar";

const CreatorLayout = ({ children }) => {
  return (
    <>
      <Fragment>
        <CreatorNavbar />
        <main>{children}</main>
      </Fragment>
    </>
  );
};

export default CreatorLayout;
