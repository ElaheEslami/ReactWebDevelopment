import React from 'react';
import ReactDOM from 'react-dom';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import Fullbackground from './Components/section1';
import Form from './Components/section5';
import ProjectsGraphic from './Components/GraphicSliders/projects-graphic';

import Graphicslide2 from './Components/GraphicSliders/Graphicslide2';
import Graphicslide3 from './Components/GraphicSliders/Graphicslide3';

import Cardteam from './Components/section2';

import Footer from './Components/section6';
class FullpageWrapper extends React.Component {
	onLeave(origin, destination, direction) {
		console.log('Leaving section ' + origin.index);
	}
	afterLoad(origin, destination, direction) {
		console.log('After load: ' + destination.index);
	}
	render() {
		return (
			<ReactFullpage
				offsetSections={false} //used to show non full screen section parts
				resetSliders={false}
				controlArrows={true}
				animateAnchor={true}
				keyboardScrolling={true}
				dragAndMove={true}
				fadingEffect={'slides'}
				menu={'#menu'} // menu for anchors
				loopHorizontal={true}
				licenseKey={'GPLv3'}
				activeClass={'active'} //adds an active class to the correct menu button
				anchors={['Home', 'Projects', 'ContactUs', 'OurTeam', 'Clients']}
				lockAnchors={false} //anchor feature
				navigation={true} //enables cool dots
				arrowNavigation={true} //enables arrows for slides
				slidesNavigation={true}
				slidesNavPosition={'bottom'}
				navigationTooltips={[
					'Home',
					'Projects',
					'ContactUs',
					'OurTeam',
					'Clients',
				]} //tooltips for the navdots
				parallax={true}
				scrollingSpeed={1000} /* used this for something to work... */
				sectionsColor={[]}
				scrollBar={false}
				easing={'easeInOutCubic'}
				easingcss3={'cubic-bezier(0.175,0.855,0,320,1.275)'}
				css3={false}
				autoScrolling={true}
				fitToSection={true}
				fixedElements={'#navbar'}
				loopBottom={true}
				loopTop={true}
				scrollOverflow={false}
				sectionsColor={[
					'#fff',
					'#fff',
					'#060342',
					'rgba(255, 192, 203, 0.973)',
					'#060342',
				]}
				onLeave={this.onLeave.bind(this)}
				afterLoad={this.afterLoad.bind(this)}
				render={({ state, fullpageApi }) => {
					return (
						<div id="fullpage-wrapper">
							<div className="section section1">
								<Fullbackground />
							</div>

							<div className="section" data-anchor="graphics">
								<div className="slide" active>
									<ProjectsGraphic />
								</div>
								<div className="slide">
									<Graphicslide2 />
								</div>
								<div className="slide">
									<Graphicslide3 />
								</div>
							</div>

							<div className="section" active data-anchor="contacts">
								<Form />
								{/* <button onClick={() => fullpageApi.moveTo(1, 0)}>
									Move top
								</button> */}
							</div>
							<div className="section">
								<Cardteam />
							</div>
							<div className="section">
								<Footer />
								{/* <button onClick={() => fullpageApi.moveTo(1, 0)}>
									Move top
								</button> */}
							</div>
						</div>
					);
				}}
			/>
		);
	}
}

export default FullpageWrapper;
