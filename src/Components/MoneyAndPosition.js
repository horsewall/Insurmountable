/**
 * External Imports
 */
import React from 'react';
import { useSelector } from 'react-redux';

/**
 * Internal Imports
 */
import nFormatter from './nFormatter';

const MoneyAndPosition = () => {
	const upgradeCost = useSelector((state) => state.upgradeCost);
	const positionCounterSpeed = useSelector((state) => state.positionCounterSpeed);
	const positionCounter = useSelector((state) => state.positionCounter);
	const moneyCounter = useSelector((state) => state.moneyCounter);
	const internCounter = useSelector((state) => state.internCounter);

	return (
		<div>
			{/**
			 * Displaying moneyCounter and money/second
			 */}
			<div id='moneyDisplay'>
				<h2>Money: {nFormatter(moneyCounter)}</h2>
				<p>{nFormatter(internCounter)} money/second</p>
			</div>
			{/**
			 * Displaying positionCounter and positions/second
			 * Only displays an "s" if gramatically needed
			 */}
			<div id='positionDisplay'>
				<h2>
					Position
					{positionCounter !== 1 && 's'}: {nFormatter(positionCounter)}
				</h2>
				<br />
				<p>
					{nFormatter(positionCounterSpeed)} position
					{positionCounterSpeed !== 1 && 's'}
					/second
				</p>
				<br />

				{/**
				 * Displaying next upgrade cost and upgrade button
				 */}
				<p>
					Next upgrade: <br />
					{nFormatter(upgradeCost)} money
				</p>
				<br />
				<button
					className={moneyCounter >= upgradeCost ? 'enabled' : 'disabled'}
					id='upgradeButton'
					// onClick={moneyCounter >= upgradeCost ? ButtonFunctions.upgradePosition : undefined}
				>
					Upgrade Positions
				</button>
			</div>
		</div>
	);
};

export default MoneyAndPosition;
