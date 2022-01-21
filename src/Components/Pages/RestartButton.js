import React from 'react';
import Popup from 'reactjs-popup';

const RestartButton = () => {
	return (
		<>
			{/**
			 * Restart button with a popup for confirming restart
			 */}
			<Popup
				modal
				trigger={
					<button className='enabled' id='restartButton'>
						Restart
					</button>
				}
			>
				{(close) => (
					<div id='restartPopup'>
						<p>
							Are you Sure you want to restart? <br />
							This action cannot be undone.
						</p>
						<button
							className='enabled'
							id='restartConfirmation'
							onClick={() => {
								// Restart();
								close();
							}}
						>
							Yes
						</button>
					</div>
				)}
			</Popup>
		</>
	);
};

export default RestartButton;
