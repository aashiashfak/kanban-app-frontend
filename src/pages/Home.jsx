
import { useNavigate } from 'react-router-dom';
import Header from '../components/Heder'
import KanbanBoard from '../components/KanbanBoard'
import { useEffect } from 'react';

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const isAuthenticated = userData !== null;
    navigate(isAuthenticated ? "/" : "Login");
  }, [navigate]);

  return (
    <>
    <Header/>
    <KanbanBoard/>
    </>
  )
}

export default Home
