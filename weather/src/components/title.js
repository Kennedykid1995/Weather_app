import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    header:{
        margin: 10,
        boxShadow: 'none',
        borderRadius: 0,
    }
})
const Titles = (props) => {
    const { classes } = props;

    return(
        <Card className={classes.header}>
            <Typography  variant="h5" component="h1" >Weathery</Typography>
        </Card>
    )
}
export default withStyles(styles)(Titles);