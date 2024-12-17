import './App.css'
import Signup from './features/authentication/presentation/pages/SignUp';
import LoginPage from './features/authentication/presentation/pages/LoginPage';
import Shop from './features/authentication/presentation/pages/Shop';

function App() {

  return (
    <>
      <div className='w-full min-h-screen bg-gray-700'>
        {/* <LoginPage />
        <Signup /> */}
        <Shop/>
      </div >
    </>
  )
}
export default App;
