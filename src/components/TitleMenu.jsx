import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";

export default class TitleMenu extends Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			< Menu inverted fixed stackable>
        <Menu.Item header>
          <Icon name="settings" />
            UP Day Administration
        </Menu.Item>
        
				<Menu.Item
					name="AdminUser"
					active={activeItem === "AdminUser"}
          onClick={this.handleItemClick}
          position="right"
				>
          <Icon circular inverted color="orange" name="user md" />
          Alice
        </Menu.Item>
			</Menu>
		);
	}
}
