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
 * Displays when on the "/executive" page route
 */
const Executive = () => {
	const vicePresidentCounter = useSelector((state) => state.vicePresidentCounter);
	const executiveCounter = useSelector((state) => state.executiveCounter);
	return (
		<PageTemplate
			staffName={'Executive'}
			staffNamePlural={'Executives'}
			staffCounter={executiveCounter}
			addStaff={ButtonFunctions.AddExecutives}
			moneyPerStaff={1e6}
			previousStaffCounter={vicePresidentCounter}
			previouStaffCost={100}
			costText={
				<p className='indent PageCosts'>
					- 1M money
					<br />
					- 100 Vice Presidents
					<br />- 1 position
				</p>
			}
		/>
	);
};

export default Executive;
