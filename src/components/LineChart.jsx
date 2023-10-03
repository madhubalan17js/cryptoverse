import React from "react"
import { Line } from "react-chartjs-2"
import { Col, Row, Typography } from "antd"
import moment from "moment"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

// const { Title } = Typography

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  console.log(coinHistory)
  const coinPrice = coinHistory?.data?.history.map((coinH) => coinH.price)

  const coinTimestamp = coinHistory?.data?.history.map((coinH) =>
    new Date(coinH.timestamp).toLocaleDateString()
  )
  console.log(coinTimestamp)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: true,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
        // Use 'linear' scale for the y-axis
      ],
    },
    maintainAspectRatio: false, // Disable aspect ratio to make the chart responsive
    responsive: true,
  }

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {coinName}
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            {coinHistory?.data?.change}
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            Current {coinName} Price:${currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart
