import React, { Component } from 'react';

class Alert extends Component {
    constructor(props){
        super(props);
        this.color = null;
    }

    /**
     * Returns the style object for the alert text.
     * The style includes the color property which is set by subclasses.
     */
    
    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render(){
        return(
            <div className='Alert'>
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        )
    }


}

class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'blue';
    }
  }

class ErrorAlert extends Alert {
    constructor(props){
        super(props);
        this.color = 'red'
    }
}  

export {InfoAlert, ErrorAlert}  