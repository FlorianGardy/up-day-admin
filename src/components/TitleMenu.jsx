import React from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "semantic-ui-react";

import { getNameSelector } from "../pills/login/login.selector";

const TITLE = "UP Day Administration";
const menuStyle = {backgroundColor:"#243330"}

const TitleMenu = ({ name }) => {
  return (
    <Menu inverted style={menuStyle}>
      <Menu.Item header>
        <Icon name="settings" />
        {TITLE}
      </Menu.Item>
      <Menu.Item name="AdminUser" position="right">
        <Icon circular inverted color="orange" name="user md" />
        {name}
      </Menu.Item>
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    name: getNameSelector(state)
  };
};

export default connect(mapStateToProps)(TitleMenu);
