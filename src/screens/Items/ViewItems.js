import React from "react";
import './ViewItems.css';
import { withRouter } from 'react-router';

import ItemService from "../../services/ItemService";

import ItemsTable from "../../components/ItemsTable";

class ViewItems extends React.Component {
    
    state = {
        items:[],
    }

    constructor() {
        super();
        this.service = new ItemService();
    }

    componentDidMount() {
        this.find();
    }

    find = () => {
        this.service.getAllItems()
        .then(response => {
            this.setState({items: response.data});
        }).catch(error => {
            console.log(error);
        })
    }

    excludeItem = async (name) => {
        await this.service.removeItemByName(name)
        .catch(error => {
            alert('Ocorreu um erro ao tentar excluir o item');
        });

        this.find();
    }

    render() {
        return(
            <div className="Principal">
                <b>Tela de visualização de itens</b>
                <br/>
                <ItemsTable items={this.state.items} excludeMethod={this.excludeItem}/>
                <br/>
                <button type="button" className="btn btn-success" onClick={() => this.props.history.push('/createItem')}
                    >Criar Novo
                </button>
            </div>
        )
    }
}

export default withRouter(ViewItems);