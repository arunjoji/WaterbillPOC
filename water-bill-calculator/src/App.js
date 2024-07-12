import logo from './logo.svg';
import './App.css';
import Collector from "./components/collector"
import Bill from './components/bill';


function App() {
  return (
    <div className='container'>
      <div className="card text-center">
        <div className="card-header">
          Water Bill calculator
        </div>
       {/* <Collector /> */}
        <Bill/>
      </div>
    </div>
  );
}

export default App;