/**
 * External Imports
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Internal Imports
 */
import nFormatter from './nFormatter';

/**
 * Each NavLink:
 *  - Creates buttons to be displayed in NavBar
 *  - Displays number of staff if there are any
 */
const NavBarTemplate = ({ buttonStyles, pageRoute, staffNamePlural, staffCounter }) => {
	return (
		<NavLink
			style={{
				position: 'absolute',
				top: buttonStyles,
			}}
			className={({ isActive }) => 'list-group-item' + (isActive ? 'onPage' : '')}
			to={pageRoute}
			exact='true'
		>
			{staffNamePlural}
			{staffCounter !== 0 && ': ' + nFormatter(staffCounter)}
		</NavLink>
	);
};

const NavBar = React.useCallback(() => {
	const internCounter = useSelector((state) => state.internCounter);
	const employeeCounter = useSelector((state) => state.employeeCounter);
	const supervisorCounter = useSelector((state) => state.supervisorCounter);
	const directorCounter = useSelector((state) => state.directorCounter);
	const vicePresidentCounter = useSelector((state) => state.vicePresidentCounter);
	const executiveCounter = useSelector((state) => state.executiveCounter);
	const ceoCounter = useSelector((state) => state.ceoCounter);
	const chairmanCounter = useSelector((state) => state.chairmanCounter);
	return (
		(
			<div id='linkContainer'>
				<nav>
					<ul>
						<li>
							<NavBarTemplate
								buttonStyles={'2%'}
								pageRoute={'/intern'}
								staffNamePlural={'Interns'}
								staffCounter={internCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'14%'}
								pageRoute={'/employee'}
								staffNamePlural={'Employees'}
								staffCounter={employeeCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'26%'}
								pageRoute={'/supervisor'}
								staffNamePlural={'Supervisors'}
								staffCounter={supervisorCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'38%'}
								pageRoute={'/director'}
								staffNamePlural={'Directors'}
								staffCounter={directorCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'50%'}
								pageRoute={'/vice-president'}
								staffNamePlural={'Vice Presidents'}
								staffCounter={vicePresidentCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'62%'}
								pageRoute={'/executive'}
								staffNamePlural={'Executives'}
								staffCounter={executiveCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'74%'}
								pageRoute={'/ceo'}
								staffNamePlural={"CEO's"}
								staffCounter={ceoCounter}
							/>
						</li>
						<li>
							<NavBarTemplate
								buttonStyles={'86%'}
								pageRoute={'/chairman'}
								staffNamePlural={'Chairmen'}
								staffCounter={chairmanCounter}
							/>
						</li>
					</ul>
				</nav>
			</div>
		),
		[
			internCounter,
			employeeCounter,
			supervisorCounter,
			directorCounter,
			vicePresidentCounter,
			executiveCounter,
			ceoCounter,
			chairmanCounter,
		]
	);
});

export default NavBar;
