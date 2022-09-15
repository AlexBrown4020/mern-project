import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { List } from './pages/list/List';
import { Lesson } from './pages/lesson/Lesson';
import { Registration } from './components/registration/Registration';
import { CreateLesson } from './components/create_lesson/CreateLesson';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/lessons' element={<List/>}/>
        <Route path='lessons/:id' element={<Lesson/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/create_lesson' element={<CreateLesson/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
