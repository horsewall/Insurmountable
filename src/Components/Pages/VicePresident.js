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
 * Displays when on the "/vice-president" page route
 */
const VicePresident = () => {
	const directorCounter = useSelector((state) => state.directorCounter);
	const vicePresidentCounter = useSelector((state) => state.vicePresidentCounter);
	return (
		<PageTemplate
			staffName={'Vice President'}
			staffNamePlural={'Vice Presidents'}
			staffCounter={vicePresidentCounter}
			addStaff={ButtonFunctions.AddVicePresidents}
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

export default VicePresident;
