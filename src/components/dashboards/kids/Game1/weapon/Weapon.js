import React, {PropTypes} from 'react';
import '../rock_paper_scissors/images/i'

const Weapon = ({ icon, loading }) => (
  <span
    styleName="Weapon"
    className={!loading && icon ? `fa fa-hand-${icon}-o` : "empty"}
  >
    {!loading && !icon && "?"}
    {loading && <Loading />}
  </span>
);

Weapon.propTypes = {
  icon: PropTypes.string
};
