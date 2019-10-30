let vlSpec = {
  $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  data: {
    url: 'https://gist.githubusercontent.com/bodi44/33805bc442f908c0dc3030a98e8c33a4/raw/87fe1915f15465afa1742ef4191a639bf24bf542/population_prospect.csv',
  },
  width: 850,
  height: 400,
  background: '#F3F7F7',
  layer: [
    {
      transform: [{
        filter: 'datum.type === \'estimate\'',
      }],
      mark: {
        type: 'line',
        color: '#3288bd',
      },
      encoding: {
        x: {
          field: 'year',
          timeUnit: 'utcyear',
          type: 'temporal',
          title: null,
          axis: {
            values: [1950, 1991, 2020, 2100],
            gridDash: {
              value: [2, 2],
            },
          },
          scale: {
            domain: [1947, 2102],
          },
        },
        y: {
          field: 'population',
          type: 'quantitative',
          title: null,
          axis: {
            values: [15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000],
            gridDash: {
              value: [2, 2],
            },
          },
          scale: {
            domain: [10000, 55000],
          },
        },
      },
    },
    {
      transform: [{
        filter: 'datum.type !== \'estimate\'',
      }],
      mark: {
        type: 'line',
        strokeDash: [6, 2],
      },
      encoding: {
        x: {
          field: 'year',
          timeUnit: 'utcyear',
          type: 'temporal',
          axis: {
            values: [1950, 1991, 2020, 2100],
          },
        },
        y: {
          field: 'population',
          type: 'quantitative',
          axis: {
            values: [15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000],
            gridDash: {
              value: [2, 2],
            },
          },
          scale: {
            domain: [10000, 55000],
          },
        },
        color: {
          field: 'type',
          type: 'nominal',
          scale: {
            range: ['#d53e4f'],
          },
          legend: null,
        },
      },
    },
  ],
  config: {
    axis: {
      ticks: false,
      domain: false,
      domainColor: '#5D646F',
      labelColor: '#5D646F',
    },
    axisRight: {},
    view: { stroke: 'transparent' },
  },
};

vegaEmbed('#vis', vlSpec);