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
 * Displays when on the "/ceo" page route
 */
const CEO = () => {
	const executiveCounter = useSelector((state) => state.executiveCounter);
	const ceoCounter = useSelector((state) => state.ceoCounter);
	return (
		<PageTemplate
			staffName={'CEO'}
			staffNamePlural={"CEO's"}
			staffCounter={ceoCounter}
			addStaff={ButtonFunctions.AddCeos}
			moneyPerStaff={1e7}
			previousStaffCounter={executiveCounter}
			previouStaffCost={100}
			costText={
				<p className='indent PageCosts'>
					- 10M money
					<br />
					- 100 Executives
					<br />- 1 position
				</p>
			}
		/>
	);
};

export default CEO;
