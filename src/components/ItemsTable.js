import React from "react";
import './Tables.css';

function ItemsTable(props) {

    const rows = props.items.map(item => {
    
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                    <button type="button" title="Cancel" className="btn btn-danger"
                        onClick={() => props.excludeMethod(item.name)}
                    >Excluir
                    </button>
                </td>
            </tr>
        )
    });
    
    return (
        <table className="Tb-collab">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default ItemsTable;