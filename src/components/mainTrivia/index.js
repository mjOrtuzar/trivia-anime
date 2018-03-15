import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton'


class PlayButton extends Component {

    render(){
        const style = {
            margin: 30,
        }
        return(
         <div className = "button">
            <RaisedButton label="A JUGAR!" primary={true} style={style} />
         </div>
        )
    }

}

export default PlayButton;
