import React from 'react';
import './Home.css';
import { withRouter } from 'react-router';

class Home extends React.Component {

    constructor() {
        super();
    }

    state = {

    }

    changeBackColor = (button) => {
        button.classList.add("butonSelected");
    }

    turnBackGroundDefault = (button) => {
        button.classList.remove("butonSelected");
    }

    render() {
        return(
            <div className='Principal'>
                <button title='Criar Novo' id='button01' ref={elem => this.buttCollab = elem} 
                    onMouseEnter={() => this.changeBackColor(this.buttCollab)}
                    onMouseLeave={() => this.turnBackGroundDefault(this.buttCollab)}
                    >Criar Colaborador
                </button>
                <br/>
                <button title='Criar Novo' id='button01' ref={elem => this.buttItem = elem} 
                    onMouseEnter={() => this.changeBackColor(this.buttItem)}
                    onMouseLeave={() => this.turnBackGroundDefault(this.buttItem)}
                    >Criar Item
                </button>
                <br/>
                <button title='Criar Novo' id='button01' ref={elem => this.buttCoffee = elem} 
                    onMouseEnter={() => this.changeBackColor(this.buttCoffee)}
                    onMouseLeave={() => this.turnBackGroundDefault(this.buttCoffee)}
                    >Listar Cafés da Manhã
                </button>
            </div>
        )
    }
}

export default withRouter(Home);