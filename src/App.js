import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Donate from './components/donate/donate';
import Join from './components/join/join';
import Adopt from './components/adopt/adopt';
import Residents from './components/residents/residents';
import Story from './components/story/story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/join' element={<Join />} />
        <Route path='/adopt' element={<Adopt />} />
        <Route path='/our-story' element={<Story />} />
        <Route path='/residents' element={<Residents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
