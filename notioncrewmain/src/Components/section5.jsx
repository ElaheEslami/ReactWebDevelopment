import React, { useState } from 'react';
import { render } from 'react-dom';
import { useSpring, animated } from 'react-spring';
import '../cssfiles/section5.css';
import Slide from 'react-reveal/Slide';

import { motion, useViewportScroll } from 'framer-motion';
const Form = () => {
	const { scrollYProgress } = useViewportScroll();

	return (
		<>
			<section className="section5">
				<div className="container5">
					{/* <motion.path style={{ pathLength: scrollYProgress }}> */}
					<Slide up>
						<h2>Contact us</h2>
					</Slide>
					<div className="row100">
						<div className="col">
							<div className="inputbox">
								<input type="text" name="" required="required" />
								<span className="text">FirstName</span>
								<span className="line"></span>
							</div>
						</div>
						<div className="col">
							<div className="inputbox">
								<input type="text" name="" required="required" />
								<span className="text">LastName</span>
								<span className="line"></span>
							</div>
						</div>
					</div>
					<div className="row100">
						<div className="col">
							<div className="inputbox">
								<input type="text" name="" required="required" />
								<span className="text">Email</span>
								<span className="line"></span>
							</div>
						</div>
						<div className="col">
							<div className="inputbox">
								<input type="text" name="" required="required" />
								<span className="text">PhoneNumber</span>
								<span className="line"></span>
							</div>
						</div>
					</div>
					<div className="row100">
						<div className="col">
							<div className="inputbox textarea">
								<textarea required="required"></textarea>
								<span className="text">Type Your Massage Here...</span>
								<span className="line"></span>
							</div>
						</div>
					</div>
					<div className="row100">
						<div className="col">
							{/* <div className="inputbox">
								<input type="submit" value="Send" />
							</div> */}

							<button className="submit">Send</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Form;
