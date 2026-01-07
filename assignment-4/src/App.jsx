import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  const [skills, setSkills] = useState([])
  const [data, setData] = useState(null)

  const handleSkill = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter(skill => skill !== value));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !gender || skills.length === 0) {
      alert("Please fill all the fields");
      return;
    }
    setData({
      name,
      email,
      password,
      gender,
      skills
    });
  };

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h2>Add your details</h2>
          <div className="input-box">
            <input type="text"
              placeholder="Enter your name"
              className="user-input"
              value={name}
              onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="input-box">
            <input type="email"
              placeholder="Enter your email address"
              className="user-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input type="password"
              placeholder="Enter your password"
              className="user-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input type="text"
              placeholder="Enter your gender"
              className="user-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </div>
          <div className="skills">
            <label htmlFor="skilss">Select your skills:</label>
            <label htmlFor="java">
              <input type="checkbox" value="Java" onChange={handleSkill} />
              Java
            </label>
            <label htmlFor="python">
              <input type="checkbox" value="Python" onChange={handleSkill} />
              Python
            </label>
            <label htmlFor="nodejs">
              <input type="checkbox" value="NodeJs" onChange={handleSkill} />
              Node Js
            </label>
            <label htmlFor="reactjs">
              <input type="checkbox" value="ReactJs" onChange={handleSkill} />
              React Js
            </label>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {data && (
          <div className="display-data">
            <h2>Submitted Data</h2>
            <p>Name:{data.name}</p>
            <p>Email:{data.email}</p>
            <p>Password:{data.password}</p>
            <p>Gender:{data.gender}</p>
            <p>Skills:{data.skills.join(",")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
