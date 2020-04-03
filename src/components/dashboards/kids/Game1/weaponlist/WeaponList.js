import React from 'react';
import Weapon from '../weapon/Weapon'

const WeaponList = ({ weapons, onClickWeapon }) => (
	<div styleName="WeaponList">
		<ul>
			{weapons.map(item => (
				<li key={item}>
					<button
						onClick={() => onClickWeapon(item)}
					>
						<Weapon
							icon={item}
						/>
					</button>
				</li>
			))}
		</ul>
		<span className="label">CHOOSE A WEAPON</span>
    </div>
)
export default WeaponList;