import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AllReviews } from './components/AllReviews';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { SingleReview } from './components/SingleReview';
import { useState } from 'react';
import { FilterReview } from './components/FilterReview';

function App() {

  const [username, setUsername] = useState();

  return (
    <div className="App">
      <Header username={username} />
      <Routes>
        <Route path='/' element={<Login username={username} setUsername={setUsername} />} />
        <Route path='/reviews' element={<AllReviews />} />
        <Route path='/reviews/:review_id' element={<SingleReview username={username} />} />
        <Route path='/reviews/categories' element={<AllReviews />} />
        <Route path='/reviews/categories/:categories' element={<FilterReview />} />
      </Routes>
    </div>
  );
};

export default App;
