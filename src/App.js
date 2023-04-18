// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AllReviews } from './components/AllReviews';
import { Header } from './components/Header';
import { ReviewBox } from './components/ReviewBox';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/allReviews' element={<AllReviews />} />
      </Routes>
    </div>
  );
}

export default App;
