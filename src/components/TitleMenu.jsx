import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Icon, Dropdown } from "semantic-ui-react";

import { getNameSelector } from "../pills/login/login.selector";
import handleSignOut from "../API/handleSignOut";

const TITLE = "UP Day Administration";
const menuStyle = { backgroundColor: "#243330" };

const options = [
  {
    key: "sign-out",
    text: "Se déconnecter",
    icon: "sign out",
    onClick: handleSignOut
  }
];

const TitleMenu = ({ name }) => {
  if (!localStorage.getItem("user")) {
    return <Redirect to="/users" />;
  }

  return (
    <Menu inverted style={menuStyle}>
      <Menu.Item header>
        <Icon name="settings" />
        {TITLE}
      </Menu.Item>
      <Menu.Item name="AdminUser" position="right">
        <Dropdown
          trigger={
            <>
              <Icon circular inverted color="orange" name="user md" />
              {name}
            </>
          }
          options={options}
          pointing="top right"
          icon={null}
        />
      </Menu.Item>
    </Menu>
  );
};

const mapStateToProps = state => ({
  name: getNameSelector(state)
});

export default connect(mapStateToProps)(TitleMenu);
