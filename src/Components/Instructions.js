import React from 'react';

const Instructions = () => (
	<div id='instructionPage'>
		<h2>How to Play : </h2>
		<b>Objective: </b>
		<p>The objective of the game is to obtain 1 Insurmountable money.</p>
		<b>Money: </b>
		<p>Money is used to buy pretty much everything. You receive money based on the number of interns you have.</p>

		<b>Positions: </b>
		<p>
			Positions are used to hire Staff. If you don't have a job to give your staff, it really doesn't make sense to hire
			them.
		</p>
		<p>
			At the beginning of the game, you get 1 Position each second. However, you can increase the number of positions
			per second by upgrading your positions. At the beginning of the game it costs 100 Money to upgrade, but each
			upgrade costs 50% more than the last one.
		</p>

		<b>Staff: </b>
		<p>
			The Intern is the only Staff that only costs Money and Positions. An Intern costs 10 Money and 1 Position. Each
			Intern earns you 1 Money each second.{' '}
		</p>
		<p>
			The rest of the Staff are all basically the same. An Employee costs 100 Interns, 100 Money and 1 Position; The
			Supervisor costs 100 Employees, 100 Money and 1 Position. The rest of the Staff work like-wise.
		</p>
		<p>
			In addition, every second each Employee will give you a free Intern, each Supervisor will give you a free
			Employee, etc.
		</p>

		<b>Time Machine Restart: </b>
		<p>
			Getting to 1 insurmountable money can be tough at the initial speed of the game, so it might help to use the "Time
			Machine Restart". The Time Machine will restart all your progress, but make each second shorter.
		</p>

		<b>Icons next to staff buttons: </b>
		<p>
			A "1" next to the tab that you're on means that you can buy 1 of the next-tier staff, and a "1k" means that you
			can buy 1k of the previous-tier staff.
		</p>
	</div>
);

export default Instructions;
