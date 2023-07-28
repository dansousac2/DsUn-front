import React from "react";
import './ViewCollabs.css';
import { withRouter } from 'react-router';

import CollaboratorService from "../../services/CollaboratorService";

class EditCollabName extends React.Component {
    
    state = {
        name:'',
    }

    constructor() {
        super();
        this.service = new CollaboratorService();
    }

    updateName = () => {
        this.service.updateCollaboratorName(localStorage.getItem('toUpdate'), this.state.name)
        .then(() => {
            alert('Sucesso! Redirecionando à página de listagem');
        }).then(() => {
            this.props.history.push('/collabs');
        }).catch(() => {
            alert('Ocorreu um erro ao tentar atualizar o nome. Verifique o campo digitado');
        })
    }

    render() {
        return(
            <div className="Principal">
                <b>Tela de Edição de Nome de Colaborador(a)</b>
                <br/>
                <b>Novo nome para colaborador(a)</b>
                <b>CPF: {localStorage.getItem('toUpdate')}</b>
                <br/>
                <input type="text" onChange={e => this.setState({name: e.target.value})}/>
                <br/>
                <button type="button" className="btn btn-primary" onClick={() => this.updateName()}
                    >Atualizar Nome
                </button>
            </div>
        )
    }
}

export default withRouter(EditCollabName);