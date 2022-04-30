import React from 'react'
import './styles.scss'

export default ({
	className = '',
	children
}) => {
	return (
		<div className={`fadeinload ${className}`}>
			{children}
		</div>
	)
}