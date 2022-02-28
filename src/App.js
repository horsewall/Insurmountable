import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import nFormatter from './nFormatter';
import './App.css';

const App = () => {
	var speed = 1000; // Speed of the game in percents

	const [multiplier, setMultiplier] = useState(parseInt(localStorage.getItem('Multiplier')) || 1);
	const [timeMachineCount, setTimeMachineCount] = useState(parseInt(localStorage.getItem('Time Machine Count')) || 0); // How many times you've Time Machine Restarted
	const [positionCounterSpeed, setPositionCounterSpeed] = useState(
		parseInt(localStorage.getItem('Position Counter Speed')) || 1
	); // Number of positions ot add every Update Cycle
	const [upgradeCost, setUpgradeCost] = useState(parseInt(localStorage.getItem('Upgrade Cost')) || 100); // Cost of a position upgrade

	/**
	 * How many staff each button gives you, and how much it costs
	 */
	const Button1Ammount = 1;
	const Button2Ammount = 10;
	const Button3Ammount = 50;
	const Button4Ammount = 1000;
	const Button4AmmountPrefix = '1K';
	const Button5Ammount = 1e6;
	const Button5AmmountPrefix = '1M';

	/**
	 * Counter Variables: Increase every Update Cycle (initially 1000ms)
	 */
	const [moneyCounter, setMoneyCounter] = useState(parseInt(localStorage.getItem('Money')) || 10);
	const [positionCounter, setPositionCounter] = useState(parseInt(localStorage.getItem('Positions')) || 1);
	const [internCounter, setInternCounter] = useState(parseInt(localStorage.getItem('Interns')) || 0);
	const [employeeCounter, setEmployeeCounter] = useState(parseInt(localStorage.getItem('Employees')) || 0);
	const [supervisorCounter, setSupervisorCouter] = useState(parseInt(localStorage.getItem('Supervisors')) || 0);
	const [directorCounter, setDirectorCounter] = useState(parseInt(localStorage.getItem('Directors')) || 0);
	const [vicePresidentCounter, setVicePresidentCounter] = useState(
		parseInt(localStorage.getItem('Vice Presidents')) || 0
	);
	const [executiveCounter, setExecutiveCounter] = useState(parseInt(localStorage.getItem('Executives')) || 0);
	const [ceoCounter, setCeoCounter] = useState(parseInt(localStorage.getItem('CEOs')) || 0);
	const [chairmanCounter, setChairmanCounter] = useState(parseInt(localStorage.getItem('Chairmen')) || 0);

	/**
	 * ------------------------------------------------------------------------------------------------------------------
	 * Counters: Update cycles are based on the speed variable which is 1000ms initially
	 * ------------------------------------------------------------------------------------------------------------------
	 */

	/**
	 * Increments the number of open job positions by the value stored in positionCounterSpeed every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => setPositionCounter(positionCounter + positionCounterSpeed * multiplier), speed);
		return () => clearInterval(timer);
	}, [positionCounter, positionCounterSpeed, speed, multiplier]);

	/**
	 * Increment the number of interns by the value stored in moneyCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => setMoneyCounter(moneyCounter + internCounter * multiplier), speed);
		return () => clearInterval(timer);
	}, [moneyCounter, internCounter, speed, multiplier]);

	/**
	 * Increment the number of employees by the value stored in internCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => setInternCounter(internCounter + employeeCounter * multiplier), speed);
		return () => clearInterval(timer);
	}, [internCounter, employeeCounter, speed, multiplier]);

	/**
	 * Increment the number of supervisors by the value stored in employeeCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => setEmployeeCounter(employeeCounter + supervisorCounter * multiplier), speed);
		return () => clearInterval(timer);
	}, [employeeCounter, supervisorCounter, speed, multiplier]);

	/**
	 * Increment the number of directors by the value stored in superivsorCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => setSupervisorCouter(supervisorCounter + directorCounter * multiplier), speed);
		return () => clearInterval(timer);
	}, [supervisorCounter, directorCounter, speed, multiplier]);

	/**
	 * Increment the number of vice presidents by the value stored in directorCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => setDirectorCounter(directorCounter + vicePresidentCounter * multiplier), speed);
		return () => clearInterval(timer);
	}, [directorCounter, vicePresidentCounter, speed, multiplier]);

	/**
	 * Increment the number of executives by the value stored in vicePresidentCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(
			() => setVicePresidentCounter(vicePresidentCounter + executiveCounter * multiplier),
			speed
		);
		return () => clearInterval(timer);
	}, [vicePresidentCounter, executiveCounter, speed, multiplier]);

	/**
	 * Increment the number of ceo's by the value stored in executiveCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => setExecutiveCounter(executiveCounter + ceoCounter * multiplier), speed);
		return () => clearInterval(timer);
	}, [executiveCounter, ceoCounter, speed, multiplier]);

	/**
	 * Increment the number of chairmen by the value stored in ceoCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => setCeoCounter(ceoCounter + chairmanCounter * multiplier), speed);
		return () => clearInterval(timer);
	}, [ceoCounter, chairmanCounter, speed, multiplier]);

	function pushToLocalStorage() {
		localStorage.setItem('Multiplier', multiplier);
		localStorage.setItem('Time Machine Count', timeMachineCount);
		localStorage.setItem('Position Counter Speed', positionCounterSpeed);
		localStorage.setItem('Upgrade Cost', upgradeCost);
		localStorage.setItem('Money', moneyCounter);
		localStorage.setItem('Positions', positionCounter);
		localStorage.setItem('Interns', internCounter);
		localStorage.setItem('Employees', employeeCounter);
		localStorage.setItem('Supervisors', supervisorCounter);
		localStorage.setItem('Directors', directorCounter);
		localStorage.setItem('Vice Presidents', vicePresidentCounter);
		localStorage.setItem('Executives', executiveCounter);
		localStorage.setItem('CEOs', ceoCounter);
		localStorage.setItem('Chairmen', chairmanCounter);
	}

	pushToLocalStorage();

	/**
	 * There is no need for a chairmanCounter because there is no staff higher than the Chairman.
	 * All the chairman increments will be done with buttons.
	 */

	/**
	 * ------------------------------------------------------------------------------------------------------------------
	 * Functions so that multiple outputs can be passed into inline if staments inside the "hire" buttons.
	 * ------------------------------------------------------------------------------------------------------------------
	 */

	/**
	 * Adds interns and gets rid of positions and money based on the value of "number"
	 */
	function addInterns(number) {
		setInternCounter(internCounter + number);
		setPositionCounter(positionCounter - number);
		setMoneyCounter(moneyCounter - number * 10);
	}

	/**
	 * Increases how many positions you get per update cycle, subtracts money, and increases the upgrade cost
	 */
	function upgradePosition() {
		setPositionCounterSpeed(positionCounterSpeed + 1);
		setMoneyCounter(moneyCounter - upgradeCost);
		setUpgradeCost(upgradeCost * 1.5);
	}

	/**
	 * Adds employees and gets rid of positions, interns, and money based on the value of "number"
	 */
	function addEmployees(number) {
		setEmployeeCounter(employeeCounter + number);
		setPositionCounter(positionCounter - number);
		setInternCounter(internCounter - number * 100);
		setMoneyCounter(moneyCounter - number * 100);
	}

	/**
	 * Adds supervisors and gets rid of positions, employees, and money based on the value of "number"
	 */
	function addSupervisors(number) {
		setSupervisorCouter(supervisorCounter + number);
		setPositionCounter(positionCounter - number);
		setEmployeeCounter(employeeCounter - number * 100);
		setMoneyCounter(moneyCounter - number * 1e3);
	}

	/**
	 * Adds directors and gets rid of positions, supervisors, and money based on the value of "number"
	 */
	function addDirectors(number) {
		setDirectorCounter(directorCounter + number);
		setPositionCounter(positionCounter - number);
		setSupervisorCouter(supervisorCounter - number * 100);
		setMoneyCounter(moneyCounter - number * 1e4);
	}

	/**
	 * Adds vice presidents and gets rid of positions, directors, and money based on the value of "number"
	 */
	function addVicePresidents(number) {
		setVicePresidentCounter(vicePresidentCounter + number);
		setPositionCounter(positionCounter - number);
		setDirectorCounter(directorCounter - number * 100);
		setMoneyCounter(moneyCounter - number * 1e5);
	}

	/**
	 * Adds executives and gets rid of positions, vice presidents, and money based on the value of "number"
	 */
	function addExecutives(number) {
		setExecutiveCounter(executiveCounter + number);
		setPositionCounter(positionCounter - number);
		setVicePresidentCounter(vicePresidentCounter - number * 100);
		setMoneyCounter(moneyCounter - number * 1e6);
	}

	/**
	 * Adds ceo's and gets rid of positions, executives, and money based on the value of "number"
	 */
	function addCeos(number) {
		setCeoCounter(ceoCounter + number);
		setPositionCounter(positionCounter - number);
		setExecutiveCounter(executiveCounter - number * 100);
		setMoneyCounter(moneyCounter - number * 1e7);
	}

	/**
	 * Adds chairmen and gets rid of positions, ceo's, and money based on the value of "number"
	 */
	function addChairmen(number) {
		setChairmanCounter(chairmanCounter + number);
		setPositionCounter(positionCounter - number);
		setCeoCounter(ceoCounter - number * 100);
		setMoneyCounter(moneyCounter - number * 1e8);
	}

	/**
	 * Sets all the useStates to their initial values
	 */
	function restart() {
		setMultiplier(1);
		setTimeMachineCount(0);
		setPositionCounter(1);
		setPositionCounterSpeed(1);
		setMoneyCounter(10);
		setUpgradeCost(100);

		setInternCounter(0);
		setEmployeeCounter(0);
		setSupervisorCouter(0);
		setDirectorCounter(0);
		setVicePresidentCounter(0);
		setExecutiveCounter(0);
		setCeoCounter(0);
		setChairmanCounter(0);
	}

	/**
	 * Sets all the useStates to their initial values, increases the speed of the game, and increases the
	 * timeMachineCount. The timeMachineCount is to let the player know how many times he has timeMachineRestarted.
	 */
	function timeMachineRestart() {
		restart();
		setPositionCounter(multiplier);
		setMultiplier(multiplier * 1.5);
		setTimeMachineCount(timeMachineCount + 1);
	}

	/**
	 * ------------------------------------------------------------------------------------------------------------------
	 * Pages
	 * ------------------------------------------------------------------------------------------------------------------
	 */

	/**
	 * Button layout for the "Pages" section:
	 *
	 * <button
	 * 	className={
	 * 		can buy x number of staff
	 * 			? white button
	 *: grey button
	 * 	}
	 * 	onClick={
	 * 		can buy x number of staff
	 * 			? addStaff("number on button")
	 * 			: button doesn't work
	 * 	}
	 * >
	 * 	Hire "number on button"
	 * </button>
	 */

	const PageTemplate = ({
		staffNamePlural,
		staffCounter,
		staffName,
		costText,
		moneyPerStaff,
		previousStaffCounter,
		addStaff,
		previouStaffCost,
	}) => {
		return (
			<div className='Page'>
				<div>
					{/**
					 * Displays number of interns with a metric prefix if needed, and cost of an intern
					 */}
					<h1 className='PageHeader'>
						{staffNamePlural}: {nFormatter(staffCounter)}
					</h1>
					<p className='PageCostTitle'>1 {staffName} costs:</p>
					{costText}
					{/**
					 * "Hire" buttons
					 */}
					<div className='PageButtons'>
						<button
							className={
								moneyCounter >= moneyPerStaff * Button1Ammount &&
								previousStaffCounter >= previouStaffCost * Button1Ammount &&
								positionCounter >= Button1Ammount
									? 'enabled'
									: 'disabled'
							}
							onClick={
								moneyCounter >= moneyPerStaff * Button1Ammount &&
								previousStaffCounter >= previouStaffCost * Button1Ammount &&
								positionCounter >= Button1Ammount
									? () => addStaff(Button1Ammount)
									: undefined
							}
						>
							Hire {Button1Ammount}
						</button>
						<button
							className={
								moneyCounter >= moneyPerStaff * Button2Ammount &&
								previousStaffCounter >= previouStaffCost * Button2Ammount &&
								positionCounter >= Button2Ammount
									? 'enabled'
									: 'disabled'
							}
							onClick={
								moneyCounter >= moneyPerStaff * Button2Ammount &&
								previousStaffCounter >= previouStaffCost * Button2Ammount &&
								positionCounter >= Button2Ammount
									? () => addStaff(Button2Ammount)
									: undefined
							}
						>
							Hire {Button2Ammount}
						</button>
						<button
							className={
								moneyCounter >= moneyPerStaff * Button3Ammount &&
								previousStaffCounter >= previouStaffCost * Button3Ammount &&
								positionCounter >= Button3Ammount
									? 'enabled'
									: 'disabled'
							}
							onClick={
								moneyCounter >= moneyPerStaff * Button3Ammount &&
								previousStaffCounter >= previouStaffCost * Button3Ammount &&
								positionCounter >= Button3Ammount
									? () => addStaff(Button3Ammount)
									: undefined
							}
						>
							Hire {Button3Ammount}
						</button>
						<button
							className={
								moneyCounter >= moneyPerStaff * Button4Ammount &&
								previousStaffCounter >= previouStaffCost * Button4Ammount &&
								positionCounter >= Button4Ammount
									? 'enabled'
									: 'disabled'
							}
							onClick={
								moneyCounter >= moneyPerStaff * Button4Ammount &&
								previousStaffCounter >= previouStaffCost * Button4Ammount &&
								positionCounter >= Button4Ammount
									? () => addStaff(Button4Ammount)
									: undefined
							}
						>
							Hire {Button4AmmountPrefix}
						</button>
						<button
							className={
								moneyCounter >= moneyPerStaff * Button5Ammount &&
								previousStaffCounter >= previouStaffCost * Button5Ammount &&
								positionCounter >= Button5Ammount
									? 'enabled'
									: 'disabled'
							}
							onClick={
								moneyCounter >= moneyPerStaff * Button5Ammount &&
								previousStaffCounter >= previouStaffCost * Button5Ammount &&
								positionCounter >= Button4Ammount
									? () => addStaff(Button5Ammount)
									: undefined
							}
						>
							Hire {Button5AmmountPrefix}
						</button>
					</div>
				</div>
			</div>
		);
	};

	/**
	 * Displays when on the "/intern" or "/" page route
	 */
	const Intern = () => {
		return (
			<PageTemplate
				staffName={'Intern'}
				staffNamePlural={'Interns'}
				staffCounter={internCounter}
				moneyPerStaff={10}
				previousStaffCounter={null}
				previouStaffCost={null}
				addStaff={addInterns}
				costText={
					<p className='indent PageCosts'>
						- 10 money
						<br />- 1 position
					</p>
				}
			/>
		);
	};

	/**
	 * Displays when on the "/employee" page route
	 */
	const Employee = () => {
		return (
			<PageTemplate
				staffName={'Employee'}
				staffNamePlural={'Employees'}
				staffCounter={employeeCounter}
				addStaff={addEmployees}
				moneyPerStaff={100}
				previousStaffCounter={internCounter}
				previouStaffCost={100}
				costText={
					<p className='indent PageCosts'>
						- 100 money
						<br />
						- 100 interns
						<br />- 1 position
					</p>
				}
			/>
		);
	};

	/**
	 * Displays when on the "/supervisor" page route
	 */
	const Supervisor = () => {
		return (
			<PageTemplate
				staffName={'Supervisor'}
				staffNamePlural={'Supervisors'}
				staffCounter={supervisorCounter}
				addStaff={addSupervisors}
				moneyPerStaff={1e3}
				previousStaffCounter={employeeCounter}
				previouStaffCost={100}
				costText={
					<p className='indent PageCosts'>
						- 1K money
						<br />
						- 100 Employees
						<br />- 1 position
					</p>
				}
			/>
		);
	};

	/**
	 * Displays when on the "/director" page route
	 */
	const Director = () => {
		return (
			<PageTemplate
				staffName={'Director'}
				staffNamePlural={'Directors'}
				staffCounter={directorCounter}
				addStaff={addDirectors}
				moneyPerStaff={1e4}
				previousStaffCounter={supervisorCounter}
				previouStaffCost={100}
				costText={
					<p className='indent PageCosts'>
						- 10K money
						<br />
						- 100 Supervisors
						<br />- 1 position
					</p>
				}
			/>
		);
	};

	/**
	 * Displays when on the "/vice-president" page route
	 */
	const VicePresident = () => {
		return (
			<PageTemplate
				staffName={'Vice President'}
				staffNamePlural={'Vice Presidents'}
				staffCounter={vicePresidentCounter}
				addStaff={addVicePresidents}
				moneyPerStaff={1e5}
				previousStaffCounter={directorCounter}
				previouStaffCost={100}
				costText={
					<p className='indent PageCosts'>
						- 100K money
						<br />
						- 100 Directors
						<br />- 1 position
					</p>
				}
			/>
		);
	};

	/**
	 * Displays when on the "/executive" page route
	 */
	const Executive = () => {
		return (
			<PageTemplate
				staffName={'Executive'}
				staffNamePlural={'Executives'}
				staffCounter={executiveCounter}
				addStaff={addExecutives}
				moneyPerStaff={1e6}
				previousStaffCounter={vicePresidentCounter}
				previouStaffCost={100}
				costText={
					<p className='indent PageCosts'>
						- 1M money
						<br />
						- 100 Vice Presidents
						<br />- 1 position
					</p>
				}
			/>
		);
	};

	/**
	 * Displays when on the "/ceo" page route
	 */
	const CEO = () => {
		return (
			<PageTemplate
				staffName={'CEO'}
				staffNamePlural={"CEO's"}
				staffCounter={ceoCounter}
				addStaff={addCeos}
				moneyPerStaff={1e7}
				previousStaffCounter={executiveCounter}
				previouStaffCost={100}
				costText={
					<p className='indent PageCosts'>
						- 10M money
						<br />
						- 100 Executives
						<br />- 1 position
					</p>
				}
			/>
		);
	};

	/**
	 * Displays when on the "/chairman" page route
	 */
	const Chairman = () => {
		return (
			<PageTemplate
				staffName={'Chairman'}
				staffNamePlural={'Chairmen'}
				staffCounter={chairmanCounter}
				addStaff={addChairmen}
				moneyPerStaff={1e8}
				previousStaffCounter={ceoCounter}
				previouStaffCost={100}
				costText={
					<p className='indent PageCosts'>
						- 100M money
						<br />
						- 100 CEO's
						<br />- 1 position
					</p>
				}
			/>
		);
	};

	/**
	 * ------------------------------------------------------------------------------------------------------------------
	 * NavBar
	 * ------------------------------------------------------------------------------------------------------------------
	 */

	/**
	 * Each NavLink:
	 *  - Creates buttons to be displayed in NavBar
	 *  - Displays number of staff if there are any
	 */
	const NavBarTemplate = ({ buttonStyles, pageRoute, staffNamePlural, staffCounter }) => {
		return (
			<NavLink
				style={{
					position: 'absolute',
					top: buttonStyles,
				}}
				className={({ isActive }) => 'list-group-item' + (isActive ? 'onPage' : '')}
				to={pageRoute}
				exact='true'
			>
				{staffNamePlural}
				{staffCounter !== 0 && ': ' + nFormatter(staffCounter)}
			</NavLink>
		);
	};

	const NavBar = React.useCallback(
		() => (
			<div id='linkContainer'>
				<nav>
					<ul>
						<li>
							<NavBarTemplate
								buttonStyles={'2%'}
								pageRoute={'/intern'}
								staffNamePlural={'Interns'}
								staffCounter={internCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'14%'}
								pageRoute={'/employee'}
								staffNamePlural={'Employees'}
								staffCounter={employeeCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'26%'}
								pageRoute={'/supervisor'}
								staffNamePlural={'Supervisors'}
								staffCounter={supervisorCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'38%'}
								pageRoute={'/director'}
								staffNamePlural={'Directors'}
								staffCounter={directorCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'50%'}
								pageRoute={'/vice-president'}
								staffNamePlural={'Vice Presidents'}
								staffCounter={vicePresidentCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'62%'}
								pageRoute={'/executive'}
								staffNamePlural={'Executives'}
								staffCounter={executiveCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'74%'}
								pageRoute={'/ceo'}
								staffNamePlural={"CEO's"}
								staffCounter={ceoCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'86%'}
								pageRoute={'/chairman'}
								staffNamePlural={'Chairmen'}
								staffCounter={chairmanCounter}
							/>
						</li>
					</ul>
				</nav>
			</div>
		),
		[
			internCounter,
			employeeCounter,
			supervisorCounter,
			directorCounter,
			vicePresidentCounter,
			executiveCounter,
			ceoCounter,
			chairmanCounter,
		]
	);

	/**
	 * ------------------------------------------------------------------------------------------------------------------
	 * Displays large numbers with SI Prefixes
	 * ------------------------------------------------------------------------------------------------------------------
	 */

	<nFormatter />

	/**
	 * ------------------------------------------------------------------------------------------------------------------
	 * Displays
	 * ------------------------------------------------------------------------------------------------------------------
	 */

	return (
		<>
			{/**
			 * Displaying NavBar and creating links for pages
			 */}
			<Router>
				<div>
					<NavBar />
					<Routes>
						<Route path='/' element={<Intern />} exact />
						<Route path='/intern' element={<Intern />} />
						<Route path='/employee' element={<Employee />} />
						<Route path='/supervisor' element={<Supervisor />} />
						<Route path='/director' element={<Director />} />
						<Route path='/vice-president' element={<VicePresident />} />
						<Route path='/executive' element={<Executive />} />
						<Route path='/ceo' element={<CEO />} />
						<Route path='/chairman' element={<Chairman />} />
					</Routes>
				</div>
			</Router>
			{/**
			 * Displaying moneyCounter and money/second
			 */}
			<div id='moneyDisplay'>
				<h2>Money: {nFormatter(moneyCounter)}</h2>
				<p>{nFormatter(internCounter)} money/second</p>
			</div>
			;
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
					onClick={moneyCounter >= upgradeCost ? upgradePosition : undefined}
				>
					Upgrade Positions
				</button>
			</div>
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
								restart();
								close();
							}}
						>
							Yes
						</button>
					</div>
				)}
			</Popup>
			{/**
			 * Time Machine Restart Button, cost, and discription
			 * Time Machine Restart is where you voluntarily restart so that the game speed is increased by 50%
			 */}
			<div id='timeMachineRestartSection'>
				<button
					className={chairmanCounter >= 100 && moneyCounter >= 1e15 && positionCounter >= 1e4 ? 'enabled' : 'disabled'}
					onClick={
						chairmanCounter >= 100 && moneyCounter >= 1e15 && positionCounter >= 1e4 ? timeMachineRestart : undefined
					}
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
			{/**
			 * Winning display
			 * */}
			<div id={moneyCounter >= 1e31 ? 'youWon' : 'hidden'}>
				<h2>You won!</h2>
				<p>
					Congratulations!
					<br />
					You have reached 1 Insurmountable money!
				</p>
			</div>
			{/**
			 * Instructions Page
			 */}
			<div id='instructionPage'>
				<h2>How to Play : </h2>
				<b>Objective: </b>
				<p>The objective of the game is to obtain 1 Insurmountable money.</p>
				<b>Money: </b>
				<p>Money is used to buy pretty much everything. You receive money based on the number of interns you have.</p>

				<b>Positions: </b>
				<p>
					Positions are used to hire Staff. If you don't have a job to give your staff, it really doesn't make sense to
					hire them.
				</p>
				<p>
					At the beginning of the game, you get 1 Position each second. However, you can increase the number of
					positions per second by upgrading your positions. At the beginning of the game it costs 100 Money to upgrade,
					but each upgrade costs 50% more than the last one.
				</p>

				<b>Staff: </b>
				<p>
					The Intern is the only Staff that only costs Money and Positions. An Intern costs 10 Money and 1 Position.
					Each Intern earns you 1 Money each second.{' '}
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
					Getting to 1 insurmountable money can be tough at the initial speed of the game, so it might help to use the
					"Time Machine Restart". The Time Machine will restart all your progress, but make each second shorter.
				</p>

				<b>Icons next to staff buttons: </b>
				<p>
					A "1" next to the tab that you're on means that you can buy 1 of the next-tier staff, and a "1k" means that
					you can buy 1k of the previous-tier staff.
				</p>
			</div>
		</>
	);
};

export default App;
