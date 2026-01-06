import { useState } from "react"

function HomePage() {
    const [insert, setInsert] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim() === "") return;
        setInsert([...insert, input]);
        setInput("");
    };

    const deleteBtn = (index) => {
        setInsert(insert.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="input-box">
                <input
                    type="text"
                    value={input}
                    placeholder="Enter the to-do"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTodo} className="add-btn ">Submit</button>
            </div>

            {insert.map((todo, index) => (
                <div className="card" key={index}>
                    <p>{todo}</p>
                    <button className="delete-btn" onClick={() => deleteBtn(index)}>Delete</button>
                </div>
            ))}

        </>
    )

}

export default HomePage