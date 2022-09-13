import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { List } from './pages/list/List';
import { Lesson } from './pages/lesson/Lesson';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/lessons' element={<List/>}/>
        <Route path='lessons/:id' element={<Lesson/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
