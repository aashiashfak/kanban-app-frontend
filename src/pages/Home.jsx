
import Header from '../components/Heder'

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
    </>
  )
}

export default Home
