import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Videopage1 extends Component {
	render() {
		return (
			<ReactPlayer
				width="90%"
				height="90%"
				url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
				playing
				muted
			/>
		);
	}
}

export default Videopage1;
