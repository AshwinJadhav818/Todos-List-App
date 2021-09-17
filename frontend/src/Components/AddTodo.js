import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    return (
        <section>
            <h3 className="text-center b-600 my-3">Add A ToDo</h3>
            <form onSubmit = { submit }>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">ToDo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Enter Your Title Here" id="title" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea rows="3" className="form-control" value={desc} onChange={(e) => {setDesc(e.target.value)}} placeholder="Enter Your Description Here" id="desc" required></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-outline-primary">Click To Add A ToDo</button>
                </div>
            </form>
        </section>
    )
}
