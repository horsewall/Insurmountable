import { combineReducers } from 'redux';
import {
	multiplierReducer,
	timeMachineCountReducer,
	upgradeCostReducer,
	positionCounterSpeedReducer,
	positionCounterReducer,
	moneyCounterReducer,
	internCounterReducer,
	employeeCounterReducer,
	supervisorCounterReducer,
	directorCounterReducer,
	vicePresidentCounterReducer,
	executiveCounterReducer,
	ceoCounterReducer,
	chairmanCounterReducer,
} from './counter';

const allReducers = combineReducers({
	multiplier: multiplierReducer,
	timeMachineCount: timeMachineCountReducer,
	upgradeCost: upgradeCostReducer,
	positionCounterSpeed: positionCounterSpeedReducer,
	positionCounter: positionCounterReducer,
	moneyCounter: moneyCounterReducer,
	internCounter: internCounterReducer,
	employeeCounter: employeeCounterReducer,
	supervisorCounter: supervisorCounterReducer,
	directorCounter: directorCounterReducer,
	vicePresidentCounter: vicePresidentCounterReducer,
	executiveCounter: executiveCounterReducer,
	ceoCounter: ceoCounterReducer,
	chairmanCounter: chairmanCounterReducer,
});

export default allReducers;
