/**
 * External Imports
 */
import { useSelector } from 'react-redux';

/**
 * Internal Imports
 */
import nFormatter from '../nFormatter';

/**
 * Button layout for the "Pages" section:
 *
 * <button
 * 	className={
 * 		can buy x number of staff
 * 			? white button
 *: grey button
 * 	}
 * 	onClick={
 * 		can buy x number of staff
 * 			? addStaff("number on button")
 * 			: button doesn't work
 * 	}
 * >
 * 	Hire "number on button"
 * </button>
 */

const PageTemplate = ({
	staffNamePlural,
	staffCounter,
	staffName,
	costText,
	moneyPerStaff,
	previousStaffCounter,
	addStaff,
	previouStaffCost,
}) => {
	const positionCounter = useSelector((state) => state.positionCounter);
	const moneyCounter = useSelector((state) => state.moneyCounter);

	/**
	 * How many staff each button gives you, and how much it costs
	 */
	const Button1Ammount = 1;
	const Button2Ammount = 10;
	const Button3Ammount = 50;
	const Button4Ammount = 1000;
	const Button4AmmountPrefix = '1K';
	const Button5Ammount = 1e6;
	const Button5AmmountPrefix = '1M';

	return (
		<div className='Page'>
			<div>
				{/**
				 * Displays number of interns with a metric prefix if needed, and cost of an intern
				 */}
				<h1 className='PageHeader'>
					{staffNamePlural}: {nFormatter(staffCounter)}
				</h1>
				<p className='PageCostTitle'>1 {staffName} costs:</p>
				{costText}
				{/**
				 * "Hire" buttons
				 */}
				<div className='PageButtons'>
					<button
						className={
							moneyCounter >= moneyPerStaff * Button1Ammount &&
							previousStaffCounter >= previouStaffCost * Button1Ammount &&
							positionCounter >= Button1Ammount
								? 'enabled'
								: 'disabled'
						}
						onClick={
							moneyCounter >= moneyPerStaff * Button1Ammount &&
							previousStaffCounter >= previouStaffCost * Button1Ammount &&
							positionCounter >= Button1Ammount
								? () => addStaff(Button1Ammount)
								: undefined
						}
					>
						Hire {Button1Ammount}
					</button>
					<button
						className={
							moneyCounter >= moneyPerStaff * Button2Ammount &&
							previousStaffCounter >= previouStaffCost * Button2Ammount &&
							positionCounter >= Button2Ammount
								? 'enabled'
								: 'disabled'
						}
						onClick={
							moneyCounter >= moneyPerStaff * Button2Ammount &&
							previousStaffCounter >= previouStaffCost * Button2Ammount &&
							positionCounter >= Button2Ammount
								? () => addStaff(Button2Ammount)
								: undefined
						}
					>
						Hire {Button2Ammount}
					</button>
					<button
						className={
							moneyCounter >= moneyPerStaff * Button3Ammount &&
							previousStaffCounter >= previouStaffCost * Button3Ammount &&
							positionCounter >= Button3Ammount
								? 'enabled'
								: 'disabled'
						}
						onClick={
							moneyCounter >= moneyPerStaff * Button3Ammount &&
							previousStaffCounter >= previouStaffCost * Button3Ammount &&
							positionCounter >= Button3Ammount
								? () => addStaff(Button3Ammount)
								: undefined
						}
					>
						Hire {Button3Ammount}
					</button>
					<button
						className={
							moneyCounter >= moneyPerStaff * Button4Ammount &&
							previousStaffCounter >= previouStaffCost * Button4Ammount &&
							positionCounter >= Button4Ammount
								? 'enabled'
								: 'disabled'
						}
						onClick={
							moneyCounter >= moneyPerStaff * Button4Ammount &&
							previousStaffCounter >= previouStaffCost * Button4Ammount &&
							positionCounter >= Button4Ammount
								? () => addStaff(Button4Ammount)
								: undefined
						}
					>
						Hire {Button4AmmountPrefix}
					</button>
					<button
						className={
							moneyCounter >= moneyPerStaff * Button5Ammount &&
							previousStaffCounter >= previouStaffCost * Button5Ammount &&
							positionCounter >= Button5Ammount
								? 'enabled'
								: 'disabled'
						}
						onClick={
							moneyCounter >= moneyPerStaff * Button5Ammount &&
							previousStaffCounter >= previouStaffCost * Button5Ammount &&
							positionCounter >= Button4Ammount
								? () => addStaff(Button5Ammount)
								: undefined
						}
					>
						Hire {Button5AmmountPrefix}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PageTemplate;
