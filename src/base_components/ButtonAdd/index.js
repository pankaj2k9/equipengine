import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { identical } from "ramda"
import { ButtonIcon } from "base_components/RootButton"
import IconPlus from "react-icons/lib/md/add"

const Button = ButtonIcon.extend`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.714em 1em;

  *:first-child {
    margin-right: 0.3em;
  }

  @media screen and (min-width: 768px) {
    width: initial;
    margin-bottom: 0;
  }
`

const ButtonAdd = ({ onHandlerClick, text, className, iconPosition }) => (
  <Button
    iconPosition={iconPosition}
    className={className}
    onClick={onHandlerClick}
  >
    {identical(iconPosition, "right") ? (
      <Fragment>
        <span>{text}</span>
        <IconPlus />
      </Fragment>
    ) : (
      <Fragment>
        <IconPlus />
        <span>{text}</span>
      </Fragment>
    )}
  </Button>
)

ButtonAdd.propTypes = {
  text: PropTypes.string.isRequired,
  onHandlerClick: PropTypes.func,
  iconPosition: PropTypes.string,
  className: PropTypes.string
}

ButtonAdd.defaultProps = {
  iconPosition: "RIGHT"
}

export default ButtonAdd
