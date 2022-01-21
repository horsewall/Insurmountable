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
 * Displays when on the "/intern" or "/" page route
 */
const Intern = () => {
	const internCounter = useSelector((state) => state.internCounter);

	return (
			<PageTemplate
				staffName={'Intern'}
				staffNamePlural={'Interns'}
				staffCounter={internCounter}
				addStaff={ButtonFunctions.AddInterns}
				moneyPerStaff={10}
				previousStaffCounter={null}
				previouStaffCost={null}
				costText={
					<p className='indent PageCosts'>
						- 10 money
						<br />- 1 position
					</p>
				}
			/>
	);
};

export default Intern;
