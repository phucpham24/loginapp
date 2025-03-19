
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/tableUser';

function App() {
  return (
    <div className='app-container'> 
    <row>
      <Header/>
      <TableUsers/>
    </row>

    </div>
  );
}

export default App;
