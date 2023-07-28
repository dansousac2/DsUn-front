import React from "react";
import './ViewCollabs.css';
import { withRouter } from 'react-router';

import CollaboratorService from "../../services/CollaboratorService";

class ViewCollabs extends React.Component {
    
    state = {

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
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <div className="Principal">
                <b>Tela de visualização de colaboradores</b>
            </div>
        )
    }
}

export default withRouter(ViewCollabs);