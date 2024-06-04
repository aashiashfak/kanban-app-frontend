
import Header from '../components/Heder'
import KanbanBoard from '../components/KanbanBoard'

function Home() {

 
  // useEffect(() => {
  //   if (localStorage.getItem("access_token") === null) {
  //     navigate("/Login");
  //   } else {
  //     navigate('/')
  //     setMessage('you are logged in')
  //   }
  // },[])

  return (
    <>
    <Header/>
    <KanbanBoard/>
    </>
  )
}

export default Home
