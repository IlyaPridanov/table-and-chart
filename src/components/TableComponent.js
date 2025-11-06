import React from 'react';
import '../styles/Table.css';

const TableComponent = ({ data }) => {
  const { columns, data: tableData } = data.table;

  const getPercentColor = (percent) => {
    if (percent.startsWith('-')) {
      return { color: '#e74c3c' };
    } else {
      return { color: '#27ae60' };
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="table__caption">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td className="table__name">{row.indicator}</td>
            
            <td className="table__item">
              <span className="table__value">{row.current_day}</span>
            </td>
            
            <td className="table__item">
              <span className="table__value">{row.yesterday.value}</span>
              <span 
                className="table__percent" 
                style={getPercentColor(row.yesterday.percent)}
              >
                {row.yesterday.percent}
              </span>
            </td>
            
            <td className="table__item">
              <span className="table__value">{row.same_week_day}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;