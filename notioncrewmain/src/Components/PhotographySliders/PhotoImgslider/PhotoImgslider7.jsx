import React, { Component } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

class PhotoImageslide7 extends Component {
	constructor() {
		super();
		this.state = {
			useGPURender: true,
			showNavs: true,
			showBullets: true,
			navStyle: 1,
			slideDuration: 0.5,
			bgColor: '#000000',
			slideIndexText: '',
		};
	}

	componentDidMount() {
		console.log('[App componentDidMount]');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[App componentDidUpdate]');
	}

	onClickNav = (toRight) => {
		console.log(`[App onClickNav] ${toRight}`);
	};

	onClickBullets = (idx) => {
		console.log(`[App onClickBullets] ${idx}`);
	};

	onStartSlide = (idx, length) => {
		console.log(`[App onStartSlide] ${idx}/${length}`);
		this.setState({ slideIndexText: `${idx} / ${length}` });
	};

	onCompleteSlide = (idx, length) => {
		console.log(`[App onCompleteSlide] ${idx}/${length}`);
		this.setState({ slideIndexText: `${idx} / ${length}` });
	};

	onToggleOptions = (value) => () => {
		console.log(`[App onToggleOptions] ${value}`);
		const updateValue = !this.state[value];
		this.setState({ [value]: updateValue });
	};

	onChangeSelect = (event) =>
		this.setState({ [event.target.name]: event.target.value });

	render() {
		const toggleOptions = ['useGPURender', 'showNavs', 'showBullets'];
		const images = [
			{ url: '/section1.jpg' },
			{ url: '/section2.jpg' },
			{ url: 'secton3.jpg' },
		];
		return (
			<div>
				<SimpleImageSlider
					width={'90%'}
					height={'90%'}
					images={images}
					showBullets={this.state.showBullets}
					showNavs={this.state.showNavs}
					useGPURender={this.state.useGPURender}
					navStyle={this.state.navStyle}
					slideDuration={this.state.slideDuration}
					onClickNav={this.onClickNav}
					onClickBullets={this.onClickBullets}
					onStartSlide={this.onStartSlide}
					onCompleteSlide={this.onCompleteSlide}
				/>
			</div>
		);
	}
}
export default PhotoImageslide7;
