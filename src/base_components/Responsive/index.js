import React from 'react'
import Responsive from 'react-responsive'

/**
 * Wrapper for Desktop and Tablet devices
 */
export const Desktop = (props) => <Responsive {...props} minWidth={768} />

/**
 * Wrapper for Mobile devices only
 */
export const Mobile = (props) => <Responsive {...props} maxWidth={767} />
