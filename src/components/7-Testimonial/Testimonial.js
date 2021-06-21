import { Avatar, Grid } from '@material-ui/core'
import React from 'react'
import Section from '../4-Section/Section'
import styles from './styles.module.css'

export default function Testimonial() {
    return (
        <div className={styles.container}>
            <Section title="testimonial" route="testimonial">
                {/* <Grid container justify="center">
                    <Grid item sm={7}>
                        <p style={{ textAlign: 'center' }} data-aos="fade-up" className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatem at recusandae rem cum, modi vitae voluptate adipisci voluptates nostrum?</p>
                    </Grid>
                </Grid> */}
                <Grid container>
                    <Grid item xs="12" md="6" data-aos="fade-right">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h6>Justin gaitche</h6>
                            <p><small>CEO & Founder of fucking co</small></p>
                        </div>
                    </Grid>
                    <Grid item xs="12" md="6" data-aos="fade-left">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h6>Justin gaitche</h6>
                            <p><small>CEO & Founder of fucking co</small></p>
                        </div>
                    </Grid>
                    <Grid item xs="12" md="6" data-aos="fade-right">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h6>Justin gaitche</h6>
                            <p><small>CEO & Founder of fucking co</small></p>
                        </div>
                    </Grid>
                    <Grid item xs="12" md="6" data-aos="fade-left">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h6>Justin gaitche</h6>
                            <p><small>CEO & Founder of fucking co</small></p>
                        </div>
                    </Grid>
                </Grid>
            </Section>
        </div>
    )
}
