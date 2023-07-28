import React from "react";
import { withRouter } from 'react-router';

import CollaboratorService from "../../services/CollaboratorService";

class CreateCollaborator extends React.Component {

    state = {
        cpf:'',
        name:'',
    }

    constructor() {
        super();
        this.service = new CollaboratorService();
    }

    sendData = () => {
        this.service.createCollaborator(this.state.cpf, this.state.name)
        .then(() => {
            alert('Criado com sucesso! Redirecionando à tela de listagem');
        }).then(() => {
            this.props.history.push('/collabs');
        }).catch(error => {
            alert('Requisição mal sussedida. Verifique os campos digitados');
        });
    }

    render() {
        return(
            <div className="Principal">
                <b>Página de criação de novo Colaborador(a)</b>
                <br/>
                <b>Nome</b>
                <input type="text" onChange={e => this.setState({name: e.target.value})}/>
                <br/>
                <b>CPF (apenas números)</b>
                <input type="text" onChange={e => this.setState({cpf: e.target.value})}/>
                <br/>
                <br/>
                <button type="button" className="btn btn-primary" onClick={() => this.sendData()}
                    >Criar
                </button>
            </div>
        )
    }
}

export default withRouter(CreateCollaborator);