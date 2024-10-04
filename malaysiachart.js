//Malaysia Climate Data
let climateData = [];

// 使用 PapaParse 解析 CSV 文件
Papa.parse('Data/Malaysia Climate Data.csv', {
    download: true,
    header: true,
    complete: function(results) {
        climateData = results.data;

        // 移除人口数据中的逗号并将其转换为数字
        climateData.forEach(data => {
            data.Population = parseFloat(data.Population.replace(/,/g, ''));
            data.SeaLevel = data.SeaLevel ? parseFloat(data.SeaLevel) : null; 
            data.CO2Emission = parseFloat(data.CO2Emission.replace(/,/g, ''));
            data.Temperature = parseFloat(data.Temperature);
            data.maxTemperature = parseFloat(data.maxTemperature);
            data.minTemperature = parseFloat(data.minTemperature);
        });

        // 创建初始图表
        const ctx = document.getElementById('bar-chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: climateData.map(data => data.Year).reverse(),
                datasets: [{
                    label: 'Population',
                    data: climateData.map(data => data.Population).reverse(),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // 添加事件监听器用于Y轴数据切换
        document.getElementById('y-axis-select').addEventListener('change', function() {
            const selectedOption = this.value;
            let selectedData;

            switch (selectedOption) {
                case 'Population':
                    selectedData = climateData.map(data => data.Population).reverse() ;
                    break;
                case 'Sea Level':
                    selectedData = climateData.map(data => data.SeaLevel).reverse();
                    break;
                case 'CO2 Emission(Tons)':
                    selectedData = climateData.map(data => data.CO2Emission).reverse();
                    break;
                case 'Temperature':
                    selectedData = climateData.map(data => data.Temperature).reverse();
                    break;
                case 'Max Temperature':
                    selectedData = climateData.map(data => data.maxTemperature).reverse();
                    break;
                case 'Min Temperature':
                    selectedData = climateData.map(data => data.minTemperature).reverse();
                    break;
            }

            // 更新图表
            chart.data.datasets[0].label = selectedOption;
            chart.data.datasets[0].data = selectedData;
            chart.update();
        });
    }
});




// Temperature Source Data
Papa.parse('Data/Temperature Source.csv', {
    download: true, 
    header: true, 
    complete: function(results) {

        const temperatureData = results.data;

        const year_temperature = temperatureData.map(data => data.Year).reverse();
        const avgTemperatures = temperatureData.map(data => data.avgTemperature).reverse();

        const ctx1 = document.getElementById('line-chart-temperature').getContext('2d');

        const lineChart = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: year_temperature,
                datasets: [{
                    label: 'Average Temperature (°C)',
                    data: avgTemperatures,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Average Temperature (°C)'
                        },
                        beginAtZero: false
                    }
                }
            }
        });
    }
});





//Sea Level Source Data
Papa.parse('Data/Sea Level Source Data.csv', {
    download: true, 
    header: true, 
    complete: function(results) {
        const seaLevelData = results.data;

        const year_sealevel = seaLevelData.map(data => data.Year).reverse();
        const avgSeaLevels = seaLevelData.map(data => parseFloat(data.Average)).reverse();

        const ctx2 = document.getElementById('bar-chart-sealevel').getContext('2d');
        const barChart = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: year_sealevel,
                datasets: [{
                    label: 'Average Sea Level (mm)',
                    data: avgSeaLevels,
                    backgroundColor: avgSeaLevels.map(value => value >= 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'),
                    borderColor: avgSeaLevels.map(value => value >= 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Average Sea Level (mm)'
                        },
                        beginAtZero: false
                    }
                }
            }
        });
    }
});



//CO2 Emission SOurce Chart
Papa.parse('Data/CO2 Emmision Source Data.csv', {
    download: true, 
    header: true, 
    complete: function(results) {

        const co2Data = results.data;

        const year_co2Emission = co2Data.map(data => data.Year).reverse();
        const co2Emissions = co2Data.map(data => data.Annual_CO2_Emmision).reverse();

        const ctx3 = document.getElementById('line-chart-co2').getContext('2d');
        const lineChart1 = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: year_co2Emission,
                datasets: [{
                    label: 'Annual CO2 Emissions (Tons)',
                    data: co2Emissions,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0)', 
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointBorderColor: 'rgba(75, 192, 192, 1)'
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Annual CO2 Emissions (Tons)'
                        }
                    }
                }
            }
        });
    }
});


//Population Source Data
Papa.parse('Data/Population Source Data.csv', {
    download: true, 
    header: true, 
    complete: function(results) {

        const populationData = results.data;

        const year_population = populationData.map(data => data.Year);
        const populations = populationData.map(data => data.Population);

        const ctx4 = document.getElementById('bar-chart-population').getContext('2d');
        const barChart1 = new Chart(ctx4, {
            type: 'bar',
            data: {
                labels: year_population,
                datasets: [{
                    label: 'Population (Thousands)',
                    data: populations,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Population (Thousands)'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }
});