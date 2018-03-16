import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
<<<<<<< c2719585f3f390ebbed6093fd1b93f2edb0f7877
import './Styles.css';
=======
>>>>>>> arreglando trivia


class PlayButton extends Component {

    render(){
        /* const style = {
            margin: 30,
        } */
        return(
         <div className = "button">
            <RaisedButton label="A JUGAR!" primary={true} />
         </div>
        )
    }

}

export default PlayButton;
