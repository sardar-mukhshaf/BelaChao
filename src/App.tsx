import './App.css'
import Signup from './features/authentication/presentation/pages/SignUp';
import LoginPage from './features/authentication/presentation/pages/LoginPage';



function App() {


  return (
    <>
      <div className='w-full min-h-screen bg-gray-700'>
        <Signup/>
        <LoginPage />
        
      </div>
    </>
  )
}
export default App;
