import React from 'react'
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Layout({ children }) {
    return (
        <>
            <AppBar position="static" className={styles.appBar} color="inherit">
                <Toolbar>
                    <Grid container justify="space-between">
                        <Grid>
                            Navbar
                        </Grid>
                        <Grid>
                            <Link href="/"><Button color="inherit" size="small">home</Button></Link>
                            <Link href="/about"><Button color="inherit" size="small">about</Button></Link>
                            <Link href="/skills"><Button color="inherit" size="small">skills</Button></Link>
                            <Link href="/portfolio"><Button color="inherit" size="small">portfolio</Button></Link>
                            <Link href="/exparience"><Button color="inherit" size="small">exparience</Button></Link>
                            <Link href="/testimonial"><Button color="inherit" size="small">testimonial</Button></Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {children}
        </>
    )
}
