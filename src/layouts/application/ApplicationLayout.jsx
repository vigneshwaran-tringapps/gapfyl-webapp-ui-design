import { Fragment } from "react";
import ApplicationNavbar from "navbars/application/ApplicationNavbar";

const ApplicationLayout = ({ children }) => {
  return (
    <>
      <Fragment>
        <ApplicationNavbar />
        <main>{children}</main>
      </Fragment>
    </>
  );
};

export default ApplicationLayout;
