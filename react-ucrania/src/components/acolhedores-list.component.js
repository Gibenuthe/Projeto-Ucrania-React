import React, { Component } from "react";
import AcolhedorDataService from "../services/acolhedor.service";
import { Link } from "react-router-dom";

export default class AcolhedoresList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchCountry = this.onChangeSearchCountry.bind(this);
    this.retrieveAcolhedores = this.retrieveAcolhedores.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAcolhedor = this.setActiveAcolhedor.bind(this);
    this.removeAllAcolhedores = this.removeAllAcolhedores.bind(this);
    this.searchCountry = this.searchCountry.bind(this);

    this.state = {
      acolhedores: [],
      currentAcolhedor: null,
      currentIndex: -1,
      searchCountry: ""
    };
  }

  componentDidMount() {
    this.retrieveAcolhedores();
  }

  onChangeSearchCountry(e) {
    const searchCountry = e.target.value;

    this.setState({
      searchCountry: searchCountry
    });
  }

  retrieveAcolhedores() {
    AcolhedorDataService.getAll()
      .then(response => {
        this.setState({
          acolhedores: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveAcolhedores();
    this.setState({
      currentAcolhedor: null,
      currentIndex: -1
    });
  }

  setActiveAcolhedor(acolhedor, index) {
    this.setState({
      currentAcolhedor: acolhedor,
      currentIndex: index
    });
  }

  removeAllAcolhedores() {
    AcolhedorDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCountry() {
    this.setState({
      currentAcolhedor: null,
      currentIndex: -1
    });

    AcolhedorDataService.findByCountry(this.state.searchCountry)
      .then(response => {
        this.setState({
          acolhedores: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchCountry, acolhedores, currentAcolhedor, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Procura por país"
              value={searchCountry}
              onChange={this.onChangeSearchCountry}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchCountry}
              >
                Procurar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista de Acolhedores</h4>

          <ul className="list-group">
            {acolhedores &&
              acolhedores.map((acolhedor, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveAcolhedor(acolhedor, index)}
                  key={index}
                >
                  {acolhedor.pais}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllAcolhedores}
          >
            Remover Todos
          </button>
        </div>
        <div className="col-md-6">
          {currentAcolhedor ? (
            <div>
              <h4>Acolhedor</h4>
              <div>
                <label>
                  <strong>País:</strong>
                </label>{" "}
                {currentAcolhedor.pais}
              </div>
              <div>
                <label>
                  <strong>Nome:</strong>
                </label>{" "}
                {currentAcolhedor.nome}
              </div>
              <div>
                <label>
                  <strong>Animal:</strong>
                </label>{" "}
                {currentAcolhedor.animais ? "Sim" : "Não" }
              </div>
              <div>
                <label>
                  <strong>Telefone:</strong>
                </label>{" "}
                {currentAcolhedor.fone}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentAcolhedor.email}
              </div>
              <div>
                <label>
                  <strong>Pessoas:</strong>
                </label>{" "}
                {currentAcolhedor.pessoas}
              </div>
              <div>
                <label>
                  <strong>Idiomas:</strong>
                </label>{" "}
                {currentAcolhedor.idiomas}
              </div>
              <Link
                to={"/acolhedores/" + currentAcolhedor.id}
                className="badge badge-warning"
              >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Favor clicar em um acolhedor</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}