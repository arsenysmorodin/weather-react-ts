/* eslint-disable react-refresh/only-export-components */
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ChartDataLabels
)

export const plugins = [ChartDataLabels]

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
            radius: 0,
        },
        line: {
            tension: 0.5,
            borderWidth: 5,
        },
    },
    layout: {
        padding: 20,
    },
    scales: {
        yAxis: {
            display: false,
            grid: {
                color: '#C0D6DF',
            },
            border: {
                color: '#C0D6DF',
            },
        },
        xAxis: {
            display: true,
            grid: {
                color: '#C0D6DF',
            },
            border: {
                color: '#C0D6DF',
            },
        },
    },
}

const labels = ['12:00', '15:00', '18:00', '21:00', '00:00', '3:00', '6:00']

export const data = {
    labels,
    datasets: [
        {
            data: [25, 27, 28, 26, 20, 18, 19],
            borderColor: '#4F6D7A',
            backgroundColor: '#4F6D7A',
            yAxisID: 'yAxis',
            xAxisID: 'xAxis',
            datalabels: {
                color: '#DBE9EE',
                backgroundColor: '#4F6D7A',
                borderRadius: 6,
                font: {
                    size: 12,
                },
                padding: 6,
            },
        },
    ],
}

export default function Forecast() {
    return (
        <div className="card card_forecast">
            <span className="card__label">Forecast</span>
            <div className="card__button-container">
                <button className="card__button card__button_active">
                    24 hours
                </button>
                <button className="card__button">5 days</button>
            </div>
            <div className="card__chart-wrp">
                <Line
                    className="card__chart"
                    plugins={plugins}
                    options={options}
                    data={data}
                />
            </div>
        </div>
    )
}
