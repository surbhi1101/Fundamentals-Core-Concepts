import { Link } from "react-router-dom"

function HomePage() {

    return (
        <div className="container">
            <div className="card">
                <Link to="/Mern" className="link">Mern Stack</Link>
            </div>
            <div className="card">
                <Link to="/Python" className="link">Python</Link>
                <br />
            </div>

            <div className="card">
                <Link to="/Javascript" className="link">Javascript</Link>
            </div>
        </div>
    )

}

export default HomePage