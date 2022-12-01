import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddAcolhedor from "./components/add-acolhedor.component";
import Acolhedor from "./components/acolhedor.component";
import AcolhedoresList from "./components/acolhedores-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/acolhedores"} className="navbar-brand">
            Projeto Ucrania
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/acolhedores"} className="nav-link">
                Acolhedores
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Adicionar
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<AcolhedoresList/>} />
            <Route path="/acolhedores" element={<AcolhedoresList/>} />
            <Route path="/add" element={<AddAcolhedor/>} />
            <Route path="/acolhedores/:id" element={<Acolhedor/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;