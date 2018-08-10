import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// for checkbox
const Checkbox = styled(({ name, className, ...rest }) => (
  <div className={className}>
    <input className="Checkbox" name={name} type="checkbox" {...rest} />
    <label htmlFor={name} />
  </div>
))`
  width: 15px;
  height: 15px;
  position: relative;

  .Checkbox {
    position: relative;
    opacity: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    cursor: pointer;

    + label {
      background-color: transparent;
      border: 2px solid #cccccc;
      border-radius: 2px;
      left: 0;
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;

      &:after {
        content: "";
        border: 2px solid #fff;
        border-top: none;
        border-right: none;
        height: 5px;
        width: 9px;
        opacity: 0;
        position: absolute;
        top: 4px;
        left: 5px;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }

    &:checked + label {
      background-color: #338ffc;
      border-color: #338ffc;
    }

    &:checked + label:after {
      opacity: 1;
    }
  }
`

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

const CheckboxCircleSecondary = styled(({ name, className }) => (
  <div className={className}>
    <input className="Checkbox--secondary" name={name} type="checkbox" />
    <label className="Label--secondary" htmlFor={name} />
  </div>
))`
  width: 25px;
  height: 25px;
  position: relative;

  .Checkbox--secondary {
    position: relative;
    opacity: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    cursor: pointer;
    margin: 0;

    + .Label--secondary {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: transparent;
      border: 1px solid #bbbbbb;
      border-radius: 50%;

      &:after {
        content: "";
        height: 5px;
        width: 12px;
        position: absolute;
        top: 10px;
        left: 11px;
        border: 1px solid #000000;
        border-top: none;
        border-right: none;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }

    &:checked + .Label--secondary:after {
      opacity: 1;
    }
  }
`

CheckboxCircleSecondary.propTypes = {
  name: PropTypes.string.isRequired
}

const CheckboxCircle = styled(({ className, disabled, id, name }) => (
  <div className={className}>
    <input
      className="Checkbox--circle"
      disabled={disabled}
      id={id}
      name={name}
      type="checkbox"
    />
    <label className="Label--circle" htmlFor={id} />
  </div>
))`
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 50%;
  border: 2px solid #bbbbbb;

  .Checkbox--circle {
    position: relative;
    opacity: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    cursor: pointer;

    + .Label--circle {
      background-color: transparent;
      border-radius: 50%;
      left: 2px;
      position: absolute;
      top: 2px;
      height: 75%;
      width: 75%;
    }

    &:checked + .Label--circle {
      background-color: #bbbbbb;
      border-color: #bbbbbb;
    }

    &:checked + .Label--circle:after {
      opacity: 1;
    }
  }
`

CheckboxCircle.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export { Checkbox, CheckboxCircle, CheckboxCircleSecondary }
