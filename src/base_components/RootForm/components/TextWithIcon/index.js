import Text from '../Text'
import PropTypes from 'prop-types'

const TextWithIcon = Text.extend`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 10px;
  padding-left: 37px;
`
TextWithIcon.propTypes = {
  icon: PropTypes.any.isRequired
}

export default TextWithIcon
