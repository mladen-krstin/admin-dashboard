import React from 'react'
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	ColumnSeries,
	Category,
	Tooltip,
	Legend,
	RangeColorSettingsDirective,
	RangeColorSettingDirective,
} from '@syncfusion/ej2-react-charts'
import {
	colorMappingData,
	ColorMappingPrimaryXAxis,
	ColorMappingPrimaryYAxis,
	rangeColorMapping,
} from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'
import { Header } from '../../components'

const ColorMapping = () => {
	const { currentMode } = useStateContext()

	return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<Header
				category='ColorMapping'
				title='Company Historical'
			/>
			<ChartComponent
				id='line-chart'
				primaryXAxis={ColorMappingPrimaryXAxis}
				primaryYAxis={ColorMappingPrimaryYAxis}
				chartArea={{ border: { width: 0 } }}
				tooltip={{ enable: true }}
				background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
			>
				<Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
				<SeriesCollectionDirective>
					<SeriesDirective
						dataSource={colorMappingData[0]}
						xName='x'
						yName='y'
						name='USA'
						type='Column'
						cornerRadius={{
							topLeft: 10,
							topRight: 10,
						}}
					/>
				</SeriesCollectionDirective>
			</ChartComponent>
			<RangeColorSettingsDirective>
				{rangeColorMapping.map((item, index) => (
					<RangeColorSettingDirective
						key={index}
						{...item}
					/>
				))}
			</RangeColorSettingsDirective>
		</div>
	)
}

export default ColorMapping
