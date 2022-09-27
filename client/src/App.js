import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/home/home';
import { List } from './pages/list/List';
import { Lesson } from './pages/lesson/Lesson';
import { Registration } from './components/registration/Registration';
import { CreateLesson } from './components/create_lesson/CreateLesson';
import { Private } from './components/private_components/Private';
import { Login } from './components/login/Login';
import { UpdateLesson } from './components/update_lesson/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/lessons' element={<List/>}/>
        <Route path='lessons/:id' element={<Lesson/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='lessons/:id/update' element={<UpdateLesson/>} />
        <Route element={<Private/>}>
          <Route path='/create_lesson' element={<CreateLesson/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
