import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { identical } from 'ramda'
import { ButtonIcon } from 'base_components/RootButton'
import IconPlus from 'react-icons/lib/md/add'

const Button = ButtonIcon.extend`
  width: 100%;
  margin-bottom: 10px;
  padding: 5px 13px 8px 13px;
  border: 1px solid #979797;
  background: transparent;
  color: #000000;

  &:hover {
    background-color: #e2e2e2;
    color: #000000;
  }

  @media screen and (min-width: 768px) {
    width: initial;
    margin-right: 1.5em;
    margin-bottom: 0;
  }
`

const ButtonAdd = ({ onHandlerClick, text, className, iconPosition }) => (
  <Button iconPosition={iconPosition} className={className} onClick={onHandlerClick}>
    {
      identical(iconPosition, 'right')
        ? (
          <Fragment>
            <span>{text}</span>
            <i>
              <IconPlus />
            </i>
          </Fragment>
        )
        : (
          <Fragment>
            <i>
              <IconPlus />
            </i>
            <span>{text}</span>
          </Fragment>
        )
    }
  </Button>
)

ButtonAdd.propTypes = {
  text: PropTypes.string.isRequired,
  onHandlerClick: PropTypes.func,
  iconPosition: PropTypes.string,
  className: PropTypes.string
}

ButtonAdd.defaultProps = {
  iconPosition: 'RIGHT'
}

export default ButtonAdd
