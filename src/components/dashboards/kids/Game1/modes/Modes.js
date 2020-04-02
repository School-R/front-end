import React, { PropTypes } from 'react'
//import Button from '' install reactstrap button

const Modes = ({ label, onClickMode }) => (
  <div styleName="Modes">
    <span className="label">{label}</span>
    <br />
    <Button onClick={onClickMode}>CHANGE MODE</Button>
  </div>
);

Modes.propTypes = {
  label: PropTypes.string.isRequired,
  onClickMode: PropTypes.func.isRequired
};
export default Modes;