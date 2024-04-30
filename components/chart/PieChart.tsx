import { ResponsivePie } from '@nivo/pie'

import { PieChartData } from '@/components/chart/@types'

type Props = {
    data: PieChartData
}

const PieChart = ({ data }: Props) => (
    <>
        {data?.title && <label className='text-2xl font-bold text-Primary-light'>{data.title}</label>}
        <ResponsivePie
            data={data.datasets}
            margin={{ top: 30, right: 10, bottom: 60, left: 10 }}
            activeOuterRadiusOffset={10}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            colors={{ scheme: 'red_purple' }}
            arcLinkLabelsSkipAngle={5}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsOffset={-20}
            arcLinkLabelsDiagonalLength={36}
            arcLinkLabelsStraightLength={36}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
            arcLabel={e => `${((e.value / data.total) * 100).toFixed(2)} %`}
            arcLabelsSkipAngle={20}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        3
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
        />
    </>

)

export default PieChart