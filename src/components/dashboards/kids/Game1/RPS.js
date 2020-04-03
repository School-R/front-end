import React, {Component}from 'react'
///MAIN APP////
///STILL WORKING.//////////
import Game from './gameState/GameIndex';
import RPSModal from './RPSModal'

class RPS extends Component {
    render(){
        
        return(
            <div>
                <Game/>
                <RPSModal/>
            </div>
        )
    
    }
}

export default RPS;