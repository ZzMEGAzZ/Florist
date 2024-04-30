import { ResponsiveBar } from '@nivo/bar'

import { BarChartData } from '@/components/chart/@types'

type Props = {
    data: BarChartData
}

const BarChart = ({ data }: Props) => (
    <div className='w-full h-full'>
    {data?.title && <label className='text-2xl font-bold text-Primary-light'>{data.title}</label> }
    <ResponsiveBar
        data={data.datasets}
        keys={data.keys}
        indexBy={data.indexBy}  
        margin={{ top: 10, right: 40, bottom: 150, left: 60 }}
        padding={0.3}
        innerPadding={0}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'purple_red' }}
        colorBy={data.colorBy}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 3,
            tickPadding: 5,
            tickRotation: -30,
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: data.axis,
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={0}
        labelSkipHeight={15}
        
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        tooltip={({value, label}) => (
            <div className='w-max h-max bg-white border rounded p-2'>
                {label}: {value} คน
            </div>
        )}
        motionConfig="gentle"
        ariaLabel={data.label}
        animate={true}
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
    />
    </div>

    
)

export default BarChart