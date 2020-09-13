import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        textAlign: "center",
        
    },
    button: {
      margin: "1rem"
    },
  };

class StreamCreate extends Component {
    renderInput({input}) {
        return <TextField {...input} label={input.name}/>
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <Field name="title" component={this.renderInput}/>
                <br/>
                <Field name="description" component={this.renderInput}/>
                {/* <TextField label="Title"/>
                <br/>
                <TextField label="Description"/>
                <br/>
                <Button className={classes.button} color="primary" variant="contained">
                    Click
                </Button> */}
            </div>
        )
    }
}

export default withStyles(styles)(reduxForm({
    form: 'streamCreate'
})(StreamCreate));