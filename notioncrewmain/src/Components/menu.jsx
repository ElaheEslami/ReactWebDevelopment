import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import '../cssfiles/Menu.css';
class Menu2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	// This keeps your state in sync with the opening/closing of the menu
	// via the default means, e.g. clicking the X, pressing the ESC key etc.
	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen });
	}

	// This can be used to close the menu, e.g. when a user clicks a menu item
	closeMenu() {
		this.setState({ menuOpen: false });
	}

	// This can be used to toggle the menu, e.g. when using a custom icon
	// Tip: You probably want to hide either/both default icons if using a custom icon
	// See https://github.com/negomi/react-burger-menu#custom-icons
	toggleMenu() {
		this.setState((state) => ({ menuOpen: !state.menuOpen }));
	}

	render() {
		return (
			<div>
				<Menu
					noOverlay
					isOpen={this.state.menuOpen}
					onStateChange={(state) => this.handleStateChange(state)}
				>
					<a
						onClick={() => this.closeMenu()}
						data-menuanchor="Projects"
						href="#Projects"
					>
						Projects
					</a>
					<a
						onClick={() => this.closeMenu()}
						data-menuanchor="ContactUs"
						href="#ContactUs"
					>
						Contact
					</a>
					<a
						onClick={() => this.closeMenu()}
						data-menuanchor="OurTeam"
						href="#OurTeam"
					>
						Team
					</a>
					<a
						onClick={() => this.closeMenu()}
						data-menuanchor="Clients"
						href="#Clients"
					>
						Clients
					</a>
				</Menu>
				{/* <CustomIcon onClick={() => this.toggleMenu()} /> */}
			</div>
		);
	}
}

export default Menu2;
