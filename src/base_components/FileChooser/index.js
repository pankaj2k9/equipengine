import React, { forwardRef } from "react"
import PropTypes from "prop-types"

/**
 * Wrapper around simple browser file chooser.
 */
class FileChooserDialog extends React.Component {
  /**
   * Handle Choose button is clicked in browser file chooser.
   */
  handleChooseFiles = event => {
    const files = this.fileChooser.files
    if (files && files.length > 0) {
      this.props.onChooseFiles(files, event)
    }
  }

  /**
   * Public click function to open file chooser.
   */
  open = () => {
    this.fileChooser.click()
  }

  render() {
    const { name, accept, multiple } = this.props

    return (
      <input
        name={name}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        onChange={this.handleChooseFiles}
        multiple={!!multiple}
        ref={input => {
          this.fileChooser = input
        }}
      />
    )
  }
}

FileChooserDialog.propTypes = {
  onChooseFiles: PropTypes.func.isRequired
}

export default forwardRef((props, ref) => (
  <FileChooserDialog ref={ref} {...props} />
))
