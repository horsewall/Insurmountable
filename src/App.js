/**
 * External Imports
 */
import React from 'react';

/**
 * Internal Imports
 */
import './App.css';
// import { ButtonFunctions } from './Components/ButtonFunctions';
import Router from './Components/Router';
import MoneyAndPosition from './Components/MoneyAndPosition';
import RestartButton from './Components/Pages/RestartButton';
import TimeMachine from './Components/TimeMachine';
import WinningDisplay from './Components/WinningDisplay';
import Instructions from './Components/Instructions';

const App = () => (
	<>
		<Router />
		<MoneyAndPosition />
		<RestartButton />
		<TimeMachine />
		<WinningDisplay />
		<Instructions />
	</>
);

export default App;
