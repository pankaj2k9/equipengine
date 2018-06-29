import React from 'react'
import PropTypes from 'prop-types'

/**
 * Wrapper around simple browser file chooser.
 */
export default class FileChooserDialog extends React.Component {
  /**
   * Handle Choose button is clicked in browser file chooser.
   */
  handleChooseFiles = () => {
    const files = this.fileChooser.files
    if (files && files.length > 0) {
      this.props.onChooseFiles(files)
    }
  }

  /**
   * Public click function to open file chooser.
   */
  open = () => {
    this.fileChooser.click()
  }

  render () {
    const { accept, multiple } = this.props

    return (
      <input
        type='file'
        accept={accept}
        style={{ display: 'none' }}
        onChange={this.handleChooseFiles}
        multiple={!!multiple}
        ref={(input) => { this.fileChooser = input }}
      />
    )
  }
}

FileChooserDialog.PropTypes = {
  onChooseFiles: PropTypes.func.isRequired
}
