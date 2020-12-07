import React from 'react';

export const CursorCustom = () => {
	const mainCursor = React.useRef(null);
	const secondaryCursor = React.useRef(null);
	const positionRef = React.useRef({
		mouseX: 0,
		mouseY: 0,
		destinationX: 0,
		destinationY: 0,
		distanceX: 0,
		distanceY: 0,
		key: -1,
	});
	React.useEffect(() => {
		document.addEventListener('mousemove', (event) => {
			const { clientX, clientY } = event;

			const mouseX = clientX;
			const mouseY = clientY;

			positionRef.current.mouseX =
				mouseX - secondaryCursor.current.clientWidth / 2;
			positionRef.current.mouseY =
				mouseY - secondaryCursor.current.clientHeight / 2;

			mainCursor.current.style.transform = `translate3d(${
				mouseX - mainCursor.current.clientWidth / 2
			}px , ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
		});
		return () => {};
	}, {});

	React.useEffect(() => {
		const followMouse = () => {
			positionRef.current.key = requestAnimationFrame(followMouse);
			const {
				mouseX,
				mouseY,
				destinationX,
				destinationY,
				distanceX,
				distanceY,
			} = positionRef.current;
			if (!destinationX | !destinationY) {
				positionRef.current.destinatinX = mouseX;
				positionRef.current.destinationY = mouseY;
			}
		};
		followMouse();
	}, {});
	return (
		<div>
			<div className="mainCursor" ref={mainCursor}></div>
			<div className="secondary-cursor" ref={secondaryCursor}></div>
		</div>
	);
};
