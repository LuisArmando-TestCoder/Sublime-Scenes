import React from 'react'
import * as Components from '../..'
import './styles.scss'

export default ({
	className = '',
	children,
	scenes = ['Default']
}) => {
	return (
		<div className={`sharedcanvaswrapper ${className}`}>
			<div className="sharedcanvaswrapper__shared-content">
				{children}
			</div>
			<Components.L1.Canvas3D
				className="sharedcanvaswrapper__shared-canvas"
				scenes={scenes} id="MainScene" />
			<button>
				{/* Shrink the canvas or show it with opening or closing eye */}
			</button>
		</div>
	)
}