import React from "react";
import './ViewBreakFasts.css';
import { withRouter } from 'react-router';

import BreakFastService from "../../services/BreakFastService";

import BreakFastTable from "../../components/BreakFastTable";

class ViewBreakFasts extends React.Component {
    
    state = {
        breakFasts:[],
    }

    constructor() {
        super();
        this.service = new BreakFastService();
    }

    componentDidMount() {
        this.find();
    }

    find = () => {
        this.service.getAllBreakFasts()
        .then(response => {
            this.setState({breakFasts: response.data});
        }).catch(error => {
            console.log(error);
        })
    }

    participeOfBreakFast = (date) => {
        console.log(date);
        localStorage.setItem('dateToParticipe', date);
        this.props.history.push('/participebreakfast');
    }

    render() {
        return(
            <div className="Principal">
                <b>Tela de visualização de Cafés da Manhã</b>
                <br/>
                <BreakFastTable breakFasts={this.state.breakFasts} participationMethod={this.participeOfBreakFast}/>
                <br/>
                <button type="button" className="btn btn-success" onClick={() => this.props.history.push('/createbreakfast')}
                    >Criar Novo
                </button>
                <br/>
                <br/>
                <button type="button" className="btn btn-primary" onClick={() => console.log('criar função')}
                    >Cheking do Café de hoje
                    {/*TODO função de Checagem */}
                </button>
            </div>
        )
    }
}

export default withRouter(ViewBreakFasts);