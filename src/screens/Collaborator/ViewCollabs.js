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

    editCollaborator = () => {
        console.log('edição de colaborador');
    }

    excludeCollaborator = () => {
        console.log('excluir colaborador');
    }

    render() {
        return(
            <div className="Principal">
                <b>Tela de visualização de colaboradores</b>
                <br/>
                <CollaboratorsTable collaborators={this.state.collaborators} editMethod={this.editCollaborator} excludeMethod={this.excludeCollaborator}/>
            </div>
        )
    }
}

export default withRouter(ViewCollabs);