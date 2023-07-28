import React from "react";
import './ViewCollabs.css';
import { withRouter } from 'react-router';

import CollaboratorService from "../../services/CollaboratorService";

import CollaboratorsTable from "../../components/CollaboratorsTable";

class ViewCollabs extends React.Component {
    
    state = {
        collaborators:[],
    }

    constructor() {
        super();
        this.service = new CollaboratorService();
    }

    componentDidMount() {
        this.find();
    }

    find = () => {
        this.service.getAllCollaborators()
        .then(response => {
            this.setState({collaborators: response.data});
        }).catch(error => {
            console.log(error);
        })
    }

    editCollaborator = (cpf) => {
        console.log('edição de colaborador: '  + cpf);
    }

    excludeCollaborator = async (cpf) => {
        await this.service.excludeCollaborator(cpf);
        this.find();
    }

    render() {
        return(
            <div className="Principal">
                <b>Tela de visualização de colaboradores</b>
                <br/>
                <CollaboratorsTable collaborators={this.state.collaborators} editMethod={this.editCollaborator} excludeMethod={this.excludeCollaborator}/>
                <br/>
                <button type="button" className="btn btn-success" onClick={() => this.props.history.push('/createcollab')}
                    >Criar Novo
                </button>
            </div>
        )
    }
}

export default withRouter(ViewCollabs);