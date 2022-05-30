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
			<section className="sharedcanvaswrapper__section sharedcanvaswrapper__content">
				{children}
			</section>
			<section className="sharedcanvaswrapper__section">
				<Components.L1.Canvas3D
					className="sharedcanvaswrapper__canvas"
					scenes={scenes} id={scenes[0]} />
				<button>
					{/* Shrink the canvas or show it with opening or closing eye */}
				</button>
			</section>
		</div>
	)
}