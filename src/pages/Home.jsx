
import { useNavigate } from 'react-router-dom';
import Header from '../components/Heder'
import KanbanBoard from '../components/KanbanBoard'
import { useEffect } from 'react';

function Home() {

  const navigate = useNavigate();

  // control the authenticated user from going back to login page with checking userData from local storage 
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const isAuthenticated = userData !== null;
    navigate(isAuthenticated ? "/" : "Login");
  }, [navigate]);


  useEffect(()=>{
    console.log('enter to useEffect')
  },[])
  return (
    <>
    <Header/>
    <KanbanBoard/>
    </>
  )
}

export default Home
