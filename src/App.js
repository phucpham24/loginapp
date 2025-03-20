
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/tableUser';
import { Bounce, ToastContainer } from 'react-toastify';
import Home from './components/Home';
import { Routes, Route, Link  } from 'react-router-dom';

function App() {

  return (
    <>
        <div className='app-container'> 
          

      <Container>
        <Header/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<TableUsers/>}/>
          </Routes>
      </Container>


    </div>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
    />
    </>

  );
}

export default App;
