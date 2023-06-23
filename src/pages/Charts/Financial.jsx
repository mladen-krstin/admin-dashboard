import React from 'react'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	HiloSeries,
	Tooltip,
	DateTime,
	Zoom,
	Logarithmic,
	Crosshair,
} from '@syncfusion/ej2-react-charts'
import {
	financialChartData,
	FinancialPrimaryXAxis,
	FinancialPrimaryYAxis,
} from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'
import { Header } from '../../components'

const date1 = new Date('2017, 1, 1')

function filterValue(value) {
	if (value.x >= date1) {
		return value.x, value.high, value.low
	}
}

const returnValue = financialChartData.filter(filterValue)

const Financial = () => {
	const { currentMode } = useStateContext()
	return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<Header
				category='Financial'
				title='Company Historical'
			/>
			<ChartComponent
				id='line-chart'
				height='420px'
				primaryXAxis={FinancialPrimaryXAxis}
				primaryYAxis={FinancialPrimaryYAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
			>
				<Inject
					services={[
						HiloSeries,
						DateTime,
						Tooltip,
						Zoom,
						Logarithmic,
						Crosshair,
					]}
				/>
				<SeriesCollectionDirective>
					<SeriesDirective
						dataSource={returnValue}
						xName='x'
						yName='low'
						name='Company Inc'
						type='Hilo'
						low='low'
						high='high'
					/>
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	)
}

export default Financial
