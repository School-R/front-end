import React, { PropTypes } from 'react'
//import Button from '' install reactstrap button

const Modes = ({ label, onClickMode }) => (
  <div styleName="Modes">
    <span className="label">{label}</span>
    <br />
    <button onClick={onClickMode}>CHANGE MODE</button>
  </div>
);

// Modes.propTypes = {
//   label: PropTypes.string.isRequired,
//   onClickMode: PropTypes.func.isRequired
// };
export default Modes;