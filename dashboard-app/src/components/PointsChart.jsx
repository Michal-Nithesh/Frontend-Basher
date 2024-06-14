import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-luxon'; // Import the Luxon adapter
import { DateTime } from 'luxon';

const PointsChart = ({ duration }) => {
    const [dates, setDates] = useState([]);
    const [points, setPoints] = useState([]);
    const token = localStorage.getItem('token');
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        axios.get('https://9g7phc4b-8000.inc1.devtunnels.ms/api/points/', {
            headers: {
                'Authorization': `Token ${token}`,
            },
        })
        .then(response => {
            const { dates, points } = response.data;
            setDates(dates);
            setPoints(points);
            drawChart(dates, points);
        })
        .catch(error => console.error('Error fetching points data:', error));

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [token]);

    useEffect(() => {
        const filteredData = filterDataByDuration(dates, points, duration);
        drawChart(filteredData.dates, filteredData.points);
    }, [dates, points, duration]);

    const filterDataByDuration = (dates, points, duration) => {
        const now = DateTime.now();
        let filteredDates = dates;
        let filteredPoints = points;

        switch (duration) {
            case '7d':
                filteredDates = dates.filter(date => DateTime.fromISO(date) >= now.minus({ days: 7 }));
                filteredPoints = points.slice(points.length - filteredDates.length);
                break;
            case '14d':
                filteredDates = dates.filter(date => DateTime.fromISO(date) >= now.minus({ days: 14 }));
                filteredPoints = points.slice(points.length - filteredDates.length);
                break;
            case '30d':
                filteredDates = dates.filter(date => DateTime.fromISO(date) >= now.minus({ days: 30 }));
                filteredPoints = points.slice(points.length - filteredDates.length);
                break;
            case 'all':
            default:
                break;
        }

        return { dates: filteredDates, points: filteredPoints };
    };

    const drawChart = (dates, points) => {
        const ctx = chartRef.current.getContext('2d');

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Points',
                    data: points,
                    fill: true,
                    borderColor: "#fff",
                    borderWidth: "0",
                    backgroundColor: "#F6B81D",
                    pointColor: "#F6B81D",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "#F6B81D",
                    pointBorderWidth: 3,
                    pointRadius: 8,
                    pointHoverBackgroundColor: "#F6B81D",
                    pointHoverBorderColor: "#fff",
                    pointHoverRadius: 7,
                    lineTension: 0
                }]
            },
            options: {
                legend: !1,
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    },
                    y: {
                        grid: {

                        }
                    }
                }
            }
        });
    };

    return (
        <div className="points-chart">
            <h3>Points Graph</h3>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default PointsChart;
