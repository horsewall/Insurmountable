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
 * Displays when on the "/director" page route
 */
const Director = () => {
	const supervisorCounter = useSelector((state) => state.supervisorCounter);
	const directorCounter = useSelector((state) => state.directorCounter);
	return (
		<PageTemplate
			staffName={'Director'}
			staffNamePlural={'Directors'}
			staffCounter={directorCounter}
			addStaff={ButtonFunctions.AddDirectors}
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

export default Director;
