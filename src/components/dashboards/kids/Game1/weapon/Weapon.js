import React, {PropTypes} from 'react';
import Rock from '../rock_paper_scissors/images/icon-rock.svg'
import Loading from './Loading'

const Weapon = ({ icon, loading }) => (
  <span
    styleName="Weapon"
    className={!loading && icon ? <icon src={Rock}/> : "empty"}
  >
    {!loading && !icon && "?"}
    {loading && <Loading />}
  </span>
);

// Weapon.propTypes = {
//   icon: PropTypes.string
// };
export default Weapon;