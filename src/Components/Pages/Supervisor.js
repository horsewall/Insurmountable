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
 * Displays when on the "/supervisor" page route
 */
const Supervisor = () => {
	const employeeCounter = useSelector((state) => state.employeeCounter);
	const supervisorCounter = useSelector((state) => state.supervisorCounter);
	return (
		<PageTemplate
			staffName={'Supervisor'}
			staffNamePlural={'Supervisors'}
			staffCounter={supervisorCounter}
			addStaff={ButtonFunctions.AddSupervisors}
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

export default Supervisor;
