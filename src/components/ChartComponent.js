import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartComponent = ({ activeRow, columns }) => {
  if (!activeRow) return null;

  const chartData = [
    parseInt(activeRow.current_day),
    parseInt(activeRow.yesterday.value),
    parseInt(activeRow.same_week_day)
  ];

  const xAxisCategories = columns.slice(1);

  const options = {
    chart: {
      type: 'line',
      height: 300
    },
    title: {
      text: `График: ${activeRow.indicator}`
    },
    xAxis: {
      categories: xAxisCategories,
      title: {
        text: 'Период'
      }
    },
    yAxis: {
      title: {
        text: activeRow.indicator
      },
      min: 0
    },
    series: [{
      name: activeRow.indicator,
      data: chartData,
      color: '#007bff'
    }],
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    }
  };

  return (
    <div className="table__chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartComponent;