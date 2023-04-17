// import logo from './logo.svg';
import './App.css';
import { AllReviews } from './components/AllReviews';
import { Header } from './components/Header';
import { ReviewBox } from './components/ReviewBox';

function App() {
  return (
    <div className="App">
      <Header />
      <AllReviews />
    </div>
  );
}

export default App;
