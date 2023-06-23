import React from 'react'
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	PieSeries,
	AccumulationDataLabel,
	Inject,
	AccumulationTooltip,
} from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../context/ContextProvider'

const Doughnut = ({ id, data, legendVisibility, height }) => {
	const { currentMode } = useStateContext()

	return (
		<AccumulationChartComponent
			id={id}
			legendSettings={{ visible: legendVisibility, background: 'white' }}
			height={height}
			background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
			tooltip={{ enable: true }}
		>
			<Inject
				services={[
					AccumulationLegend,
					PieSeries,
					AccumulationDataLabel,
					AccumulationTooltip,
				]}
			/>
			<AccumulationSeriesCollectionDirective>
				<AccumulationSeriesDirective
					name='Sale'
					dataSource={data}
					xName='x'
					yName='y'
					innerRadius='40%'
					startAngle={0}
					endAngle={360}
					radius='70%'
					explode
					explodeOffset='10%'
					dataLabel={{
						visible: true,
						name: 'text',
						position: 'Inside',
						font: {
							fontWeight: '600',
							color: '#FFF',
						},
					}}
				/>
			</AccumulationSeriesCollectionDirective>
		</AccumulationChartComponent>
	)
}

export default Doughnut
