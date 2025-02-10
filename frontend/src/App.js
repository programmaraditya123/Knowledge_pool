//import logo from './logo.svg';
import { Route,Routes } from 'react-router';
//import './App.css';
import HomePage from './Pages/HomePage';
import StudentDashboard from './Pages/StudentDashboard';
import PostContent from './Pages/PostContent';
import ProblemSolving from './Pages/ProblemSolving';
import PostorAnswerQuestion from './Pages/PostorAnswerQuestion';
import Tutorial from './Pages/Tutorial';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Dashboard' element={<StudentDashboard/>}/>
      <Route path='/postcontent' element={<PostContent/>}/>
      <Route path='/solve' element={<ProblemSolving/>}/>
      <Route path='postoranswerquestion' element={<PostorAnswerQuestion/>}/>
      <Route path='/tutorial' element={<Tutorial/>}/>
    </Routes>
    
     
    </>
  );
}

export default App;
