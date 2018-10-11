import styled from "styled-components"
import { identical } from "ramda"

// for background color variation
const backgroundColorVariation = props => {
  if (props.secondary) {
    return "#ebebeb"
  } else if (props.light) {
    return "transparent"
  } else {
    return "#338ffc"
  }
}

// for color
const fontColorVariation = props => {
  if (props.secondary) {
    return "#969696"
  } else if (props.light) {
    return "#80808b"
  } else {
    return "#ffffff"
  }
}

// when hover, set a background color depending on props given
const hoverBackgroundColorVariation = props => {
  if (props.secondary) {
    return "#c1c1c1"
  } else if (props.light) {
    return "transparent"
  } else {
    return "#125eb7"
  }
}

// for hover font color variation, depending on the given props.
const hoverFontColorVariation = props => {
  if (props.secondary) {
    return "#333333"
  } else if (props.light) {
    return "#000000"
  } else {
    return "#ffffff"
  }
}

/**
 * @param secondary - flat contained button with grey background (like https://material-ui.com/demos/buttons/#contained-buttons)
 * @param light - grey text button without border and background (like https://material-ui.com/demos/buttons/#text-buttons)
 * @param lightBorder - add tiny grey button border (like https://material-ui.com/demos/buttons/#outlined-buttons)
 */
// TODO rename to Button
const RootButton = styled.button`
  background-color: ${backgroundColorVariation};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  color: ${fontColorVariation};
  width: ${props => (props.large ? "146px" : "86px")};
  border: ${props => (props.lightBorder ? "1px solid #d4d4d4" : "0")};
  padding: 10px 0;
  font-family: "karla", sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  border-radius: 3px;
  transition: all 300ms ease-in;
  pointer-events: ${props => props.disabled && "none"};

  &:hover {
    background-color: ${hoverBackgroundColorVariation};
    border: ${props => (props.lightBorder ? "1px solid #b9b9b9" : "0")};
    color: ${hoverFontColorVariation};
  }
`

// For text button with icon on the left/right side
const ButtonIcon = RootButton.extend`
  width: 148px;
  i {
    font-size: 1rem;
    vertical-align: 0.1em;
    margin: ${({ iconPosition }) =>
      identical(iconPosition, "right") ? "0 0 0 0.5em" : "0px 0.5em 0 0.5em"};
  }
`

// For button with icon only
const IconButton = styled.button`
  border: 0;
  img,
  svg {
    width: 30px;
  }
`

// TODO try to move to button as type 'outline'
const OutlineButton = styled.button`
  background: none;
  border: 1px solid ${props => props.color || props.theme.gray};
  color: ${props => props.color || props.theme.gray};
  padding: 4px 13px 4px 7px;
  position: relative;
  top: -6px;
  border-radius: 4px;
  transition: all 300ms ease-in;

  img {
    vertical-align: text-bottom;
    margin-right: 5px;
  }

  svg {
    vertical-align: text-bottom;
    margin-right: 5px;
    margin-bottom: 2px;
  }

  &:hover {
    border-color: ${props => props.hoverColor || props.theme.black};
    color: ${props => props.hoverColor || props.theme.black};
  }
`

export { RootButton as default, ButtonIcon, IconButton, OutlineButton }
