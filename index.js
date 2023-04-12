var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

// Generate data.
function makeData() {
  let data = [];
  for (let i = 0; i < 13; i++) {
    let cate = [];
    for (let j = 0; j < 100; j++) {
      cate.push(Math.random() * 200);
    }
    data.push(cate);
  }
  return data;
}
const data0 = makeData();
const data1 = makeData();
option = {
  title: {
    text: 'Multiple Categories',
    left: 'center'
  },
  dataset: [
    {
      source: data0
    },
    {
      source: data1
    },

    {
      fromDatasetIndex: 0,
      transform: { type: 'boxplot' }
    },
    {
      fromDatasetIndex: 1,
      transform: { type: 'boxplot' }
    },
    {
      fromDatasetIndex: 2,
      transform: { type: 'boxplot' }
    }
  ],
  legend: {
    top: '10%'
  },
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '10%',
    top: '20%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    nameGap: 30,
    splitArea: {
      show: true
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name: 'Value',
    min: 0,
    max: 600,
    splitArea: {
      show: false
    }
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 20
    },
    {
      show: true,
      type: 'slider',
      top: '90%',
      xAxisIndex: [0],
      start: 0,
      end: 20
    }
  ],
  series: [
    {
      name: 'category0',
      type: 'boxplot',
      datasetIndex: 3
    },
    {
      name: 'category1',
      type: 'boxplot',
      datasetIndex: 4
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);