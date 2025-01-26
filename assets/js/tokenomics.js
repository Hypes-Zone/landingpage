const { AgCharts } = agCharts;

function getData() {
  return [
    { asset: "Stocks", amount: 60000 },
    { asset: "Bonds", amount: 40000 },
    { asset: "Cash", amount: 7000 },
    { asset: "Real Estate", amount: 5000 },
    { asset: "Commodities", amount: 3000 },
  ];
}

const options = {
  container: document.getElementById("myChart"),
  data: getData(),
  title: {
    text: "Portfolio Composition",
  },
  series: [
    {
      type: "donut",
      calloutLabelKey: "asset",
      angleKey: "amount",
      innerRadiusRatio: 0.9,
      innerLabels: [
        {
          text: "Total Investment",
          fontWeight: "bold",
        },
        {
          text: "$100,000",
          spacing: 4,
          fontSize: 48,
          color: "green",
        },
      ],
      innerCircle: {
        fill: "#c9fdc9",
      },
    },
  ],
};

AgCharts.create(options);
