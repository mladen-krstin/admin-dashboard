import React from 'react'
import { useStateContext } from '../context/ContextProvider'

const Footer = () => {
	const { currentColor } = useStateContext()
	return (
		<div className='mt-24'>
			<p className='dark:text-gray-200 text-gray-700 text-center m-20'>
				© 2023 All rights reserved by{' '}
				<span className={`font-bold text-${currentColor}`}>
					&#60;dev&#62;78
				</span>
			</p>
		</div>
	)
}

export default Footer
