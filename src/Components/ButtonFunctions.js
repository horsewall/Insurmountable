/**
 * External Imports
 */
import { useSelector, useDispatch } from 'react-redux';

/**
 * Internal Imports
 */
import {
	setMultiplier,
	setUpgradeCost,
	setTimeMachineCount,
	setPositionCounterSpeed,
	setPosition,
	setMoney,
	setIntern,
	setEmployee,
	setSupervisor,
	setDirector,
	setVicePresident,
	setExecutive,
	setCeo,
	setChairman,
} from '../actions';
/**
 * ------------------------------------------------------------------------------------------------------------------
 * Functions so that multiple outputs can be passed into inline if staments inside the "hire" buttons.
 * ------------------------------------------------------------------------------------------------------------------
 */

const ButtonFunctions = () => {
	/**
	 * Counter Variables pulled from redux files: Increase every Update Cycle (initially 1000ms)
	 */
	const multiplier = useSelector((state) => state.multiplier);
	const upgradeCost = useSelector((state) => state.upgradeCost);
	const timeMachineCount = useSelector((state) => state.timeMachineCount);
	const positionCounterSpeed = useSelector((state) => state.positionCounterSpeed);
	const positionCounter = useSelector((state) => state.positionCounter);
	const moneyCounter = useSelector((state) => state.moneyCounter);
	const internCounter = useSelector((state) => state.internCounter);
	const employeeCounter = useSelector((state) => state.employeeCounter);
	const supervisorCounter = useSelector((state) => state.supervisorCounter);
	const directorCounter = useSelector((state) => state.directorCounter);
	const vicePresidentCounter = useSelector((state) => state.vicePresidentCounter);
	const executiveCounter = useSelector((state) => state.executiveCounter);
	const ceoCounter = useSelector((state) => state.ceoCounter);
	const chairmanCounter = useSelector((state) => state.chairmanCounter);
	const dispatch = useDispatch();

	/**
	 * Increases how many positions you get per update cycle, subtracts money, and increases the upgrade cost
	 */
	//eslint-disable-next-line
	function upgradePosition() {
		dispatch(setPositionCounterSpeed(positionCounterSpeed + 1));
		dispatch(setMoney(moneyCounter - upgradeCost));
		dispatch(setUpgradeCost(upgradeCost * 1.5));
	}

	/**
	 * Adds interns and gets rid of positions and money based on the value of "number"
	 */
	//eslint-disable-next-line
	const addInterns = (number) => {
		console.log("It Worked!!!");
		dispatch(setIntern(internCounter + number));
		dispatch(setPosition(positionCounter - number));
		dispatch(setMoney(moneyCounter - number * 10));
	};

	/**
	 * Adds employees and gets rid of positions, interns, and money based on the value of "number"
	 */
	//eslint-disable-next-line
	function addEmployees(number) {
		dispatch(setEmployee(employeeCounter + number));
		dispatch(setPosition(positionCounter - number));
		dispatch(setIntern(internCounter - number * 100));
		dispatch(setMoney(moneyCounter - number * 100));
	}

	/**
	 * Adds supervisors and gets rid of positions, employees, and money based on the value of "number"
	 */
	//eslint-disable-next-line
	function addSupervisors(number) {
		dispatch(setSupervisor(supervisorCounter + number));
		dispatch(setPosition(positionCounter - number));
		dispatch(setEmployee(employeeCounter - number * 100));
		dispatch(setMoney(moneyCounter - number * 1e3));
	}

	/**
	 * Adds directors and gets rid of positions, supervisors, and money based on the value of "number"
	 */
	//eslint-disable-next-line
	function addDirectors(number) {
		dispatch(setDirector(directorCounter + number));
		dispatch(setPosition(positionCounter - number));
		dispatch(setSupervisor(supervisorCounter - number * 100));
		dispatch(setMoney(moneyCounter - number * 1e4));
	}

	/**
	 * Adds vice presidents and gets rid of positions, directors, and money based on the value of "number"
	 */
	//eslint-disable-next-line
	function addVicePresidents(number) {
		dispatch(setVicePresident(vicePresidentCounter + number));
		dispatch(setPosition(positionCounter - number));
		dispatch(setDirector(directorCounter - number * 100));
		dispatch(setMoney(moneyCounter - number * 1e5));
	}

	/**
	 * Adds executives and gets rid of positions, vice presidents, and money based on the value of "number"
	 */
	//eslint-disable-next-line
	function addExecutives(number) {
		dispatch(setExecutive(executiveCounter + number));
		dispatch(setPosition(positionCounter - number));
		dispatch(setVicePresident(vicePresidentCounter - number * 100));
		dispatch(setMoney(moneyCounter - number * 1e6));
	}

	/**
	 * Adds ceo's and gets rid of positions, executives, and money based on the value of "number"
	 */
	//eslint-disable-next-line
	function addCeos(number) {
		dispatch(setCeo(ceoCounter + number));
		dispatch(setPosition(positionCounter - number));
		dispatch(setExecutive(executiveCounter - number * 100));
		dispatch(setMoney(moneyCounter - number * 1e7));
	}

	/**
	 * Adds chairmen and gets rid of positions, ceo's, and money based on the value of "number"
	 */
	//eslint-disable-next-line
	function addChairmen(number) {
		dispatch(setChairman(chairmanCounter + number));
		dispatch(setPosition(positionCounter - number));
		dispatch(setCeo(ceoCounter - number * 100));
		dispatch(setMoney(moneyCounter - number * 1e8));
	}

	/**
	 * Sets all the useStates to their initial values
	 */
	function restart() {
		setMultiplier(1);
		dispatch(setTimeMachineCount(0));
		dispatch(setPosition(1));
		dispatch(setPositionCounterSpeed(1));
		dispatch(setMoney(10));
		dispatch(setUpgradeCost(100));

		dispatch(setIntern(0));
		dispatch(setEmployee(0));
		dispatch(setSupervisor(0));
		dispatch(setDirector(0));
		dispatch(setVicePresident(0));
		dispatch(setExecutive(0));
		dispatch(setCeo(0));
		dispatch(setChairman(0));
	}

	/**
	 * Sets all the useStates to their initial values, increases the speed of the game, and increases the
	 * timeMachineCount. The timeMachineCount is to let the player know how many times he has timeMachineRestarted.
	 */
	//eslint-disable-next-line
	function timeMachineRestart() {
		dispatch(restart());
		dispatch(setPosition(multiplier));
		dispatch(setMultiplier(multiplier * 1.5));
		dispatch(setTimeMachineCount(timeMachineCount + 1));
	}
};

export default ButtonFunctions;
