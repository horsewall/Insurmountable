/**
 * External Imports
 */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * Internal Imports
 */
import {
	setPosition,
	setMoney,
	setIntern,
	setEmployee,
	setSupervisor,
	setDirector,
	setVicePresident,
	setExecutive,
	setCeo,
} from '../actions';

const Counters = () => {
	var speed = 1000; // Speed of the game in percents

	/**
	 * Counter Variables: Increase every Update Cycle (initially 1000ms)
	 */
	const multiplier = useSelector((state) => state.multiplier);
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
	 * ------------------------------------------------------------------------------------------------------------------
	 * Counters: Update cycles are based on the speed variable which is 1000ms initially
	 * ------------------------------------------------------------------------------------------------------------------
	 */

	/**
	 * Increments the number of open job positions by the value stored in positionCounterSpeed every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => dispatch(setPosition(positionCounter + positionCounterSpeed * multiplier)), speed);
		return () => clearInterval(timer);
	}, [positionCounter, positionCounterSpeed, speed, multiplier, dispatch]);

	/**
	 * Increment the number of interns by the value stored in moneyCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => dispatch(setMoney(moneyCounter + internCounter * multiplier)), speed);
		return () => clearInterval(timer);
	}, [moneyCounter, internCounter, speed, multiplier, dispatch]);

	/**
	 * Increment the number of employees by the value stored in internCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => dispatch(setIntern(internCounter + employeeCounter * multiplier)), speed);
		return () => clearInterval(timer);
	}, [internCounter, employeeCounter, speed, multiplier, dispatch]);

	/**
	 * Increment the number of supervisors by the value stored in employeeCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => dispatch(setEmployee(employeeCounter + supervisorCounter * multiplier)), speed);
		return () => clearInterval(timer);
	}, [employeeCounter, supervisorCounter, speed, multiplier, dispatch]);

	/**
	 * Increment the number of directors by the value stored in superivsorCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => dispatch(setSupervisor(supervisorCounter + directorCounter * multiplier)), speed);
		return () => clearInterval(timer);
	}, [supervisorCounter, directorCounter, speed, multiplier, dispatch]);

	/**
	 * Increment the number of vice presidents by the value stored in directorCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => dispatch(setDirector(directorCounter + vicePresidentCounter * multiplier)), speed);
		return () => clearInterval(timer);
	}, [directorCounter, vicePresidentCounter, speed, multiplier, dispatch]);

	/**
	 * Increment the number of executives by the value stored in vicePresidentCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(
			() => dispatch(setVicePresident(vicePresidentCounter + executiveCounter * multiplier)),
			speed
		);
		return () => clearInterval(timer);
	}, [vicePresidentCounter, executiveCounter, speed, multiplier, dispatch]);

	/**
	 * Increment the number of ceo's by the value stored in executiveCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => dispatch(setExecutive(executiveCounter + ceoCounter * multiplier)), speed);
		return () => clearInterval(timer);
	}, [executiveCounter, ceoCounter, speed, multiplier, dispatch]);

	/**
	 * Increment the number of chairmen by the value stored in ceoCounter every update cycle
	 */
	useEffect(() => {
		const timer = setTimeout(() => dispatch(setCeo(ceoCounter + chairmanCounter * multiplier)), speed);
		return () => clearInterval(timer);
	}, [ceoCounter, chairmanCounter, speed, multiplier, dispatch]);

	/**
	 * There is no need for a chairmanCounter because there is no staff higher than the Chairman.
	 * All the chairman increments will be done with buttons.
	 */
};

export default Counters;
