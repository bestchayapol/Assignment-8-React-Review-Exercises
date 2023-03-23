import FavoriteSites from "./components/FavoriteSites"
import Profile from "./components/Profile"
import Gallery from "./components/Gallery"
import StateAssignmentOne from "./components/StateAssignmentOne"
import StateAssignmentTwo from "./components/StateAssignmentTwo"
import "./App.css"

function App() {
  return (
    <div className="App">
      <FavoriteSites />
      <Profile />
      <Gallery />

      <StateAssignmentOne />
      <br />
      <StateAssignmentTwo />
    </div>
  )
}

export default App
