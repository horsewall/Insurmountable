export const multiplierReducer = (state = 1, action) => {
	switch (action.type) {
		case 'SET_MULTIPLIER':
			return action.payload;
		default:
			return state;
	}
};

export const timeMachineCountReducer = (state = 1, action) => {
	switch (action.type) {
		case 'SET_TIME_MACHINE_COUNT':
			return action.payload;
		default:
			return state;
	}
};

export const upgradeCostReducer = (state = 1, action) => {
	switch (action.type) {
		case 'SET_UPGRADE_COST_REDUCER':
			return action.payload;
		default:
			return state;
	}
};

export const positionCounterSpeedReducer = (state = 1, action) => {
	switch (action.type) {
		case 'SET_POSITION_COUNTER_SPEED':
			return action.payload;
		default:
			return state;
	}
};

export const positionCounterReducer = (state = 1, action) => {
	switch (action.type) {
		case 'SET_POSITION':
			return action.payload;
		default:
			return state;
	}
};

export const moneyCounterReducer = (state = 10, action) => {
	switch (action.type) {
		case 'SET_MONEY':
			return action.payload;
		default:
			return state;
	}
};

export const internCounterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SET_INTERN':
			return action.payload;
		default:
			return state;
	}
};

export const employeeCounterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SET_EMPLOYEE':
			return action.payload;
		default:
			return state;
	}
};

export const supervisorCounterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SET_SUPERVISOR':
			return action.payload;
		default:
			return state;
	}
};

export const directorCounterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SET_DIRECTOR':
			return action.payload;
		default:
			return state;
	}
};

export const vicePresidentCounterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SET_VICE_PRESIDENT':
			return action.payload;
		default:
			return state;
	}
};

export const executiveCounterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SET_EXECUTIVE':
			return action.payload;
		default:
			return state;
	}
};

export const ceoCounterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SET_CEO':
			return action.payload;
		default:
			return state;
	}
};

export const chairmanCounterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SET_CHAIRMAN':
			return action.payload;
		default:
			return state;
	}
};
