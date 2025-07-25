
import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings('ignore')

# Set page configuration
st.set_page_config(
    page_title="Sales Forecasting Dashboard",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for better styling
st.markdown("""
<style>
.main-header {
    font-size: 3rem;
    color: #1f77b4;
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}
.metric-card {
    background-color: #f0f2f6;
    padding: 1rem;
    border-radius: 10px;
    border-left: 5px solid #1f77b4;
    margin-bottom: 1rem;
}
.sidebar-content {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 10px;
}
</style>
""", unsafe_allow_html=True)

@st.cache_data
def load_data():
    """Load all necessary data files"""
    try:
        sales_data = pd.read_csv('sales_data.csv')
        sales_data['Date'] = pd.to_datetime(sales_data['Date'])

        model_performance = pd.read_csv('model_performance.csv')

        sales_forecast = pd.read_csv('sales_forecast.csv')
        sales_forecast['Date'] = pd.to_datetime(sales_forecast['Date'])

        test_predictions = pd.read_csv('test_predictions.csv')
        test_predictions['Date'] = pd.to_datetime(test_predictions['Date'])

        return sales_data, model_performance, sales_forecast, test_predictions
    except FileNotFoundError as e:
        st.error(f"Data file not found: {e}")
        return None, None, None, None

def create_historical_trend_chart(sales_data):
    """Create historical sales trend chart"""
    fig = px.line(
        sales_data, 
        x='Date', 
        y='Sales',
        title="📈 Historical Sales Trend",
        labels={'Sales': 'Sales ($)', 'Date': 'Date'}
    )
    fig.update_layout(
        title_font_size=20,
        showlegend=False,
        height=400,
        hovermode='x unified'
    )
    fig.update_traces(line_color='#1f77b4', line_width=2)
    return fig

def create_model_performance_chart(model_performance):
    """Create model performance comparison chart"""
    fig = px.bar(
        model_performance,
        x='Model',
        y='Test MAE',
        title="🎯 Model Performance Comparison (Lower is Better)",
        labels={'Test MAE': 'Test MAE ($)', 'Model': 'Model Type'},
        color='Test MAE',
        color_continuous_scale='RdYlBu_r'
    )
    fig.update_layout(
        title_font_size=20,
        height=400,
        showlegend=False
    )
    return fig

def create_actual_vs_predicted_chart(test_predictions):
    """Create actual vs predicted sales chart"""
    fig = go.Figure()

    fig.add_trace(go.Scatter(
        x=test_predictions['Date'],
        y=test_predictions['Sales'],
        mode='lines',
        name='Actual Sales',
        line=dict(color='#2ca02c', width=3)
    ))

    fig.add_trace(go.Scatter(
        x=test_predictions['Date'],
        y=test_predictions['Predicted_Sales'],
        mode='lines',
        name='Predicted Sales',
        line=dict(color='#ff7f0e', width=3, dash='dash')
    ))

    fig.update_layout(
        title="🔍 Actual vs Predicted Sales (Test Period)",
        title_font_size=20,
        xaxis_title="Date",
        yaxis_title="Sales ($)",
        height=400,
        hovermode='x unified',
        legend=dict(
            orientation="h",
            yanchor="bottom",
            y=1.02,
            xanchor="right",
            x=1
        )
    )
    return fig

def create_forecast_chart(sales_forecast):
    """Create future sales forecast chart"""
    fig = px.line(
        sales_forecast,
        x='Date',
        y='Predicted_Sales',
        title="🔮 30-Day Sales Forecast",
        labels={'Predicted_Sales': 'Predicted Sales ($)', 'Date': 'Date'}
    )
    fig.update_traces(line_color='#d62728', line_width=3)
    fig.update_layout(
        title_font_size=20,
        showlegend=False,
        height=400,
        hovermode='x unified'
    )
    return fig

def create_monthly_analysis_chart(sales_data):
    """Create monthly sales analysis chart"""
    monthly_data = sales_data.groupby('Month_Name')['Sales'].agg(['mean', 'std']).reset_index()
    monthly_data['Month_Order'] = monthly_data['Month_Name'].map({
        'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
        'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
    })
    monthly_data = monthly_data.sort_values('Month_Order')

    fig = px.bar(
        monthly_data,
        x='Month_Name',
        y='mean',
        title="📅 Average Sales by Month",
        labels={'mean': 'Average Sales ($)', 'Month_Name': 'Month'},
        color='mean',
        color_continuous_scale='viridis'
    )
    fig.update_layout(
        title_font_size=20,
        height=400,
        showlegend=False
    )
    return fig

def display_key_metrics(sales_data, model_performance, sales_forecast):
    """Display key performance metrics"""
    col1, col2, col3, col4 = st.columns(4)

    with col1:
        total_sales = sales_data['Sales'].sum()
        st.metric(
            label="💰 Total Historical Sales",
            value=f"${total_sales:,.0f}",
            delta=f"{len(sales_data)} days"
        )

    with col2:
        avg_daily_sales = sales_data['Sales'].mean()
        st.metric(
            label="📊 Average Daily Sales",
            value=f"${avg_daily_sales:.0f}",
            delta=f"±${sales_data['Sales'].std():.0f}"
        )

    with col3:
        best_model = model_performance.loc[model_performance['Test MAE'].idxmin(), 'Model']
        best_mae = model_performance['Test MAE'].min()
        st.metric(
            label="🏆 Best Model",
            value=best_model,
            delta=f"MAE: ${best_mae:.0f}"
        )

    with col4:
        forecast_avg = sales_forecast['Predicted_Sales'].mean()
        st.metric(
            label="🔮 30-Day Forecast Avg",
            value=f"${forecast_avg:.0f}",
            delta="Next month"
        )

def main():
    """Main dashboard function"""
    # Header
    st.markdown('<h1 class="main-header">📊 Sales Forecasting Dashboard</h1>', unsafe_allow_html=True)
    st.markdown("---")

    # Load data
    sales_data, model_performance, sales_forecast, test_predictions = load_data()

    if sales_data is None:
        st.error("Unable to load data files. Please ensure all CSV files are present.")
        return

    # Sidebar filters
    st.sidebar.markdown('<div class="sidebar-content">', unsafe_allow_html=True)
    st.sidebar.header("🔧 Dashboard Controls")

    # Date range filter
    min_date = sales_data['Date'].min().date()
    max_date = sales_data['Date'].max().date()

    date_range = st.sidebar.date_input(
        "Select Date Range for Historical Data",
        value=(min_date, max_date),
        min_value=min_date,
        max_value=max_date
    )

    # Filter data based on date range
    if len(date_range) == 2:
        filtered_data = sales_data[
            (sales_data['Date'].dt.date >= date_range[0]) & 
            (sales_data['Date'].dt.date <= date_range[1])
        ]
    else:
        filtered_data = sales_data

    # Chart selection
    chart_options = st.sidebar.multiselect(
        "Select Charts to Display",
        ["Historical Trend", "Model Performance", "Actual vs Predicted", "Forecast", "Monthly Analysis"],
        default=["Historical Trend", "Model Performance", "Actual vs Predicted", "Forecast", "Monthly Analysis"]
    )

    st.sidebar.markdown('</div>', unsafe_allow_html=True)

    # Key metrics
    st.header("📈 Key Performance Indicators")
    display_key_metrics(filtered_data, model_performance, sales_forecast)
    st.markdown("---")

    # Charts section
    st.header("📊 Analytics & Forecasting")

    # Create chart layout
    if "Historical Trend" in chart_options and "Model Performance" in chart_options:
        col1, col2 = st.columns(2)
        with col1:
            st.plotly_chart(create_historical_trend_chart(filtered_data), use_container_width=True)
        with col2:
            st.plotly_chart(create_model_performance_chart(model_performance), use_container_width=True)

    if "Actual vs Predicted" in chart_options:
        st.plotly_chart(create_actual_vs_predicted_chart(test_predictions), use_container_width=True)

    if "Forecast" in chart_options and "Monthly Analysis" in chart_options:
        col1, col2 = st.columns(2)
        with col1:
            st.plotly_chart(create_forecast_chart(sales_forecast), use_container_width=True)
        with col2:
            st.plotly_chart(create_monthly_analysis_chart(filtered_data), use_container_width=True)

    # Data tables section
    st.markdown("---")
    st.header("📋 Data Tables")

    tab1, tab2, tab3, tab4 = st.tabs(["📊 Historical Data", "🎯 Model Performance", "🔮 Forecast Data", "🔍 Test Results"])

    with tab1:
        st.subheader("Historical Sales Data")
        st.dataframe(filtered_data[['Date', 'Sales', 'Day_Name', 'Month_Name', 'Year']].tail(20), use_container_width=True)

    with tab2:
        st.subheader("Model Performance Comparison")
        st.dataframe(model_performance, use_container_width=True)

    with tab3:
        st.subheader("30-Day Sales Forecast")
        st.dataframe(sales_forecast, use_container_width=True)

    with tab4:
        st.subheader("Test Period: Actual vs Predicted")
        test_display = test_predictions.copy()
        test_display['Accuracy'] = (1 - abs(test_display['Sales'] - test_display['Predicted_Sales']) / test_display['Sales']) * 100
        st.dataframe(test_display.round(2), use_container_width=True)

    # Footer
    st.markdown("---")
    st.markdown("""
    <div style='text-align: center; color: #666; padding: 20px;'>
        <p>🚀 <strong>Sales Forecasting Dashboard</strong> | Built with Python, Streamlit & Machine Learning</p>
        <p>📈 Powered by Linear Regression & Random Forest Models | Real-time Analytics & Predictions</p>
    </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()
