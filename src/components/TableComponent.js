import React, { useState } from 'react';
import '../styles/Table.css';
import ChartComponent from './ChartComponent';

const TableComponent = ({ data }) => {
  const { columns, data: tableData } = data.table;
  const [activeRowIndex, setActiveRowIndex] = useState(null);

  const handleRowClick = (index) => {
    if (activeRowIndex === index) {
      setActiveRowIndex(null);
    } else {
      setActiveRowIndex(index);
    }
  };

  const getPercentColor = (percent) => {
    if (percent.startsWith('-')) {
      return { color: '#e74c3c' };
    } else if (percent === '0%') {
      return { color: '#666' };
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
          <React.Fragment key={index}>
            <tr 
              className={`table__row ${activeRowIndex === index ? 'table__row--active' : ''}`}
              onClick={() => handleRowClick(index)}
            >
              <td className="table__name">{row.indicator}</td>
              
              <td className="table__item">
                <span className="table__value">
                  {parseInt(row.current_day).toLocaleString('ru-RU')}
                </span>
              </td>
              
              <td className="table__item">
                <span className="table__value">
                  {parseInt(row.yesterday.value).toLocaleString('ru-RU')}
                </span>
                <span 
                  className="table__percent" 
                  style={getPercentColor(row.yesterday.percent)}
                >
                  {row.yesterday.percent}
                </span>
              </td>
              
              <td className="table__item">
                <span className="table__value">
                  {parseInt(row.same_week_day).toLocaleString('ru-RU')}
                </span>
              </td>
            </tr>

            {activeRowIndex === index && (
              <tr className="table__chart-row">
                <td colSpan="4">
                  <ChartComponent 
                    activeRow={row} 
                    columns={columns} 
                  />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;