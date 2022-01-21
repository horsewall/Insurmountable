/**
 * External Imports
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * Internal Imports
 */
import Intern from './Pages/Intern';
import Employee from './Pages/Employee';
import Supervisor from './Pages/Supervisor';
import Director from './Pages/Director';
import VicePresident from './Pages/VicePresident';
import Executive from './Pages/Executive';
import CEO from './Pages/CEO';
import Chairman from './Pages/Chairman';
import NavBar from './NavBar';

export default Router = () => {
	/**
	 * Displaying NavBar and creating links for pages
	 */
	<Router>
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
	</Router>;
};
