import { makeStyles, Box, Typography } from '@material-ui/core';
import sky from '../image/sky.jpg';
import Form from './Form';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto'
    },
    leftContainer: {
        width: '27%',
        height: '80%',
        backgroundImage: `url(${sky})`,
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        width: '73%',
        height: '80%',
        background: 'linear-gradient(to right, skyblue, #d2d7dd, #fe7d85)',
    }
})

const Weather = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
    )
}

export default Weather;