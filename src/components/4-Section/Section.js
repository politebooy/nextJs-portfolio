import { Button, Grid } from '@material-ui/core'
import React from 'react'
// import useStyles from './styles'
import classes from './styles.module.css'

export default function Section({ title, children }) {
    // const classes = useStyles()

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{title || 'Default title'}</h2>
            {children}
            <Grid container justify="center">
                <Button className={classes.btn} variant="outlined" color="primary">Read more...</Button>
            </Grid>
        </div>
    )
}
