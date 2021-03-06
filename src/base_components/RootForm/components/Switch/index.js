import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Switch = styled(({ className, disabled, name, onChange, value }) => (
  <label className={className}>
    <input
      checked={value}
      disabled={disabled}
      name={name}
      onChange={onChange}
      type="checkbox"
    />
    <span className="slider round" />
  </label>
))`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 22px;
  margin-bottom: 0;

  input {
    width: 100%;
    height: 100%;
    visibility: hidden;
    margin: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    padding-top: 3px;
    font-size: 12px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 1px;
    background-color: white;
    transition: 0.4s;
  }

  .slider:after {
    content: "OFF";
    float: right;
    color: white;
    padding-right: 7px;
    transition: 0.4s;
  }

  input:disabled + .slider {
    opacity: 0.5;
  }

  input:checked + .slider:after {
    content: "ON";
    float: left;
    color: white;
    padding-left: 10px;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(31px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Switch
