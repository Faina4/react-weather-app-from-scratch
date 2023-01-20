
import './App.css';
import Weather from'./Weather';

function App() {
  return (
    <div className="App">
    <div className="container">
          
     <Weather defaultCity="Kyiv" />
    
           <footer>
 This app was coded by FaIna and is on{""}<a href="https://github.com/Faina4/react-weather-app-from-scratch-hw5" 
 rel="noreferrer" target="_blank"> GitHub </a>{""} and {""}
 hosted on <a href="https://relaxed-pika-1f6901.netlify.app" target="_blank"  rel="noopener noreferrer" > Netlify</a>

     
           </footer>
       </div>
       </div>
  );
}

export default App;
