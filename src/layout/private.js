//import libs
import React from "react";
import PropTypes from "prop-types";
import Header from "@modules/app/components/header";
import Footer from "@modules/app/components/footer";
import Sidebar from "../modules/app/components/sidebar";

// import components

const containerStyle = {
};

const displayName = "Private Layout";
const propTypes = {
  children: PropTypes.node.isRequired,
};

function PrivateLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {/* <Header /> */}
        <div style={containerStyle}>
          <main>{children}</main>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

PrivateLayout.dispatch = displayName;
PrivateLayout.propTypes = propTypes;

export default PrivateLayout;
