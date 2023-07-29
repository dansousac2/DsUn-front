import React from "react";
import { withRouter } from 'react-router';
import './CreateBreakFast.css';

import BreakFastService from "../../services/BreakFastService";
import ItemService from "../../services/ItemService";

import ItemsTableSelection from "../../components/ItemsTableSelection";

class CreateBreakFast extends React.Component {

    state = {
        cpf: '',
        date: '',

        items: [],
        selectedItens:[],
    }

    constructor() {
        super();
        this.service = new BreakFastService();
        this.itemService = new ItemService();
    }

    componentDidMount() {
        this.findItems();
    }

    findItems = () => {
        this.itemService.getAllItems()
        .then(response => {
            this.setState({ items: response.data });
        }).catch(() => {
            alert('Ocorreu um erro durante carregamento de itens');
        });
    }

    sendData = () => {
        this.service.createBreakFast(this.state.date, this.state.cpf, this.state.selectedItens)
        .then(() => {
            alert('Criado com sucesso! Redirecionando à tela de listagem');
        }).then(() => {
            this.props.history.push('/breakfasts');
        }).catch(error => {
            alert('Requisição mal sussedida. Verifique os campos digitados');
        });
    }

    analiseCheckBox = (itemId) => {
        console.log(itemId);

        if(this.state.selectedItens.includes(itemId)) {
            this.setState({
                selectedItens: this.state.selectedItens.filter(i => i !== itemId)
            });
        } else {
            this.state.selectedItens.push(itemId);
        }
    }

    render() {
        return (
            <div className="Principal">
                <b>Página de criação de novo Café da Manhã</b>
                <br />
                <div className="Part01">
                    <div className="Inputs">
                        <b>CPF do colaborador(a) (apenas números)</b>
                        <input type="text" onChange={e => this.setState({ cpf: e.target.value })} />
                        <br />
                        <b>Data</b>
                        <input type="date" onChange={e => this.setState({ date: e.target.value })} />
                    </div>
                    <div className="Items-area">
                        <b>Seus itens a levar</b>
                        <ItemsTableSelection items={this.state.items} analiseMethod={this.analiseCheckBox} />
                    </div>
                </div>
                <br />
                <br />
                <div className="Buttons-cnbf">
                    <button type="button" className="btn btn-primary" onClick={() => this.sendData()}
                        >Marcar Café
                    </button>
                    <button type="button" id="bttcnbf01" className="btn btn-success" onClick={() => this.props.history.push('/createItem')}
                        >Crir novo Item
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateBreakFast);