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
      nome: "",
      fone: "",
      email: "",
      pais: "",
      pessoas: 1,
      animais: false,
      idiomas: "",

      submitted: false,
    };
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value,
    });
  }

  onChangeFone(e) {
    this.setState({
      fone: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePais(e) {
    this.setState({
      pais: e.target.value,
    });
  }

  onChangePessoas(e) {
    this.setState({
      pessoas: e.target.value,
    });
  }

  onChangeAnimais(e) {
    this.setState({
      animais: e.target.value,
    });
  }

  onChangeIdiomas(e) {
    this.setState({
      idiomas: e.target.value,
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
      idiomas: this.state.idiomas,
    };

    AcolhedorDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          nome: response.data.nome,
          fone: response.data.fone,
          email: response.data.email,
          pais: response.data.pais,
          pessoas: response.data.pessoas,
          animais: response.data.animais,
          idiomas: response.data.idiomas,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newAcolhedor() {
    this.setState({
      id: null,
      nome: "",
      fone: "",
      email: "",
      pais: "",
      pessoas: 1,
      animais: false,
      idiomas: "",

      submitted: false,
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
                type="number"
                className="form-control"
                id="pessoas"
                required
                value={this.state.pessoas}
                onChange={this.onChangePessoas}
                name="pessoas"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pais">Pais</label>
              <select
                type="text"
                className="form-control"
                id="pais"
                required
                value={this.state.pais}
                onChange={this.onChangePais}
                name="pais"
              >
                <option
                  value="0"
                  label="Selecione um país ... "
                  selected="selected"
                >
                  Selecione um país ...
                </option>
                <optgroup id="country-optgroup-Asia" label="Asia">
                  <option value="Afeganistão" label="Afeganistao">
                    Afeganistao
                  </option>
                  <option value="Arábia Saudita" label="Arabia Saudita">
                    Arabia Saudita
                  </option>
                  <option value="Armênia" label="Armenia">
                    Armenia
                  </option>
                  <option value="Azerbaijão" label="Azerbaijao">
                    Azerbaijao
                  </option>
                  <option value="Barein" label="Bahrein">
                    Bahrein
                  </option>
                  <option value="Bangladesh" label="Bangladesh">
                    Bangladesh
                  </option>
                  <option value="Brunei" label="Brunei">
                    Brunei
                  </option>
                  <option value="Butão" label="Butao">
                    Butao
                  </option>
                  <option value="Cambodja" label="Camboja">
                    Camboja
                  </option>
                  <option value="Catar" label="Catar">
                    Catar
                  </option>
                  <option value="Cazaquistão" label="Cazaquistao">
                    Cazaquistao
                  </option>
                  <option value="China" label="China">
                    China
                  </option>
                  <option value="Coréia do Norte" label="Coreia do Norte">
                    Coreia do Norte
                  </option>
                  <option value="Coréia do Sul" label="Coreia do Sul">
                    Coreia do Sul
                  </option>
                  <option
                    value="Emirados Árabes Unidos"
                    label="Emirados Arabes Unidos"
                  >
                    Emirados Arabes Unidos
                  </option>
                  <option value="Filipinas" label="Filipinas">
                    Filipinas
                  </option>
                  <option value="Georgia" label="Georgia">
                    Georgia
                  </option>
                  <option value="Hong Kong" label="Hong Kong SAR China">
                    Hong Kong SAR China
                  </option>
                  <option value="Iemen" label="Iemen">
                    Iemen
                  </option>
                  <option value="Índia" label="India">
                    India
                  </option>
                  <option value="Indonésia" label="Indonesia">
                    Indonesia
                  </option>
                  <option value="Irã" label="Ira">
                    Ira
                  </option>
                  <option value="Iraque" label="Iraque">
                    Iraque
                  </option>
                  <option value="Israel" label="Israel">
                    Israel
                  </option>
                  <option value="Japão" label="Japao">
                    Japao
                  </option>
                  <option value="Jordânia" label="Jordania">
                    Jordania
                  </option>
                  <option value="Kuwait" label="Kuwait">
                    Kuwait
                  </option>
                  <option value="Laos" label="Laos">
                    Laos
                  </option>
                  <option value="Líbano" label="Libano">
                    Libano
                  </option>
                  <option value="Macau" label="Macau SAR China">
                    Macau SAR China
                  </option>
                  <option value="Malásia" label="Malasia">
                    Malasia
                  </option>
                  <option value="Maldivas" label="Maldivas">
                    Maldivas
                  </option>
                  <option value="Mongolia" label="Mongolia">
                    Mongolia
                  </option>
                  <option value="Myanmar" label="Myanmar [Burma]">
                    Myanmar [Burma]
                  </option>
                  <option value="Nepal" label="Nepal">
                    Nepal
                  </option>
                  <option value="Omã" label="Oma">
                    Oma
                  </option>
                  <option value="Palestina" label="Palestina">
                    Palestina
                  </option>
                  <option value="Paquistão" label="Paquistao">
                    Paquistao
                  </option>
                  <option value="Quirguistão" label="Quirguistao">
                    Quirguistao
                  </option>
                  <option value="Rep. Dem. do Iemen" label="Rep. Dem. Iemen">
                    Rep. Dem. Iemen
                  </option>
                  <option value="Singapura" label="Singapura">
                    Singapura
                  </option>
                  <option value="Sri Lanka" label="Sri Lanka">
                    Sri Lanka
                  </option>
                  <option value="Síria" label="Siria">
                    Siria
                  </option>
                  <option value="Taiwan" label="Taiwan">
                    Taiwan
                  </option>
                  <option value="Tadjiquistão" label="Tadjiquistao">
                    Tadjiquistao
                  </option>
                  <option value="Tailândia" label="Tailandia">
                    Tailandia
                  </option>
                  <option value="Timor-Leste" label="Timor-Leste">
                    Timor-Leste
                  </option>
                  <option value="Turquia" label="Turquia">
                    Turquia
                  </option>
                  <option value="Turcomenistão" label="Turcomenistao">
                    Turcomenistao
                  </option>
                  <option value="Uzbequistão" label="Uzbequistao">
                    Uzbequistao
                  </option>
                  <option value="Vietnã" label="Vietna">
                    Vietna
                  </option>
                </optgroup>
                <optgroup id="country-optgroup-Europe" label="Europa">
                  <option value="Albânia" label="Albania">
                    Albania
                  </option>
                  <option value="Alemanha" label="Alemanha">
                    Alemanha
                  </option>
                  <option value="Andorra" label="Andorra">
                    Andorra
                  </option>
                  <option value="Áustria" label="Austria">
                    Austria
                  </option>
                  <option value="Belarus" label="Belarus">
                    Belarus
                  </option>
                  <option value="Bélgica" label="Belgica">
                    Belgica
                  </option>
                  <option
                    value="Bosnia e Herzegovina"
                    label="Bosnia e Herzegovina"
                  >
                    Bosnia e Herzegovina
                  </option>
                  <option value="Bulgária" label="Bulgaria">
                    Bulgaria
                  </option>
                  <option value="Croácia" label="Croacia">
                    Croacia
                  </option>
                  <option value="Chipre" label="Chipre">
                    Chipre
                  </option>
                  <option value="Dinamarca" label="Dinamarca">
                    Dinamarca
                  </option>
                  <option value="Eslováquia" label="Eslovaquia">
                    Eslovaquia
                  </option>
                  <option value="Eslovênia" label="Eslovenia">
                    Eslovenia
                  </option>
                  <option value="Espanha" label="Espanha">
                    Espanha
                  </option>
                  <option value="Estônia" label="Estonia">
                    Estonia
                  </option>
                  <option value="Finlândia" label="Finlandia">
                    Finlandia
                  </option>
                  <option value="França" label="Franca">
                    Franca
                  </option>
                  <option value="Gibraltar" label="Gibraltar">
                    Gibraltar
                  </option>
                  <option value="Grécia" label="Grecia">
                    Grecia
                  </option>
                  <option value="Guernsey" label="Guernsey">
                    Guernsey
                  </option>
                  <option value="Holanda" label="Holanda">
                    Holanda
                  </option>
                  <option value="Hungria" label="Hungria">
                    Hungria
                  </option>
                  <option value="Ilhas Åland" label="Ilhas Åland">
                    Ilhas Åland
                  </option>
                  <option value="Ilha de Man" label="Ilha de Man">
                    Ilha de Man
                  </option>
                  <option value="Ilhas Faroe" label="Ilhas Faroe">
                    Ilhas Faroe
                  </option>
                  <option value="Irlanda" label="Irlanda">
                    Irlanda
                  </option>
                  <option value="Islândia" label="Islandia">
                    Islandia
                  </option>
                  <option value="Itália" label="Italia">
                    Italia
                  </option>
                  <option value="Jersey" label="Jersey">
                    Jersey
                  </option>
                  <option value="Letônia" label="Letonia">
                    Letonia
                  </option>
                  <option value="Lietchenstein" label="Liechtenstein">
                    Liechtenstein
                  </option>
                  <option value="Lituânia" label="Lituania">
                    Lituania
                  </option>
                  <option value="Luxemburgo" label="Luxemburgo">
                    Luxemburgo
                  </option>
                  <option value="Macedônia" label="Macedonia">
                    Macedonia
                  </option>
                  <option value="Malta" label="Malta">
                    Malta
                  </option>
                  <option value="Moldávia" label="Moldavia">
                    Moldavia
                  </option>
                  <option value="Mônaco" label="Monaco">
                    Monaco
                  </option>
                  <option value="Montenegro" label="Montenegro">
                    Montenegro
                  </option>
                  <option value="Noruega" label="Noruega">
                    Noruega
                  </option>
                  <option value="Polônia" label="Polonia">
                    Polonia
                  </option>
                  <option value="Portugal" label="Portugal">
                    Portugal
                  </option>
                  <option value="Reino Unido" label="Reino Unido">
                    Reino Unido
                  </option>
                  <option value="República Checa" label="Republica Checa">
                    Republica Checa
                  </option>
                  <option value="Romênia" label="Romenia">
                    Romenia
                  </option>
                  <option value="Rússia" label="Russia">
                    Russia
                  </option>
                  <option value="San Marino" label="San Marino">
                    San Marino
                  </option>
                  <option value="Sérvia" label="Servia">
                    Servia
                  </option>
                  <option
                    value="Svalbard e Jan Mayen"
                    label="Svalbard e Jan Mayen"
                  >
                    Svalbard e Jan Mayen
                  </option>
                  <option value="Suécia" label="Suecia">
                    Suecia
                  </option>
                  <option value="Suíça" label="Suica">
                    Suica
                  </option>
                  <option value="Ucrânia" label="Ucrania">
                    Ucrania
                  </option>
                  <option value="Vaticano" label="Vaticano">
                    Vaticano
                  </option>
                </optgroup>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="animais">Animais</label>
              <select
                type="text"
                className="form-control"
                id="animais"
                required
                value={this.state.animais}
                onChange={this.onChangeAnimais}
                name="animais"
              >
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="idiomas">Idiomas</label>
              <select
                type="text"
                className="form-control"
                id="idiomas"
                required
                value={this.state.idiomas}
                onChange={this.onChangeIdiomas}
                name="idiomas"
              >
                <option value="Alemão">Alemão</option>
                <option value="Árabe">Árabe</option>
                <option value="Espanhol">Espanhol</option>
                <option value="Francês">Francês</option>
                <option value="Húngaro">Húngaro</option>
                <option value="Inglês">Inglês</option>
                <option value="Italiano">Italiano</option>
                <option value="Polonês">Polonês</option>
                <option value="Romeno">Romeno</option>
                <option value="Russo">Russo</option>
                <option value="Turco">Turco</option>
                <option value="Ucraniano">Ucraniano</option>
              </select>
            </div>

            <button onClick={this.saveAcolhedor} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
