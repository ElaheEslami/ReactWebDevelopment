import React, { useRef, Component } from 'react';
import { motion } from 'framer-motion';
import MyHeader from './stickyheader';
import Slide from 'react-reveal/Slide';
import '../cssfiles/section1new.css';
import Menu2 from './menu';
class Fullbackground extends Component {
	constructor(props) {
		super(props);
		this.cursor = React.createRef();
	}
	render() {
		return (
			<>
				<section>
					<header class="l-header">
						<Menu2 />
						{/* <nav class="nav bd-grid"> */}

						{/* <div></div>

							<div class="nav__toggle" id="nav-toggle">
								<i class="bx bx-menu"></i>
							</div>
							<div class="nav__menu" id="nav-menu">
                <div class="nav__close" id="nav-close">
                    <i class='bx bx-x'></i>
                </div>

                <ul class="nav__list">
                    <li class="nav__item"><a href="index.html" class="nav__link active">Home</a></li>
                    <li class="nav__item"><a href="page2.html" class="nav__link">About</a></li>
                    <li class="nav__item"><a href="page2.html" class="nav__link">Blog</a></li>
                    <li class="nav__item"><a href="page2.html" class="nav__link">Contact</a></li>
                </ul>
            </div> */}
						{/* </nav> */}
					</header>

					<section className="home" id="home">
						<div className=" home__container bd-grid slider__slide slider__slide--1">
							<div className="home__img">
								<img src="agency.svg" alt="" data-speed="-2" class="move" />
							</div>
							<div className="home__data">
								<h1 className="home__title">
									we canned
									<br />a feeling
								</h1>
								<p className="home__description">
									we're just here to help people <br /> feel calm, focused,{' '}
									<br />
									and creative despite the world around them <br />
								</p>
								<a
									href="../notioncrewmain/public/index.html"
									className="home__button"
								>
									Get Started
								</a>
							</div>
						</div>
					</section>
				</section>
			</>
		);
	}
}
export default Fullbackground;
