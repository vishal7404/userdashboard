import React from 'react'
import "./MoneyCard.css"
const MoneyCard = (props) => {
    return (
        <React.Fragment>
            <div id="moneyCardDiv">
                <i><props.icon /></i>
                <div>
                    <p>{props.title}</p>
                    <h5><span>$</span>{props.money}</h5>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MoneyCard