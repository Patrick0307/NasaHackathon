//Malaysia Climate Data
const climateData = [
    { year: 2020, population: 32447400, seaLevel: null, co2Emission: 291071360, temperature: 25.78, maxTemperature: 34.4, minTemperature: 19.73 },
    { year: 2019, population: 32523000, seaLevel: null, co2Emission: 278861220, temperature: 25.96, maxTemperature: 33.21, minTemperature: 18.72 },
    { year: 2018, population: 32382300, seaLevel: null, co2Emission: 269248670, temperature: 25.54, maxTemperature: 32.65, minTemperature: 18.78 },
    { year: 2017, population: 32022600, seaLevel: null, co2Emission: 267494290, temperature: 25.56, maxTemperature: 33.29, minTemperature: 20.57 },
    { year: 2016, population: 31633500, seaLevel: null, co2Emission: 262207180, temperature: 25.91, maxTemperature: 33.92, minTemperature: 19 },
    { year: 2015, population: 31186100, seaLevel: null, co2Emission: 244105580, temperature: 25.64, maxTemperature: 34.15, minTemperature: 18.07 },
    { year: 2014, population: 30708500, seaLevel: null, co2Emission: 236817360, temperature: 25.58, maxTemperature: 34.02, minTemperature: 17.21 },
    { year: 2013, population: 30213700, seaLevel: null, co2Emission: 235505740, temperature: 25.45, maxTemperature: 33.09, minTemperature: 20.3 },
    { year: 2012, population: 29510000, seaLevel: null, co2Emission: 245049710, temperature: 25.39, maxTemperature: 31.92, minTemperature: 20.02 },
    { year: 2011, population: 29062000, seaLevel: null, co2Emission: 241671090, temperature: 25.15, maxTemperature: 31.4, minTemperature: 19.4 },
    { year: 2010, population: 28588600, seaLevel: null, co2Emission: 212989970, temperature: 25.62, maxTemperature: 33.02, minTemperature: 19.15 },
    { year: 2009, population: 28081500, seaLevel: null, co2Emission: 203452350, temperature: 25.32, maxTemperature: 31.44, minTemperature: 19.07 },
    { year: 2008, population: 27567600, seaLevel: null, co2Emission: 199346100, temperature: 25.13, maxTemperature: 32.74, minTemperature: 18.83 },
    { year: 2007, population: 27058400, seaLevel: null, co2Emission: 192119070, temperature: 25.23, maxTemperature: 31.89, minTemperature: 18.15 },
    { year: 2006, population: 26549900, seaLevel: null, co2Emission: 192847060, temperature: 25.31, maxTemperature: 31.56, minTemperature: 20.28 },
    { year: 2005, population: 26045500, seaLevel: null, co2Emission: 175450780, temperature: 25.4, maxTemperature: 32.26, minTemperature: 17.95 },
    { year: 2004, population: 25541500, seaLevel: null, co2Emission: 170166450, temperature: 25.32, maxTemperature: 33.08, minTemperature: 20.01 },
    { year: 2003, population: 25038100, seaLevel: null, co2Emission: 169967330, temperature: 25.32, maxTemperature: 31.75, minTemperature: 19.62 },
    { year: 2002, population: 24542500, seaLevel: null, co2Emission: 169678300, temperature: 25.41, maxTemperature: 32.33, minTemperature: 18.12 },
    { year: 2001, population: 24030500, seaLevel: null, co2Emission: 153384340, temperature: 25.19, maxTemperature: 31.51, minTemperature: 18.98 },
    { year: 2000, population: 23494900, seaLevel: null, co2Emission: 132035230, temperature: 25.17, maxTemperature: 31.16, minTemperature: 18.38 },
    { year: 1999, population: 22909500, seaLevel: null, co2Emission: 130890050, temperature: 25.09, maxTemperature: 31.47, minTemperature: 18.55 },
    { year: 1998, population: 22333500, seaLevel: null, co2Emission: 122878050, temperature: 25.88, maxTemperature: 35.96, minTemperature: 18.83 },
    { year: 1997, population: 21769300, seaLevel: null, co2Emission: 103986550, temperature: 25.37, maxTemperature: 31.98, minTemperature: 18.76 },
    { year: 1996, population: 21222600, seaLevel: null, co2Emission: 109781690, temperature: 25.09, maxTemperature: 32.33, minTemperature: 17.58 },
    { year: 1995, population: 20681800, seaLevel: null, co2Emission: 119628820, temperature: 25.35, maxTemperature: 34.33, minTemperature: 18.88 },
    { year: 1994, population: 20141700, seaLevel: null, co2Emission: 110632800, temperature: 25.21, maxTemperature: 32.16, minTemperature: 17.95 },
    { year: 1993, population: 19601500, seaLevel: null, co2Emission: 110840970, temperature: 25.23, maxTemperature: 33.54, minTemperature: 18.01 },
    { year: 1992, population: 19067500, seaLevel: null, co2Emission: 88036030, temperature: 25.17, maxTemperature: 34.19, minTemperature: 18.54 },
    { year: 1991, population: 18547200, seaLevel: null, co2Emission: 86718630, temperature: 25.31, maxTemperature: 32.17, minTemperature: 18.56 },
    { year: 1990, population: 18102400, seaLevel: null, co2Emission: 72961016, temperature: 25.38, maxTemperature: 34.73, minTemperature: 18.26 },
    { year: 1989, population: 17662100, seaLevel: null, co2Emission: 65785132, temperature: 25.05, maxTemperature: 32.02, minTemperature: 17.5 },
    { year: 1988, population: 17219100, seaLevel: null, co2Emission: 54269364, temperature: 25.23, maxTemperature: 33.67, minTemperature: 19.1 },
    { year: 1987, population: 16773500, seaLevel: null, co2Emission: 50083868, temperature: 25.26, maxTemperature: 33.65, minTemperature: 18.46 },
    { year: 1986, population: 16329400, seaLevel: null, co2Emission: 42869204, temperature: 24.88, maxTemperature: 31.97, minTemperature: 17.68 },
    { year: 1985, population: 15882700, seaLevel: null, co2Emission: 40877684, temperature: 24.91, maxTemperature: 34.94, minTemperature: 17.58 },
    { year: 1984, population: 15450400, seaLevel: null, co2Emission: 40101890, temperature: 24.68, maxTemperature: 31.51, minTemperature: 18.62 },
    { year: 1983, population: 15048200, seaLevel: null, co2Emission: 36329770, temperature: 25.38, maxTemperature: 35.62, minTemperature: 18.74 },
    { year: 1982, population: 14651100, seaLevel: null, co2Emission: 34794430, temperature: 25.24, maxTemperature: 33.53, minTemperature: 18.94 },
    { year: 1981, population: 14256900, seaLevel: null, co2Emission: 38048304, temperature: 25.18, maxTemperature: 33.4, minTemperature: 18.42 }
];


const ctx = document.getElementById('bar-chart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: climateData.map(data => data.year),
        datasets: [{
            label: 'Population',
            data: climateData.map(data => data.population),
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

document.getElementById('y-axis-select').addEventListener('change', function() {
    const selectedOption = this.value;
    let selectedData;

    switch (selectedOption) {
        case 'Population':
            selectedData = climateData.map(data => data.population);
            break;
        case 'Sea Level':
            selectedData = climateData.map(data => data.seaLevel);
            break;
        case 'CO2 Emission(Tons)':
            selectedData = climateData.map(data => data.co2Emission);
            break;
        case 'Temperature':
            selectedData = climateData.map(data => data.temperature);
            break;
        case 'Max Temperature':
            selectedData = climateData.map(data => data.maxTemperature);
            break;
        case 'Min Temperature':
            selectedData = climateData.map(data => data.minTemperature);
            break;
    }

    chart.data.datasets[0].label = selectedOption;
    chart.data.datasets[0].data = selectedData;
    chart.update();
});




//Temperature Source Data
const temperatureData = [
    { year: 2020, avgTemperature: 26.02618 },
    { year: 2019, avgTemperature: 26.15462 },
    { year: 2018, avgTemperature: 25.858 },
    { year: 2017, avgTemperature: 25.80632 },
    { year: 2016, avgTemperature: 26.29162 },
    { year: 2015, avgTemperature: 25.84272 },
    { year: 2014, avgTemperature: 25.6132 },
    { year: 2013, avgTemperature: 25.65216 },
    { year: 2012, avgTemperature: 25.49662 },
    { year: 2011, avgTemperature: 25.42377 },
    { year: 2010, avgTemperature: 25.7955 },
    { year: 2009, avgTemperature: 25.59062 },
    { year: 2008, avgTemperature: 25.21934 },
    { year: 2007, avgTemperature: 25.4137 },
    { year: 2006, avgTemperature: 25.43164 },
    { year: 2005, avgTemperature: 25.69001 },
    { year: 2004, avgTemperature: 25.53544 },
    { year: 2003, avgTemperature: 25.51162 },
    { year: 2002, avgTemperature: 25.62934 },
    { year: 2001, avgTemperature: 25.36147 },
    { year: 2000, avgTemperature: 25.28583 },
    { year: 1999, avgTemperature: 25.1551 },
    { year: 1998, avgTemperature: 26.01556 },
    { year: 1997, avgTemperature: 25.32573 },
    { year: 1996, avgTemperature: 25.13202 },
    { year: 1995, avgTemperature: 25.23151 },
    { year: 1994, avgTemperature: 25.17777 },
    { year: 1993, avgTemperature: 25.05625 },
    { year: 1992, avgTemperature: 25.10031 },
    { year: 1991, avgTemperature: 25.1295 },
    { year: 1990, avgTemperature: 25.28036 },
    { year: 1989, avgTemperature: 24.91741 },
    { year: 1988, avgTemperature: 25.17084 },
    { year: 1987, avgTemperature: 25.2871 },
    { year: 1986, avgTemperature: 24.92927 },
    { year: 1985, avgTemperature: 24.83881 },
    { year: 1984, avgTemperature: 24.63841 },
    { year: 1983, avgTemperature: 25.40937 },
    { year: 1982, avgTemperature: 25.02456 },
    { year: 1981, avgTemperature: 25.07164 }
];

const ctx1 = document.getElementById('line-chart-temperature').getContext('2d');
const year_temperature = temperatureData.map(data => data.year).reverse();
const avgTemperatures = temperatureData.map(data => data.avgTemperature).reverse();

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



//Sea Level Source Data
const seaLevelData = [
    { year: 2020, avgSeaLevel: 65.9997375 },
    { year: 2019, avgSeaLevel: 60.9807395 },
    { year: 2018, avgSeaLevel: 52.08327225 },
    { year: 2017, avgSeaLevel: 55.11239075 },
    { year: 2016, avgSeaLevel: 56.3307115 },
    { year: 2015, avgSeaLevel: 52.17943 },
    { year: 2014, avgSeaLevel: 49.904703 },
    { year: 2013, avgSeaLevel: 42.02689775 },
    { year: 2012, avgSeaLevel: 42.34162825 },
    { year: 2011, avgSeaLevel: 36.18167175 },
    { year: 2010, avgSeaLevel: 36.197918 },
    { year: 2009, avgSeaLevel: 26.243941 },
    { year: 2008, avgSeaLevel: 20.65443475 },
    { year: 2007, avgSeaLevel: 11.78951825 },
    { year: 2006, avgSeaLevel: 13.90263 },
    { year: 2005, avgSeaLevel: 8.41956975 },
    { year: 2004, avgSeaLevel: 7.02254885 },
    { year: 2003, avgSeaLevel: 5.425704125 },
    { year: 2002, avgSeaLevel: 0.02910589575 },
    { year: 2001, avgSeaLevel: 3.301326575 },
    { year: 2000, avgSeaLevel: -1.819250895 },
    { year: 1999, avgSeaLevel: -1.86897135 },
    { year: 1998, avgSeaLevel: -7.106544675 },
    { year: 1997, avgSeaLevel: -3.327853075 },
    { year: 1996, avgSeaLevel: -9.150141625 },
    { year: 1995, avgSeaLevel: -10.04158725 },
    { year: 1994, avgSeaLevel: -16.72324075 },
    { year: 1993, avgSeaLevel: -20.50724925 },
    { year: 1992, avgSeaLevel: -10.799696 },
    { year: 1991, avgSeaLevel: -11.18199575 },
    { year: 1990, avgSeaLevel: -17.13548025 },
    { year: 1989, avgSeaLevel: -23.72052025 },
    { year: 1988, avgSeaLevel: -24.89981 },
    { year: 1987, avgSeaLevel: -27.315025 },
    { year: 1986, avgSeaLevel: -31.838301 },
    { year: 1985, avgSeaLevel: -34.5516295 },
    { year: 1984, avgSeaLevel: -30.47904675 },
    { year: 1983, avgSeaLevel: -29.44396275 },
    { year: 1982, avgSeaLevel: -29.80352875 },
    { year: 1981, avgSeaLevel: -30.39999575 }
];

const year_sealevel = seaLevelData.map(data => data.year).reverse();
const avgSeaLevels = seaLevelData.map(data => data.avgSeaLevel).reverse();

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



//CO2 Emission SOurce Chart
const co2Data = [
    { year: 2020, co2Emissions: 269248670 },
    { year: 2019, co2Emissions: 267494290 },
    { year: 2018, co2Emissions: 262207180 },
    { year: 2017, co2Emissions: 244105580 },
    { year: 2016, co2Emissions: 236817360 },
    { year: 2015, co2Emissions: 235505740 },
    { year: 2014, co2Emissions: 245049710 },
    { year: 2013, co2Emissions: 241671090 },
    { year: 2012, co2Emissions: 212989970 },
    { year: 2011, co2Emissions: 203452350 },
    { year: 2010, co2Emissions: 199346100 },
    { year: 2009, co2Emissions: 192119070 },
    { year: 2008, co2Emissions: 192847060 },
    { year: 2007, co2Emissions: 175450780 },
    { year: 2006, co2Emissions: 170166450 },
    { year: 2005, co2Emissions: 169967330 },
    { year: 2004, co2Emissions: 169678300 },
    { year: 2003, co2Emissions: 153384340 },
    { year: 2002, co2Emissions: 132035230 },
    { year: 2001, co2Emissions: 130890050 },
    { year: 2000, co2Emissions: 122878050 },
    { year: 1999, co2Emissions: 103986550 },
    { year: 1998, co2Emissions: 109781690 },
    { year: 1997, co2Emissions: 119628820 },
    { year: 1996, co2Emissions: 110632800 },
    { year: 1995, co2Emissions: 110840970 },
    { year: 1994, co2Emissions: 88036030 },
    { year: 1993, co2Emissions: 86718630 },
    { year: 1992, co2Emissions: 72961016 },
    { year: 1991, co2Emissions: 65785132 },
    { year: 1990, co2Emissions: 54269364 },
    { year: 1989, co2Emissions: 50083868 },
    { year: 1988, co2Emissions: 42869204 },
    { year: 1987, co2Emissions: 40877684 },
    { year: 1986, co2Emissions: 40101890 },
    { year: 1985, co2Emissions: 36329770 },
    { year: 1984, co2Emissions: 34794430 },
    { year: 1983, co2Emissions: 38048304 },
    { year: 1982, co2Emissions: 30641940 },
    { year: 1981, co2Emissions: 30877660 }
];

const year_co2Emission = co2Data.map(data => data.year).reverse();
const co2Emissions = co2Data.map(data => data.co2Emissions).reverse();

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


//Population Source Data
const populationData = [
    { year: 2020, population: 259579.1 },
    { year: 2019, population: 260182.9 },
    { year: 2018, population: 259058.2 },
    { year: 2017, population: 256180.9 },
    { year: 2016, population: 253067.9 },
    { year: 2015, population: 249489.7 },
    { year: 2014, population: 245669.2 },
    { year: 2013, population: 241710.3 },
    { year: 2012, population: 236078.1 },
    { year: 2011, population: 232496.4 },
    { year: 2010, population: 228708.3 },
    { year: 2009, population: 224651.8 },
    { year: 2008, population: 220540.6 },
    { year: 2007, population: 216466.7 },
    { year: 2006, population: 212397 },
    { year: 2005, population: 208363.1 },
    { year: 2004, population: 204332.7 },
    { year: 2003, population: 200304.8 },
    { year: 2002, population: 196340.2 },
    { year: 2001, population: 192245.2 },
    { year: 2000, population: 187959.1 },
    { year: 1999, population: 183275.6 },
    { year: 1998, population: 178668.1 },
    { year: 1997, population: 174153.4 },
    { year: 1996, population: 169782.9 },
    { year: 1995, population: 165455.1 },
    { year: 1994, population: 161133.2 },
    { year: 1993, population: 156811.3 },
    { year: 1992, population: 152539.6 },
    { year: 1991, population: 148378.2 },
    { year: 1990, population: 144819.2 },
    { year: 1989, population: 141296.5 },
    { year: 1988, population: 137753.4 },
    { year: 1987, population: 134188.5 },
    { year: 1986, population: 130635.2 },
    { year: 1985, population: 127061.9 },
    { year: 1984, population: 123602.9 },
    { year: 1983, population: 120385.7 },
    { year: 1982, population: 117209.2 },
    { year: 1981, population: 114055.5 }
];

const year_population = populationData.map(data => data.year).reverse();
const populations = populationData.map(data => data.population).reverse();

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