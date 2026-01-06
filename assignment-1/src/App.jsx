import User from './User.jsx'
import img from './assets/image.jpg'
import './App.css'
function App() {

  return (
    <div className="card">
      <img src={img} alt='Username' className="user-img" />
      <div className="container">
        <h2 className="User">Surbhi Jha</h2>
        <User details="I'm currently purshing mca from atmiya university & working as trainee at
        encircle technologies."/>
      </div>
    </div>
  )
}

export default App
