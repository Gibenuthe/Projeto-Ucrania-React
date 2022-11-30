import React, { Component } from "react";
import AcolhedorDataService from "../services/acolhedor.service";

export default class AddAcolhedor extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveAcolhedor = this.saveAcolhedor.bind(this);
    this.newAcolhedor = this.newAcolhedor.bind(this);

    this.state = {
      id: null,
      nome: '',
      fone: '',
      email: '',
      pais: '',
      pessoas: 1,
      animais: false,
      idiomas: '',

      submitted: false
    };
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onChangeFone(e) {
    this.setState({
      fone: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePais(e) {
    this.setState({
      pais: e.target.value
    });
  }

  onChangePessoas(e) {
    this.setState({
      pessoas: e.target.value
    });
  }

  onChangeAnimais(e) {
    this.setState({
      animais: e.target.value
    });
  }

  onChangeIdiomas(e) {
    this.setState({
      idiomas: e.target.value
    });
  }


  saveAcolhedor() {
    var data = {
      nome: this.state.nome,
      fone: this.state.fone,
      email: this.state.email,
      pais: this.state.pais,
      pessoas: this.state.pessoas,
      animais: this.state.animais,
      idiomas: this.state.idiomas
    };

    AcolhedorDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nome: response.data.nome,
          fone: response.data.fone,
          email: response.data.email,
          pais: response.data.pais,
          pessoas: response.data.pessoas,
          animais: response.data.animais,
          idiomas: response.data.idiomas,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newAcolhedor() {
    this.setState({
      id: null,
      nome: '',
      fone: '',
      email: '',
      pais: '',
      pessoas: 1,
      animais: false,
      idiomas: '',

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newAcolhedor}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                required
                value={this.state.nome}
                onChange={this.onChangeNome}
                name="nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fone">Fone</label>
              <input
                type="text"
                className="form-control"
                id="fone"
                required
                value={this.state.fone}
                onChange={this.onChangeFone}
                name="fone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pessoas">Pessoas</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}