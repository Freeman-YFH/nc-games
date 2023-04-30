import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AllReviews } from './components/AllReviews';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { SingleReview } from './components/SingleReview';
import { useState } from 'react';
import { FilterReview } from './components/FilterReview';
import { ErrorPage } from './components/ErrorPage';

function App() {

  const [username, setUsername] = useState();
  const [sortByValue, setSortByValue] = useState("");

  return (
    <div className="App">
      <Header username={username} />
      <Routes>
        <Route path='/' element={<Login username={username} setUsername={setUsername} />} />
        <Route path='/reviews' element={<AllReviews sortByValue={sortByValue} setSortByValue={setSortByValue} />} />
        <Route path='/reviews/:review_id' element={<SingleReview username={username} />} />
        <Route path='/reviews/categories' element={<AllReviews sortByValue={sortByValue} setSortByValue={setSortByValue} />} />
        <Route path='/reviews/categories/:categories' element={<FilterReview sortByValue={sortByValue} setSortByValue={setSortByValue} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
