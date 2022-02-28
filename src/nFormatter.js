/**
 * ------------------------------------------------------------------------------------------------------------------
 * Displays large numbers with SI Prefixes
 * ------------------------------------------------------------------------------------------------------------------
 */

function nFormatter(num) {
	const lookup = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'K' }, // Kilo
		{ value: 1e6, symbol: 'M' }, // Mega
		{ value: 1e9, symbol: 'G' }, // Giga
		{ value: 1e12, symbol: 'T' }, // Tera
		{ value: 1e15, symbol: 'P' }, // Peta
		{ value: 1e18, symbol: 'E' }, // exa
		{ value: 1e21, symbol: 'Z' }, // Zetta
		{ value: 1e24, symbol: 'Y' }, // Yotta
		{ value: 1e27, symbol: 'e27' },
		{ value: 1e28, symbol: 'e28' },
		{ value: 1e29, symbol: 'e29' },
		{ value: 1e30, symbol: 'e30' },
		{ value: 1e31, symbol: ' Insurmountable' },
	];
	const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
	let item = lookup
		.slice()
		.reverse()
		.find(function (item) {
			return num >= item.value;
		});

	/**
	 * Reformating numbers to have SI Prefixes
	 * Display '0' if there's no number
	 */
	return item ? (num / item.value).toPrecision(3).toString().replace(regex, '$1') + '\u2009' + item.symbol : '0';
}

export default nFormatter;
