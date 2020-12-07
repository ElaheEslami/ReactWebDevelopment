import React from 'react';
import '../cssfiles/section6.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from 'react-reveal/Slide';

class Footer extends React.Component {
	constructor() {
		super();
	}

	render() {
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
				<Slide up>
					<div className="header-scroll">
						<h2>Our Clients</h2>
					</div>
				</Slide>
				<div class="container-scroll">
					<Slider {...settings}>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://othilacreativa.com/wp-content/themes/othilacreativa/images/about/enterprises/sheryl-rubio.svg"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://othilacreativa.com/wp-content/themes/othilacreativa/images/about/enterprises/teresuch.svg"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://othilacreativa.com/wp-content/themes/othilacreativa/images/about/enterprises/sheryl-rubio.svg"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://othilacreativa.com/wp-content/themes/othilacreativa/images/about/enterprises/teresuch.svg"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://othilacreativa.com/wp-content/themes/othilacreativa/images/about/enterprises/sheryl-rubio.svg"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://othilacreativa.com/wp-content/themes/othilacreativa/images/about/enterprises/teresuch.svg"
								></img>
							</div>
						</div>
						<div>
							<div class="item">
								<img
									id="my_image"
									src="https://othilacreativa.com/wp-content/themes/othilacreativa/images/about/enterprises/sheryl-rubio.svg"
								></img>
							</div>
						</div>
					</Slider>
				</div>
				<footer>
					<div className="footer">
						<div className="footercontent">
							<div className="footerpart ">
								<p>
									<font class="footerlink" href="">
										240, rue des Forges,
										<br />
										suite 301 Trois-Rivieres,
										<br />
										QC G9A 2G8 <br />
									</font>
								</p>
							</div>
							<Slide up>
								<div className="notion">
									<p>
										<font>Contact us</font>
										<br />
										for your
										<a href="">project</a>
									</p>
								</div>
							</Slide>

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
									<a class="footerlink" href="tel:8194152223">
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
export default Footer;
