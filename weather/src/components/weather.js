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
    },
    city:{

    },
    temp:{

    },
    humidity:{

    },
    description:{

    }
})
const Weather = props => {
    const {classes} = props;
    return(
        <Card>
            <div>
            {props.city && <Typography variant="h5" component="h3" >{props.city}</Typography>}
            {props.temperature && <Typography variant="h1" component="h1">{props.temperature}</Typography>}
            {props.humidity && <Typography variant="h6" component="h4">{props.humidity}</Typography>}
            {props.description && <Typography variant="h5" component="h2">{props.description}</Typography>}
            {props.error && <Typography>{props.error}</Typography>}
            </div>
        </Card>
    )
}
export default withStyles(styles)(Weather); 