import './App.css'
import Msgbox from './Components/Msgbox'
import Userinfo from './Components/Userinfo'
import Users from './Components/Users'

function App() {
  return (
    <>
      <h1>Hii</h1>

      <Msgbox username="Paravin" textcolor="pink" />
      <Users/>
      <Userinfo/>
    </>
  )
}

export default App