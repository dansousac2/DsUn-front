import React, { useState } from "react";
import './Tables.css';

function ItemsTableSelection(props) {

    const rows = props.items.map(item => {

        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <input type="checkbox" id={item.name} onChange={() => props.analiseMethod(item.id)}></input>
            </tr>
        )
    });
    
    return (
        <table className="Tb-collab">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Levar este item?</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default ItemsTableSelection;