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
 * Displays when on the "/chairman" page route
 */
const Chairman = () => {
	const ceoCounter = useSelector((state) => state.ceoCounter);
	const chairmanCounter = useSelector((state) => state.chairmanCounter);
	return (
		<PageTemplate
			staffName={'Chairman'}
			staffNamePlural={'Chairmen'}
			staffCounter={chairmanCounter}
			addStaff={ButtonFunctions.AddChairmen}
			moneyPerStaff={1e8}
			previousStaffCounter={ceoCounter}
			previouStaffCost={100}
			costText={
				<p className='indent PageCosts'>
					- 100M money
					<br />
					- 100 CEO's
					<br />- 1 position
				</p>
			}
		/>
	);
};

export default Chairman;
