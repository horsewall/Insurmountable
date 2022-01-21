/**
 * External Imports
 */
import React from 'react';
import { useSelector } from 'react-redux';

/**
 * Internal Imports
 */
import nFormatter from './nFormatter';

const TimeMachine = () => {
	const multiplier = useSelector((state) => state.multiplier);
	const timeMachineCount = useSelector((state) => state.timeMachineCount);
	const positionCounter = useSelector((state) => state.positionCounter);
	const moneyCounter = useSelector((state) => state.moneyCounter);
	const chairmanCounter = useSelector((state) => state.chairmanCounter);

	return (
		<div>
			{/**
			 * Time Machine Restart Button, cost, and discription
			 * Time Machine Restart is where you voluntarily restart so that the game speed is increased by 50%
			 */}
			<div id='timeMachineRestartSection'>
				<button
					className={chairmanCounter >= 100 && moneyCounter >= 1e15 && positionCounter >= 1e4 ? 'enabled' : 'disabled'}
					/* onClick={
						chairmanCounter >= 100 && moneyCounter >= 1e15 && positionCounter >= 1e4
							? TimeMachineRestart
							: undefined
					} */
				>
					Time Machine Restart
				</button>
				<p>
					Increases game <br />
					speed by 50%.
				</p>
				<p id='extraMargin'>Cost:</p>
				<p className='indent'>
					- 100 Chairmen <br />- 1P Money <br />- 10K Positions
				</p>
			</div>
			{/**
			 * Displays Games Speed and Time Machine Count
			 */}
			<p id='gameSpeedPercent'>Multiplier:ㅤx {nFormatter(multiplier)}</p>
			<p id='timeTravelCount'>Time travel count: {nFormatter(timeMachineCount)}</p>
		</div>
	);
};

export default TimeMachine;
