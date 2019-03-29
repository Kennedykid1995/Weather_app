import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card:{
        margin: 10,
        boxShadow: 'none',
        borderRadius: 0,
      },
      columnForm:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
      },
      inputStyle:{
        width: 300, 
        margin: 10
      },
})

const Form = (props) => {
    const {classes} = props; 
    return(
        <Card className={classes.card}>
            <form className={classes.columnForm} onSubmit={props.loadWeather}>
                <OutlinedInput className={classes.inputStyle} type="text" name="city" placeholder="City" />
                <OutlinedInput className={classes.inputStyle} type="text" name="country" placeholder="Country" />
                <Button>Get Weather</Button>
            </form>
        </Card>
    )
}
export default withStyles(styles)(Form); 