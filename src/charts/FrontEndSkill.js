/**
 * @author Perlou
 * @FrontEndSkill.js
 * @exports {obj} option
 */

var data = [
	{
		value: [4,4,5,4,5,4],
		name: '技能评分'
	}
];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

var option = {
    // backgroundColor: '#161627',
    backgroundColor: 'none',
    title: {
        text: '前端基础技能图',
        left: 'center',
        textStyle: {
            color: '#eee'
        }
    },
    tooltip:{
        trigger: 'item'
    },
    radar: {
        indicator: [
            {name: 's1', max: 5},
            {name: 's2', max: 5},
            {name: 's3', max: 5},
            {name: 's4', max: 5},
            {name: 's5', max: 5},
            {name: 's6', max: 5}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(0, 183, 238, 0.4)', 'rgba(0, 183, 238, 0.5)',
                    'rgba(0, 183, 238, 0.5)', 'rgba(0, 183, 238, 0.6)',
                    'rgba(0, 183, 238, 0.8)', 'rgba(0, 183, 238, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '前端技能图',
            type: 'radar',
            lineStyle: lineStyle,
            data: data,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#F9713C'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        }
    ]
};

module.exports = option;