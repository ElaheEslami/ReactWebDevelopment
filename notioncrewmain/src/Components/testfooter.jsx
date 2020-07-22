import React from 'react';
import '../cssfiles/testfooter.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';
class TestFooter extends React.Component {
	constructor() {
		super();
	}

	render() {
		var divStyle = {
			color: 'white',
			'font-size': '2vw',
			'font-weight': 700,
			'text-decoration': 'uppercase',
		};
		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 6,
			initialSlide: 0,
			autoplay: true,

			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
			],
		};

		return (
			<section className="footersection">
				<div className="header-scroll">
					<h2>Our Clients</h2>
				</div>
				<div class="container-scroll">
					<Slider {...settings}>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
								></img>
							</div>
						</div>
					</Slider>
				</div>
				<footer>
					<div className="footer">
						<div className="footercontent">
							<div className="footerpart about">
								<p>
									<a class="footerlink" href="">
										240, rue des Forges,
										<br />
										suite 301 Trois-Rivieres,
										<br />
										QC G9A 2G8 <br />
									</a>
								</p>
							</div>
							<div style={divStyle}>
								<p>
									NOTION <span>CREW</span>
								</p>
							</div>
							<div className="footerpart social">
								<p>
									<a class="footerlink" href="">
										allo@stereo.ca
									</a>
									<br />
									<a class="footerlink" href="">
										jobs@stereo.ca
									</a>
									<br />
									<a class="footerlink" href="">
										819 415-2223
									</a>
									<br />
								</p>
							</div>
						</div>
					</div>
				</footer>
			</section>
		);
	}
}
export default TestFooter;
