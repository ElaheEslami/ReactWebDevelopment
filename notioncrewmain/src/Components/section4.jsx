import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../cssfiles/section4.css';

class ResponsivePlayer extends Component {
	render() {
		return (
			<div className="player-wrapper">
				<ReactPlayer
					className="react-player"
					url="https://notioncrew.com/wp-content/uploads/2020/02/final-1.mp4"
					playing
					muted
					width="80%"
					height="80%"
				/>
			</div>
		);
	}
}
export default ResponsivePlayer;
