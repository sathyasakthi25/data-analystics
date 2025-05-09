// app.js

// Simulate loading data and rendering results
document.addEventListener('DOMContentLoaded', function () {
    const summary = document.getElementById('summary');
    const recommendations = document.getElementById('recommendations');
    const insights = document.getElementById('insights');

    // Example insights and summary
    const dataInsights = [
        "Tourist arrivals peaked in Europe during summer months.",
        "COVID-19 caused a 65% drop in global tourism in 2020.",
        "Top 5 countries accounted for over 40% of global tourist inflow."
    ];

    const shortTermActions = [
        "Promote lesser-known destinations on social media.",
        "Distribute tourist load using smart recommendations."
    ];

    const longTermStrategies = [
        "Build predictive dashboards for travel forecasting.",
        "Implement sustainable travel policies with data backing."
    ];

    const summaryText = `
        This project analyzes tourism data from 2014 to 2020, providing actionable insights
        for improving travel industry strategies. It focuses on over-tourism, demand forecasting,
        and sustainable planning using Python and visualization tools.
    `;

    summary.innerText = summaryText;

    dataInsights.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        insights.appendChild(li);
    });

    shortTermActions.forEach(action => {
        const li = document.createElement('li');
        li.textContent = "Short-Term: " + action;
        recommendations.appendChild(li);
    });

    longTermStrategies.forEach(action => {
        const li = document.createElement('li');
        li.textContent = "Long-Term: " + action;
        recommendations.appendChild(li);
    });
});
