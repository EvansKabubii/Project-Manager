import React from 'react';
import './PollSummary.css';

function PollSummary({ pollData }) {
  return (
    <div className="poll-summary-container">
      <h3 className="poll-title">{pollData.name}</h3>
      <div className="poll-bars">
        {pollData.options.map((option, idx) => (
          <div className="poll-bar-row" key={option.label}>
            <span className="poll-label">{option.label}</span>
            <div className="poll-bar-bg">
              <div
                className="poll-bar-fill"
                style={{ width: `${option.percent}%`, background: option.color }}
              ></div>
            </div>
            <span className="poll-percent">{option.percent}%</span>
          </div>
        ))}
      </div>
      <button className="poll-learn-btn">Learn more</button>
    </div>
  );
}

export default PollSummary;
