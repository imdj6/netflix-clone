import './App.css';
import Banner from './Banner';
import requests from './request';


function App() {
  return (
    <div>
      <h1>Hey i am building netflix clone and this is awesome❤</h1>
      <Banner title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Banner title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
