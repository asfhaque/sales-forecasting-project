# 📊 Sales Forecasting Dashboard

## Project Overview
This is a comprehensive sales forecasting dashboard built with Python, Streamlit, and machine learning. It demonstrates end-to-end data analysis and forecasting capabilities suitable for a data analyst portfolio.

## Features
- 📈 Interactive historical sales visualization
- 🎯 Machine learning model comparison (Linear Regression vs Random Forest)
- 🔍 Actual vs predicted sales analysis
- 🔮 30-day sales forecasting
- 📅 Monthly sales pattern analysis
- 📊 Real-time filtering and data exploration

## Technologies Used
- **Python**: Core programming language
- **Streamlit**: Web application framework
- **Pandas**: Data manipulation and analysis
- **Plotly**: Interactive visualizations
- **Scikit-learn**: Machine learning models
- **NumPy**: Numerical computations

## How to Run the Dashboard

### Step 1: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 2: Run the Dashboard
```bash
streamlit run sales_dashboard.py
```

### Step 3: Open in Browser
The dashboard will automatically open in your default browser at `http://localhost:8501`

## Project Structure
```
sales-forecasting-dashboard/
│
├── sales_dashboard.py          # Main dashboard application
├── sales_data.csv             # Historical sales data
├── model_performance.csv      # Model comparison results
├── sales_forecast.csv         # 30-day forecast predictions
├── test_predictions.csv       # Test set results
├── requirements.txt           # Python dependencies
└── README.md                  # This file
```

## Machine Learning Models
1. **Linear Regression**: Best performing model with MAE of $86.37
2. **Random Forest**: Alternative model for comparison

## Key Insights from the Project
- Implemented time series forecasting with lag features and moving averages
- Achieved 89.5% R² score on test data with Linear Regression
- Created seasonal features to capture monthly and weekly patterns
- Built interactive dashboard with real-time filtering capabilities

## Resume Highlights
- **Data Engineering**: Created comprehensive feature engineering pipeline with lag features, moving averages, and seasonal components
- **Machine Learning**: Implemented and compared multiple ML models for sales forecasting
- **Data Visualization**: Built interactive dashboard with 5+ visualization types
- **Business Intelligence**: Delivered actionable insights through KPI tracking and forecasting
- **Technical Skills**: Python, Pandas, Scikit-learn, Streamlit, Plotly

## Future Enhancements
- Add ARIMA and LSTM models for comparison
- Implement anomaly detection for unusual sales patterns
- Add confidence intervals for forecasts
- Include external factors (holidays, promotions, weather)
- Deploy to cloud platform (Heroku, AWS, or Streamlit Cloud)

---
**Created by**: [Your Name]  
**Contact**: [Your Email]  
**LinkedIn**: [Your LinkedIn Profile]
