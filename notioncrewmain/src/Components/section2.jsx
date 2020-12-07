import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../cssfiles/section2.css';
import Slide from 'react-reveal/Slide';
class Cardteam extends Component {
	render() {
		return (
			<>
				<section className="cardTeam">
					<div className="header-team">
						<h2>Meet Team</h2>
					</div>

					<div className="card-team-container">
						<Slide left>
							<div className="card-team">
								<div className="img-card-team">
									<img
										src="/images/Othila-Yuya-Portada-marketingdigital-influencer.jpg"
										alt=""
									/>
								</div>
								<div className="content-card-team">
									<h2>
										SEPAND REZAZADEH
										<br />
										<span>CEO</span>
									</h2>
									<p>
										Who We Are Notioncrew Creative Agency was founded in 2018 by
										an experienced and professional team
									</p>

									<ul className="social-card-team">
										<li>
											<a href="#">
												<img src="/images/facebook.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="/images/instagram.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="/images/play-button.png" alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</Slide>
						<Slide top>
							<div className="card-team">
								<div className="img-card-team">
									<img
										src="/images/Othila-Arawanei-Portada-branding-fashion.png"
										alt=""
									/>
								</div>
								<div className="content-card-team">
									<h2>
										ARIAN BARGHI <br />
										<span>Chief Designer</span>
									</h2>
									<p>
										Who We Are Notioncrew Creative Agency was founded in 2018 by
										an experienced and professional team
									</p>

									<ul className="social-card-team">
										<li>
											<a href="#">
												<img src="/images/facebook.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="/images/instagram.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="/images/play-button.png" alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</Slide>
						<Slide right>
							<div className="card-team">
								<div className="img-card-team">
									<img
										src="/images/Othila-Actitud-Portada-marketingdigital.jpg"
										alt=""
									/>
								</div>
								<div className="content-card-team">
									<h2>
										MEYSAM NEMATI
										<br />
										<span>Director of Photography</span>
									</h2>
									<p>
										Who We Are Notioncrew Creative Agency was founded in 2018 by
										an experienced and professional team
									</p>

									<ul className="social-card-team">
										<li>
											<a href="#">
												<img src="/images/facebook.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="/images/instagram.png" alt="" />
											</a>
										</li>
										<li>
											<a href="#">
												<img src="/images/play-button.png" alt="" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</Slide>
					</div>
				</section>
			</>
		);
	}
}

export default Cardteam;
