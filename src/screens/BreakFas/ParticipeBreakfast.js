import React from "react";
import { withRouter } from 'react-router';
import './ParticipeBreakfast.css';

import BreakFastService from "../../services/BreakFastService";
import ItemService from "../../services/ItemService";

import ItemsTableSelection from "../../components/ItemsTableSelection";

class ParticipeBreakfast extends React.Component {
    state = {
        cpf: '',

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

    sendData = () => {

        const date = localStorage.getItem('dateToParticipe').replace(/,/g, "-");

        this.service.updateBreakFast(date, this.state.cpf, this.state.selectedItens)
        .then(() => {
            alert('Criado com sucesso! Redirecionando à tela de listagem');
        }).then(() => {
            this.props.history.push('/breakfasts');
        }).catch(error => {
            alert('Requisição mal sussedida. Verifique os campos digitados');
        });
    }

    render() {
        return(
            <div className="Principal">
                <b>Página de participação de Café da Manhã existente</b>
                <b>{localStorage.getItem('dateToParticipe')}</b>
                <br/>
                <b>CPF do colaborador(a) (apenas números)</b>
                <input type="text" onChange={e => this.setState({ cpf: e.target.value })} />
                <br/>
                <div className="Items-area">
                    <b>Seus itens a levar</b>
                    <ItemsTableSelection items={this.state.items} analiseMethod={this.analiseCheckBox} />
                </div>
                <br/>
                <br/>
                <button type="button" className="btn btn-primary" onClick={() => this.sendData()}
                    >Participar
                </button>
            </div>
        )
    }
}

export default withRouter(ParticipeBreakfast);