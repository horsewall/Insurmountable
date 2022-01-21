import React, { useState, createContext } from 'react';

export const stateContext = createContext();

export const StateProvider = (props) => {
	/**
	 * Counter Variables: Increase every Update Cycle (initially 1000ms)
	 */
	const [moneyCounter, setMoneyCounter] = useState(10);
	const [positionCounter, setPositionCounter] = useState(1);
	const [internCounter, setInternCounter] = useState(0);
	const [employeeCounter, setEmployeeCounter] = useState(0);
	const [supervisorCounter, setSupervisorCouter] = useState(0);
	const [directorCounter, setDirectorCounter] = useState(0);
	const [vicePresidentCounter, setVicePresidentCounter] = useState(0);
	const [executiveCounter, setExecutiveCounter] = useState(0);
	const [ceoCounter, setCeoCounter] = useState(0);
	const [chairmanCounter, setChairmanCounter] = useState(0);
	return (
		<stateContext.Provider
			value={
				(moneyCounter,
				setMoneyCounter,
				positionCounter,
				setPositionCounter,
				internCounter,
				setInternCounter,
				employeeCounter,
				setEmployeeCounter,
				supervisorCounter,
				setSupervisorCouter,
				directorCounter,
				setDirectorCounter,
				vicePresidentCounter,
				setVicePresidentCounter,
				executiveCounter,
				setExecutiveCounter,
				ceoCounter,
				setCeoCounter,
				chairmanCounter,
				setChairmanCounter)
			}
		>
			{props.children}
		</stateContext.Provider>
	);
};
