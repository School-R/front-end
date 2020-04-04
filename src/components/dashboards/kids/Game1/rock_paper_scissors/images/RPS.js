import React, {Component}from 'react'
///MAIN APP////
///STILL WORKING.//////////
import Game from './gameState/GameIndex';
import './game1styles/rpc.css'

class RPS extends Component {
    render(){
        
        return(
            <div className='body'>
                <Game/>
            </div>
        )
    
    }
}

export default RPS;