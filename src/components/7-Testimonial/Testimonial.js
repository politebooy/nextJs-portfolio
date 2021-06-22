import { Avatar, Grid } from '@material-ui/core'
import React from 'react'
import Section from '../4-Section/Section'
import styles from './styles.module.css'

export default function Testimonial() {
    return (
        <div id="testimonial" className={styles.container}>
            <Section title="testimonial" route="testimonial">
                <Grid container spacing={3} className={styles.innerContainer}>
                    <Grid item xs="12" md="6" data-aos="fade-right">
                        <Avatar style={{ marginRight: '10px' }} />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h5>Justin gaitche</h5>
                            <h6>CEO & Founder of fucking co</h6>
                        </div>
                    </Grid>
                    <Grid item xs="12" md="6" data-aos="fade-left">
                        <Avatar style={{ marginRight: '10px' }} />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h5>Justin gaitche</h5>
                            <h6>CEO & Founder of fucking co</h6>
                        </div>
                    </Grid>
                    <Grid item xs="12" md="6" data-aos="fade-right">
                        <Avatar style={{ marginRight: '10px' }} />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h5>Justin gaitche</h5>
                            <h6>CEO & Founder of fucking co</h6>
                        </div>
                    </Grid>
                    <Grid item xs="12" md="6" data-aos="fade-left">
                        <Avatar style={{ marginRight: '10px' }} />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h5>Justin gaitche</h5>
                            <h6>CEO & Founder of fucking co</h6>
                        </div>
                    </Grid>
                </Grid>
            </Section>
        </div>
    )
}
