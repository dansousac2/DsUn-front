import React from "react";
import { withRouter } from 'react-router';

import ItemService from "../../services/ItemService";

class CreateItem extends React.Component {

    state = {
        name:'',
    }

    constructor() {
        super();
        this.service = new ItemService();
    }

    sendData = () => {
        this.service.createItem(this.state.name)
        .then(() => {
            alert('Criado com sucesso! Redirecionando à tela de listagem');
        }).then(() => {
            this.props.history.push('/items');
        }).catch(error => {
            alert('Requisição mal sussedida. Verifique o campo digitado');
        });
    }

    render() {
        return(
            <div className="Principal">
                <b>Página de criação de novo Item</b>
                <br/>
                <b>Nome</b>
                <input type="text" onChange={e => this.setState({name: e.target.value})}/>
                <br/>
                <br/>
                <button type="button" className="btn btn-primary" onClick={() => this.sendData()}
                    >Criar
                </button>
            </div>
        )
    }
}

export default withRouter(CreateItem);