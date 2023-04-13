import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieInfo from './components/MovieInfo';
import { Navigate, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import MovieEpisodes from './components/MovieEpisodes';
import MovieList from './components/MovieList';

function App() {

  return (
    <div className="App"> 
    <Header />
    <Routes>
      <Route path="/home" element={<MovieList />}/>
      <Route path="/series/info" element={<MovieInfo />}/>
      <Route path="/series/episodes" element={<MovieEpisodes />}/>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes> 
      
    </div>
  );
}

export default App;
