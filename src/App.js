import TableComponent from './components/TableComponent';
import tableData from './data/tableData.json';
import 'normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <TableComponent data={tableData} />
        </div>
      </main>
    </div>
  );
}

export default App;
