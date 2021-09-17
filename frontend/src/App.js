import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null){
    initTodo = [];
  }

  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todoItem) => {
    console.log("I am on delete", todoItem);
    setTodos(todos.filter((e) => {
      return e !== todoItem;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length===0) {
      sno = 1;
    }
    else {
      sno = todos[ todos.length - 1 ].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]) ;
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <Router>
      <Header title="My ToDos List" searchBar={false} />
      <main className="container mb-5 my-4">
        <Switch>
          <Route exact path="/">
            <h1 className="b-650 text-center">Todos List</h1>
            <AddTodo addTodo={ addTodo }/>
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;