import React from 'react'; 
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card:{
        margin: 10,
        boxShadow: 'none',
        padding: 10,
        borderRadius: 10,
        background: 'none',
    },
    city:{

    },
    temp:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    humidity:{

    },
    description:{

    }
})
const Weather = props => {
    const {classes} = props;
    return(
        <div>
        <Card className={classes.card}>
        <div>
            {props.city && <Typography variant="h5" component="h3" >{props.city}</Typography>}
        </div>
        <div className={classes.temp}>
            {props.temperature && <Typography variant="h1" component="h1">{props.temperature}</Typography>}
            {props.humidity && <Typography variant="h6" component="h4">{props.humidity}</Typography>}
        </div>
        <div>
            {props.description && <Typography variant="h5" component="h2">{props.description}</Typography>}
        </div>
            {props.error && <Typography>{props.error}</Typography>}
        </Card>
        </div>
    )
}
export default withStyles(styles)(Weather); 