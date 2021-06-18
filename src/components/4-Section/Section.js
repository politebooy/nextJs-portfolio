import { Button, Grid } from '@material-ui/core'
import React from 'react'
import classes from './styles.module.css'
import Link from 'next/link'

export default function Section({ title, children, route }) {

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{title || 'Default title'}</h2>
            {children}
            <Grid container justify="center">
                <Button className={classes.btn} variant="outlined" color="primary">
                    <Link href={`/${route}`}>Read more...</Link>
                </Button>
            </Grid>
        </div>
    )
}
