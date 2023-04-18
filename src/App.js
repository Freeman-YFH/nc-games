// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AllReviews } from './components/AllReviews';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { SingleReview } from './components/SingleReview';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/allReviews' element={<AllReviews />} />
        <Route path='/allReviews/:review_id' element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
