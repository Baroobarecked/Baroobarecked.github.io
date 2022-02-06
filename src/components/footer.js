import React, { Component } from "react";
import { hot } from 'react-hot-loader';


class Footer extends Component {
    render(){
        return (
            <div id="footer">
                <a href="https://github.com/Baroobarecked">
                    <img src="https://bl3302files.storage.live.com/y4mO_0V5dUEBoWRdPr7mlFOZesVVqZ2HUEsfYGFFngJaRZxwuKx3748YIBXKkMs_0BW0Dwwf8i7aqS09bV0tcgn2nBAX3_eF-A3CRl5CY4mOrERyc3EV5oH7nmfHz7sR0w2NfSI-sbrGi_hMUOPi8J4wrcFpFwaFxb8Mij_upad2cEor4U4qZ8s9JywEadZq0mT?width=512&height=512&cropmode=none" />
                </a>
                <a href="https://linkedin.com/in/aaron-brubeck-458890183">
                    <img src="https://bl3302files.storage.live.com/y4mL_-zfos5cPG5c1Lc9nvwfOjkgyncFc5Y6gKamCz0tKAGiu9zvO0__6jGcdEwUrH0S06B0ekEAggD9FlfjDdOYKvYtzEZyqfz5OPCOFJ1UNhghrq8Rjh8HATe1s1ki_LvXB7b7qTJeywfyfJOxkt8jSiEdcehUDU-LgZUW-Nt8DbjpEgR2jESwa3rIuXzza2k?width=600&height=600&cropmode=none" />
                </a>
            </div>
        )
    }
}

export default hot(module)(Footer);