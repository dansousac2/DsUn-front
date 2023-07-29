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
                <button id='button01' ref={elem => this.buttCollab = elem} 
                    onMouseEnter={() => this.changeBackColor(this.buttCollab)}
                    onMouseLeave={() => this.turnBackGroundDefault(this.buttCollab)}
                    onClick={() => this.props.history.push("/collabs")}
                    >Colaboradores
                </button>
                <br/>
                <button id='button02' ref={elem => this.buttItem = elem} 
                    onMouseEnter={() => this.changeBackColor(this.buttItem)}
                    onMouseLeave={() => this.turnBackGroundDefault(this.buttItem)}
                    onClick={() => this.props.history.push("/items")}
                    >Itens
                </button>
                <br/>
                <button id='button03' ref={elem => this.buttCoffee = elem} 
                    onMouseEnter={() => this.changeBackColor(this.buttCoffee)}
                    onMouseLeave={() => this.turnBackGroundDefault(this.buttCoffee)}
                    onClick={() => this.props.history.push("/breakfasts")}
                    >Cafés da Manhã
                </button>
            </div>
        )
    }
}

export default withRouter(Home);