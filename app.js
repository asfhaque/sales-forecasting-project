// Sales Forecasting Dashboard JavaScript
// Like building with LEGO blocks - each function does one specific job!

// Our data - think of this as our treasure chest of information
const dashboardData = {
  historical_sales: [
    {"date": "2022-01-01", "sales": 1260, "month": "January", "year": 2022},
    {"date": "2022-02-01", "sales": 1185, "month": "February", "year": 2022},
    {"date": "2022-03-01", "sales": 1298, "month": "March", "year": 2022},
    {"date": "2022-04-01", "sales": 1342, "month": "April", "year": 2022},
    {"date": "2022-05-01", "sales": 1389, "month": "May", "year": 2022},
    {"date": "2022-06-01", "sales": 1425, "month": "June", "year": 2022},
    {"date": "2022-07-01", "sales": 1456, "month": "July", "year": 2022},
    {"date": "2022-08-01", "sales": 1398, "month": "August", "year": 2022},
    {"date": "2022-09-01", "sales": 1367, "month": "September", "year": 2022},
    {"date": "2022-10-01", "sales": 1423, "month": "October", "year": 2022},
    {"date": "2022-11-01", "sales": 1598, "month": "November", "year": 2022},
    {"date": "2022-12-01", "sales": 1687, "month": "December", "year": 2022},
    {"date": "2023-01-01", "sales": 1298, "month": "January", "year": 2023},
    {"date": "2023-02-01", "sales": 1234, "month": "February", "year": 2023},
    {"date": "2023-03-01", "sales": 1356, "month": "March", "year": 2023},
    {"date": "2023-04-01", "sales": 1412, "month": "April", "year": 2023},
    {"date": "2023-05-01", "sales": 1467, "month": "May", "year": 2023},
    {"date": "2023-06-01", "sales": 1523, "month": "June", "year": 2023},
    {"date": "2023-07-01", "sales": 1578, "month": "July", "year": 2023},
    {"date": "2023-08-01", "sales": 1489, "month": "August", "year": 2023},
    {"date": "2023-09-01", "sales": 1445, "month": "September", "year": 2023},
    {"date": "2023-10-01", "sales": 1512, "month": "October", "year": 2023},
    {"date": "2023-11-01", "sales": 1698, "month": "November", "year": 2023},
    {"date": "2023-12-01", "sales": 1789, "month": "December", "year": 2023},
    {"date": "2024-01-01", "sales": 1367, "month": "January", "year": 2024},
    {"date": "2024-02-01", "sales": 1289, "month": "February", "year": 2024},
    {"date": "2024-03-01", "sales": 1423, "month": "March", "year": 2024},
    {"date": "2024-04-01", "sales": 1489, "month": "April", "year": 2024},
    {"date": "2024-05-01", "sales": 1556, "month": "May", "year": 2024},
    {"date": "2024-06-01", "sales": 1623, "month": "June", "year": 2024},
    {"date": "2024-07-01", "sales": 1689, "month": "July", "year": 2024},
    {"date": "2024-08-01", "sales": 1598, "month": "August", "year": 2024},
    {"date": "2024-09-01", "sales": 1534, "month": "September", "year": 2024},
    {"date": "2024-10-01", "sales": 1612, "month": "October", "year": 2024},
    {"date": "2024-11-01", "sales": 1798, "month": "November", "year": 2024},
    {"date": "2024-12-01", "sales": 1889, "month": "December", "year": 2024}
  ],
  model_performance: [
    {"model": "Linear Regression", "train_mae": 78.18, "test_mae": 86.37, "test_rmse": 109.78, "test_r2": 0.895},
    {"model": "Random Forest", "train_mae": 35.31, "test_mae": 129.77, "test_rmse": 179.57, "test_r2": 0.720}
  ],
  sales_forecast: [
    {"date": "2025-01-01", "predicted_sales": 1894},
    {"date": "2025-01-02", "predicted_sales": 1949},
    {"date": "2025-01-03", "predicted_sales": 1938},
    {"date": "2025-01-04", "predicted_sales": 1941},
    {"date": "2025-01-05", "predicted_sales": 1940},
    {"date": "2025-01-06", "predicted_sales": 1940},
    {"date": "2025-01-07", "predicted_sales": 1940},
    {"date": "2025-01-08", "predicted_sales": 1940},
    {"date": "2025-01-09", "predicted_sales": 1940},
    {"date": "2025-01-10", "predicted_sales": 1940},
    {"date": "2025-01-11", "predicted_sales": 1940},
    {"date": "2025-01-12", "predicted_sales": 1940},
    {"date": "2025-01-13", "predicted_sales": 1940},
    {"date": "2025-01-14", "predicted_sales": 1940},
    {"date": "2025-01-15", "predicted_sales": 1940},
    {"date": "2025-01-16", "predicted_sales": 1940},
    {"date": "2025-01-17", "predicted_sales": 1940},
    {"date": "2025-01-18", "predicted_sales": 1940},
    {"date": "2025-01-19", "predicted_sales": 1940},
    {"date": "2025-01-20", "predicted_sales": 1940},
    {"date": "2025-01-21", "predicted_sales": 1940},
    {"date": "2025-01-22", "predicted_sales": 1940},
    {"date": "2025-01-23", "predicted_sales": 1940},
    {"date": "2025-01-24", "predicted_sales": 1940},
    {"date": "2025-01-25", "predicted_sales": 1940},
    {"date": "2025-01-26", "predicted_sales": 1940},
    {"date": "2025-01-27", "predicted_sales": 1940},
    {"date": "2025-01-28", "predicted_sales": 1940},
    {"date": "2025-01-29", "predicted_sales": 1940},
    {"date": "2025-01-30", "predicted_sales": 1940}
  ],
  test_predictions: [
    {"date": "2024-07-01", "actual": 1689, "predicted": 1645},
    {"date": "2024-08-01", "actual": 1598, "predicted": 1612},
    {"date": "2024-09-01", "actual": 1534, "predicted": 1578},
    {"date": "2024-10-01", "actual": 1612, "predicted": 1589},
    {"date": "2024-11-01", "actual": 1798, "predicted": 1723},
    {"date": "2024-12-01", "actual": 1889, "predicted": 1834}
  ]
};

// Chart color palette - like choosing colors for our drawings!
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Global variables to store our charts
let charts = {};
let isInitialized = false;

// Wait for the page to load completely - like waiting for all toys to be ready before playing!
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Dashboard loading...');
    
    // Initialize everything immediately without loading overlay
    initializeTabs();
    populateTables();
    setupEventListeners();
    
    // Initialize charts after a short delay to ensure DOM is ready
    setTimeout(() => {
        initializeCharts();
        isInitialized = true;
        console.log('✅ Dashboard loaded successfully!');
    }, 100);
});

// Show loading animation - only for specific actions like download
function showLoading() {
    document.getElementById('loadingOverlay').classList.remove('hidden');
}

// Hide loading animation
function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hidden');
}

// Tab switching functionality - like flipping through pages in a book!
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Refresh charts when switching tabs (fixes sizing issues)
            if (isInitialized) {
                setTimeout(() => {
                    Object.values(charts).forEach(chart => {
                        if (chart && typeof chart.resize === 'function') {
                            chart.resize();
                        }
                    });
                }, 100);
            }
        });
    });
}

// Initialize all charts - like setting up different types of art stations!
function initializeCharts() {
    try {
        createHistoricalChart();
        createMonthlyChart();
        createModelChart();
        createForecastChart();
        createValidationChart();
    } catch (error) {
        console.error('Error initializing charts:', error);
    }
}

// Historical sales trend chart - shows how sales changed over time
function createHistoricalChart() {
    const canvas = document.getElementById('historicalChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const labels = dashboardData.historical_sales.map(item => {
        const date = new Date(item.date);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    });
    
    const data = dashboardData.historical_sales.map(item => item.sales);
    
    charts.historical = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Sales ($)',
                data: data,
                borderColor: chartColors[0],
                backgroundColor: chartColors[0] + '20',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return `Sales: $${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Monthly pattern chart - shows which months are typically best/worst
function createMonthlyChart() {
    const canvas = document.getElementById('monthlyChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Calculate average sales by month
    const monthlyData = {};
    dashboardData.historical_sales.forEach(item => {
        if (!monthlyData[item.month]) {
            monthlyData[item.month] = [];
        }
        monthlyData[item.month].push(item.sales);
    });
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    
    const avgSales = months.map(month => {
        const sales = monthlyData[month] || [];
        return sales.length > 0 ? sales.reduce((a, b) => a + b, 0) / sales.length : 0;
    });
    
    charts.monthly = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Average Monthly Sales ($)',
                data: avgSales,
                backgroundColor: chartColors.slice(0, 12),
                borderColor: chartColors.slice(0, 12),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Avg Sales: $${Math.round(context.parsed.y).toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Model performance comparison chart
function createModelChart() {
    const canvas = document.getElementById('modelChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const models = dashboardData.model_performance.map(item => item.model);
    const r2Scores = dashboardData.model_performance.map(item => item.test_r2 * 100); // Convert to percentage
    const maes = dashboardData.model_performance.map(item => item.test_mae);
    
    charts.model = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: models,
            datasets: [
                {
                    label: 'R² Score (%)',
                    data: r2Scores,
                    backgroundColor: chartColors[0],
                    borderColor: chartColors[0],
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Test MAE',
                    data: maes,
                    backgroundColor: chartColors[1],
                    borderColor: chartColors[1],
                    borderWidth: 1,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            if (context.datasetIndex === 0) {
                                return `R² Score: ${context.parsed.y.toFixed(1)}%`;
                            } else {
                                return `MAE: ${context.parsed.y.toFixed(2)}`;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'R² Score (%)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Mean Absolute Error'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            }
        }
    });
}

// Forecast chart - shows our predictions for the future!
function createForecastChart() {
    const canvas = document.getElementById('forecastChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const labels = dashboardData.sales_forecast.map(item => {
        const date = new Date(item.date);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    
    const data = dashboardData.sales_forecast.map(item => item.predicted_sales);
    
    charts.forecast = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Predicted Sales ($)',
                data: data,
                borderColor: chartColors[2],
                backgroundColor: chartColors[2] + '30',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Predicted: $${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45
                    }
                }
            }
        }
    });
}

// Validation chart - compares our predictions with actual results
function createValidationChart() {
    const canvas = document.getElementById('validationChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const labels = dashboardData.test_predictions.map(item => {
        const date = new Date(item.date);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    });
    
    const actualData = dashboardData.test_predictions.map(item => item.actual);
    const predictedData = dashboardData.test_predictions.map(item => item.predicted);
    
    charts.validation = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Actual Sales',
                    data: actualData,
                    borderColor: chartColors[3],
                    backgroundColor: chartColors[3] + '20',
                    borderWidth: 3,
                    tension: 0.4
                },
                {
                    label: 'Predicted Sales',
                    data: predictedData,
                    borderColor: chartColors[4],
                    backgroundColor: chartColors[4] + '20',
                    borderWidth: 3,
                    borderDash: [5, 5],
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Populate all data tables
function populateTables() {
    populateStatsTable();
    populateModelMetricsTable();
    populateForecastTable();
    populateDataTable();
}

// Statistics table for historical analysis
function populateStatsTable() {
    const sales = dashboardData.historical_sales.map(item => item.sales);
    const min = Math.min(...sales);
    const max = Math.max(...sales);
    const mean = sales.reduce((a, b) => a + b, 0) / sales.length;
    const std = Math.sqrt(sales.reduce((a, x) => a + Math.pow(x - mean, 2), 0) / sales.length);
    
    const stats = [
        { metric: 'Minimum Sales', value: `$${min.toLocaleString()}`, description: 'Lowest monthly sales recorded' },
        { metric: 'Maximum Sales', value: `$${max.toLocaleString()}`, description: 'Highest monthly sales recorded' },
        { metric: 'Average Sales', value: `$${Math.round(mean).toLocaleString()}`, description: 'Mean monthly sales over all periods' },
        { metric: 'Standard Deviation', value: `$${Math.round(std).toLocaleString()}`, description: 'Measure of sales variability' }
    ];
    
    const tbody = document.querySelector('#statsTable tbody');
    if (tbody) {
        tbody.innerHTML = stats.map(stat => 
            `<tr>
                <td><strong>${stat.metric}</strong></td>
                <td>${stat.value}</td>
                <td>${stat.description}</td>
            </tr>`
        ).join('');
    }
}

// Model metrics table
function populateModelMetricsTable() {
    const tbody = document.querySelector('#modelMetricsTable tbody');
    if (tbody) {
        tbody.innerHTML = dashboardData.model_performance.map(model => 
            `<tr>
                <td><strong>${model.model}</strong></td>
                <td>${model.train_mae.toFixed(2)}</td>
                <td>${model.test_mae.toFixed(2)}</td>
                <td>${model.test_rmse.toFixed(2)}</td>
                <td>${(model.test_r2 * 100).toFixed(1)}%</td>
            </tr>`
        ).join('');
    }
}

// Forecast summary table
function populateForecastTable() {
    const tbody = document.querySelector('#forecastTable tbody');
    if (tbody) {
        tbody.innerHTML = dashboardData.sales_forecast.map(forecast => {
            const date = new Date(forecast.date);
            const formattedDate = date.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
            });
            return `<tr>
                <td>${formattedDate}</td>
                <td>$${forecast.predicted_sales.toLocaleString()}</td>
                <td><span class="status status--success">High (85%)</span></td>
            </tr>`;
        }).join('');
    }
}

// Data explorer table
function populateDataTable() {
    const tbody = document.querySelector('#dataTable tbody');
    if (tbody) {
        tbody.innerHTML = dashboardData.historical_sales.map(item => {
            const quarter = Math.ceil(new Date(item.date).getMonth() / 3);
            const performance = item.sales > 1500 ? 'High' : item.sales > 1300 ? 'Medium' : 'Low';
            const statusClass = performance === 'High' ? 'status--success' : 
                               performance === 'Medium' ? 'status--warning' : 'status--error';
            
            return `<tr>
                <td>${new Date(item.date).toLocaleDateString('en-US')}</td>
                <td>$${item.sales.toLocaleString()}</td>
                <td>${item.month}</td>
                <td>${item.year}</td>
                <td><span class="status ${statusClass}">${performance}</span></td>
            </tr>`;
        }).join('');
    }
}

// Setup event listeners for interactive features
function setupEventListeners() {
    // Year filter for historical analysis
    const yearFilter = document.getElementById('yearFilter');
    if (yearFilter) {
        yearFilter.addEventListener('change', function() {
            const selectedYear = this.value;
            updateHistoricalChart(selectedYear);
        });
    }
    
    // Data search functionality
    const dataSearch = document.getElementById('dataSearch');
    if (dataSearch) {
        dataSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterDataTable(searchTerm);
        });
    }
    
    // Sort functionality
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        sortBy.addEventListener('change', function() {
            const sortValue = this.value;
            sortDataTable(sortValue);
        });
    }
    
    // Download button (simulated)
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            simulateDownload();
        });
    }
}

// Update historical chart based on year filter
function updateHistoricalChart(year) {
    if (!charts.historical) return;
    
    let filteredData = dashboardData.historical_sales;
    
    if (year !== 'all') {
        filteredData = dashboardData.historical_sales.filter(item => item.year.toString() === year);
    }
    
    const labels = filteredData.map(item => {
        const date = new Date(item.date);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    });
    
    const data = filteredData.map(item => item.sales);
    
    charts.historical.data.labels = labels;
    charts.historical.data.datasets[0].data = data;
    charts.historical.update();
}

// Filter data table based on search term
function filterDataTable(searchTerm) {
    const rows = document.querySelectorAll('#dataTable tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Sort data table by different criteria
function sortDataTable(sortBy) {
    const tbody = document.querySelector('#dataTable tbody');
    if (!tbody) return;
    
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
        let aVal, bVal;
        
        switch(sortBy) {
            case 'date':
                aVal = new Date(a.cells[0].textContent);
                bVal = new Date(b.cells[0].textContent);
                break;
            case 'sales':
                aVal = parseInt(a.cells[1].textContent.replace(/[$,]/g, ''));
                bVal = parseInt(b.cells[1].textContent.replace(/[$,]/g, ''));
                break;
            case 'year':
                aVal = parseInt(a.cells[3].textContent);
                bVal = parseInt(b.cells[3].textContent);
                break;
            default:
                return 0;
        }
        
        return sortBy === 'sales' ? bVal - aVal : aVal - bVal; // Descending for sales, ascending for others
    });
    
    // Clear and re-append sorted rows
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

// Simulate data download
function simulateDownload() {
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        alert('📊 Data export completed! In a real application, this would download a CSV file with all the sales data.');
    }, 2000);
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Error handling for charts
window.addEventListener('error', function(e) {
    console.error('Dashboard Error:', e.error);
    hideLoading();
});

// Resize charts when window is resized
window.addEventListener('resize', function() {
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.resize === 'function') {
            chart.resize();
        }
    });
});

console.log('📈 Sales Forecasting Dashboard JavaScript loaded successfully!');