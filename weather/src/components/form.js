import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Titles from "./title";
const styles = theme => ({
    card:{
        margin: 10,
        boxShadow: 'none',
        padding: 10,
        borderRadius: 10,
      },
      columnForm:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
      },
      inputStyle:{
        margin: 10,
        width: 300,
      },
})

const Form = (props) => {
    const {classes} = props; 
    return(
    <Card className={classes.card}>
        <Titles />
     <form className={classes.columnForm} onSubmit = {props.loadWeather}>
        <OutlinedInput labelWidth={0} className={classes.inputStyle} type="text" name="city" placeholder="City..."/>
        <OutlinedInput labelWidth={0} className={classes.inputStyle} type="text" name="country" placeholder="Country..."/>
        <Button label="Submit" type="submit" >Get Weather</Button>
      </form>
    </Card>
    )
}
export default withStyles(styles)(Form); 