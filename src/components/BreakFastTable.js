import React from "react";
import './Tables.css';

function BreakFastTable(props) {

    const rows = props.breakFasts.map(breakFast => {
    
        return (
            <tr key={breakFast.id}>
                <td>{breakFast.id}</td>
                <td>{breakFast.date}</td>
                <td>
                    <button type="button" className="btn btn-primary"
                        onClick={() => props.participationMethod(breakFast.date)}
                    >Participar
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
                    <th>Data</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default BreakFastTable;