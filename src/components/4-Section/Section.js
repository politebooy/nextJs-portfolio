import { Button, Grid } from '@material-ui/core'
import React from 'react'
import classes from './styles.module.css'
import Link from 'next/link'

export default function Section({ title, children, route }) {

    return (
        <div className={classes.container}>
            <h2 data-aos="fade-up" className={classes.title}>{title || 'Default title'}</h2>
            <Grid container justify="center">
                <Grid item sm={7}>
                    <p style={{ textAlign: 'center' }} data-aos="fade-up" className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatem at recusandae rem cum, modi vitae voluptate adipisci voluptates nostrum?</p>
                </Grid>
            </Grid>
            {children}
            <br />
            <Grid container justify="center">
                <Button className={classes.btn} variant="outlined" color="primary">
                    <Link href={`/${route}`}>Read more...</Link>
                </Button>
            </Grid>
        </div>
    )
}
