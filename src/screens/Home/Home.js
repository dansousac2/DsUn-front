import React from 'react';
import './Home.css';
import { withRouter } from 'react-router';

class Home extends React.Component {

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
                    onClick={() => this.props.history.push("/collabs")}
                    >Colaboradores
                </button>
                <br/>
                <button title='Criar Novo' id='button01' ref={elem => this.buttItem = elem} 
                    onMouseEnter={() => this.changeBackColor(this.buttItem)}
                    onMouseLeave={() => this.turnBackGroundDefault(this.buttItem)}
                    >Itens
                </button>
                <br/>
                <button title='Criar Novo' id='button01' ref={elem => this.buttCoffee = elem} 
                    onMouseEnter={() => this.changeBackColor(this.buttCoffee)}
                    onMouseLeave={() => this.turnBackGroundDefault(this.buttCoffee)}
                    >Cafés da Manhã
                </button>
            </div>
        )
    }
}

export default withRouter(Home);