import React, { useEffect, useState } from "react";
import './Tables.css';

import CollaboratorService from "../services/CollaboratorService";

const collabService = new CollaboratorService();

function CollaboratorsTable(props) {

    const [rows, setRows] = useState([]);

    useEffect(() => {

        const funcAsync = async () => {
        
            const getRows = await Promise.all(props.collaborators.map(async collab => {

                const name = (await collabService.getCollaboratorByCpf(collab.cpf)).data.name;
        
                return (
                    <tr key={collab.cpf}>
                        <td>{collab.cpf}</td>
                        <td>{name}</td>
                        <td>
                            <button type="button" title="Cancel" className="btn btn-primary"
                                onClick={() => props.editMethod(collab.cpf)}
                                >Editar
                            </button>
                        </td>
                        <td>
                            <button type="button" title="Cancel" className="btn btn-danger"
                                onClick={() => props.excludeMethod(collab.cpf)}
                                >Excluir
                            </button>
                        </td>
                    </tr>
                )
            }));

            setRows(getRows);
        }

        funcAsync();

    }, [props.collaborators, props.update]);


    return (
        <table className="Tb-collab">
            <thead>
                <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Editar Nome</th>
                    <th>Excluir Colaborador</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );


}
export default CollaboratorsTable;