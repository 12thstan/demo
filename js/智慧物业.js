var myChart = echarts.init(document.getElementById('amiddboxtbott2'));

var wy_data = [];
for (var i = 0; i < 3; i++) {   // 五个类别         '物业', '电费', '停车', '燃气', '水费'
    var _data = [];
    for (var j = 0; j < 30; j++) {
        if (i === 0) { // 物业
            _data.push(200 + randomNum(1900, 2100));       // 2000 * 30
        }   
        if (i === 1) { // 电费  
            _data.push(333 + randomNum(1000, 1666));       // 2000 * 20
        }
        if (i === 2) { // 停车
            _data.push(5000 + randomNum(500, 2000));    // 1000 * 300
        }
        // if (i === 3) { // 燃气
        //     _data.push(666 + randomNum(333, 999));          // 2000 * 10
        // }
        // if (i === 4) { // 水费
        //     _data.push(2000 + randomNum(500, 3500));        // 2000 * 30
        // }
    }
    wy_data.push(_data);
}


option = {
    backgroundColor: 'rgba(1,202,217,.2)',
    grid: {
        left: 60,
        right: 50,
        top: 100,
        bottom: 25
    },
    title: [{
        top: 70,
        left: 150,
        textStyle: {
            fontSize: 14,
            color: 'rgba(255,255,255,.6)'
        },
        // text: ''
    }],
    legend: [{
        top: 10,
        left: 20,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
        },
        data: ['维修', '电费', '停车']
    }, {
        top: 30,
        left: 20,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
        },
        data: ['燃气', '水费']
    }],
    xAxis: [{
        name: '日期',
        type: 'category',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,.7)"
        },

        data: ['4-01', '4-02', '4-03', '4-04', '4-05', '4-06', '4-07', '4-08', '4-09', '4-10',
            '4-11', '4-12', '4-13', '4-14', '4-15', '4-16', '4-17', '4-18', '4-19', '4-20',
            '4-21', '4-22', '4-23', '4-24', '4-25', '4-26', '4-27', '4-28', '4-29', '4-30'
        ],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        // type: 'value',
        type: 'log',
        name: '金额 ￥',
        // interval: 50,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.3)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.01)'
            }
        },
    }],
    series: [{
            name: '缴费占比',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['80%', '20%'],
            avoidLabelOverlap: true,
            minAngle: 30,
            label: {
                // show: false,
                position: 'inner',
                formatter: '{b} {d}%'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 300000, name: '停车', itemStyle: { color: '#edc1a5', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
                { value: 65000, name: '维修', itemStyle: { color: '#bcd3bb', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
                // { value: 63000, name: '水费', itemStyle: { color: '#e1e8c8', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
                { value: 42000, name: '电费', itemStyle: { color: '#e88f70', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
                // { value: 21000, name: '燃气', itemStyle: { color: '#9dc5c8', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
            ]
        },
        {
            name: '维修',
            type: 'line',
            data: wy_data[0],
            smooth: true,
            itemStyle: {
                color: '#bcd3bb',
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        }, {
            name: '电费',
            type: 'line',
            data: wy_data[1],
            smooth: true,
            itemStyle: {
                color: '#e88f70',
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        }, {
            name: '停车',
            type: 'line',
            data: wy_data[2],
            smooth: true,
            itemStyle: {
                color: '#edc1a5',
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        } //, 
        // {
        //     name: '燃气',
        //     type: 'line',
        //     data: wy_data[3],
        //     smooth: true,
        //     itemStyle: {
        //         color: '#9dc5c8',
        //         opacity: 0.8,
        //         shadowBlur: 10,
        //         shadowOffsetX: 0,
        //         shadowOffsetY: 0,
        //         shadowColor: 'rgba(0, 0, 0, 0.5)',
        //     }
        // }, 
        // {
        //     name: '水费',
        //     type: 'line',
        //     data: wy_data[4],
        //     smooth: true,
        //     itemStyle: {
        //         color: '#e1e8c8',
        //         opacity: 0.8,
        //         shadowBlur: 10,
        //         shadowOffsetX: 0,
        //         shadowOffsetY: 0,
        //         shadowColor: 'rgba(0, 0, 0, 0.5)',
        //     }
        // }
    ]
};
myChart.setOption(option);