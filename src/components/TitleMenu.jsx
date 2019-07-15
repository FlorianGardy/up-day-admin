import React from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "semantic-ui-react";

import { getNameSelector } from "../pills/login/login.selector";

const _title = "UP Day Administration";

const TitleMenu = ({ name }) => {
  return (
    <Menu inverted>
      <Menu.Item header>
        <Icon name="settings" />
        {_title}
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
