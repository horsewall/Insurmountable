/**
 * External Imports
 */
import { useSelector } from 'react-redux';

/**
 * Internal Imports
 */
import PageTemplate from './PageTemplate';
import ButtonFunctions from '../ButtonFunctions';

/**
 * Displays when on the "/employee" page route
 */
const Employee = () => {
	const internCounter = useSelector((state) => state.internCounter);
	const employeeCounter = useSelector((state) => state.employeeCounter);
	return (
		<PageTemplate
			staffName={'Employee'}
			staffNamePlural={'Employees'}
			staffCounter={employeeCounter}
			addStaff={ButtonFunctions.AddEmployees}
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

export default Employee;
