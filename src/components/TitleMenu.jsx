import React from "react";
import { connect } from "react-redux";
import { getName } from "../pills/login/login.selector";
import { Menu, Icon } from "semantic-ui-react";

const TitleMenu = ({name}) => {
		return (
			<Menu inverted style={{backgroundColor:"#243330"}}>
        <Menu.Item header>
          <Icon name="settings" />
            UP Day Administration
        </Menu.Item>
				<Menu.Item name="AdminUser" position="right">
          <Icon circular inverted color="orange" name="user md" />
          {name}
        </Menu.Item>
			</Menu>
		);
}

const mapStateToProps = state => {
	return {
		name: getName(state)
	};
};


export default connect(mapStateToProps)(TitleMenu);
