import React from 'react'

const WinningDisplay = () => {
  const moneyCounter = useSelector((state) => state.moneyCounter);
  
  return (
			<div id={moneyCounter >= 1e31 ? 'youWon' : 'hidden'}>
				<h2>You won!</h2>
				<p>
					Congratulations!
					<br />
					You have reached 1 Insurmountable money!
				</p>
			</div>
	);
}

export default WinningDisplay
