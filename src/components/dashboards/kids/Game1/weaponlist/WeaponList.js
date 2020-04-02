import React from 'react';
import Weapon from '../weapon/Weapon'

const WeaponList = ({ weapons, onClickWeapon }) => (
	<div styleName="WeaponList">
		<ul>
			{weapons.map(item => (
				<li key={item}>
					<Button
						onClick={() => onClickWeapon(item)}
					>
						<Weapon
							icon={item}
						/>
					</Button>
				</li>
			))}
		</ul>
		<span className="label">CHOOSE A WEAPON</span>
    </div>
)