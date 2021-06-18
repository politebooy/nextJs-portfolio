import { Avatar, Grid } from '@material-ui/core'
import React from 'react'
import Section from '../4-Section/Section'
import styles from './styles.module.css'
import person from '../../../public/Images/bg7.jpg'

export default function Testimonial() {
    return (
        <div className={styles.container}>
            <Section>
                <Grid container justify="center">
                    <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatem at recusandae rem cum, modi vitae voluptate adipisci voluptates nostrum?</p>
                </Grid>
                <Grid container>
                    <Grid item xs="12" md="6">
                        {/* <img src={person} alt="" /> */}
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h6>Justin gaitche</h6>
                            <p><small>CEO & Founder of fucking co</small></p>
                        </div>
                    </Grid>
                    <Grid item xs="12" md="6">
                        {/* <img src={person} alt="" /> */}
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h6>Justin gaitche</h6>
                            <p><small>CEO & Founder of fucking co</small></p>
                        </div>
                    </Grid>
                    <Grid item xs="12" md="6">
                        {/* <img src={person} alt="" /> */}
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quasi labore inventore, qui eaque nesciunt omnis fugiat explicabo esse voluptatem!</p>
                            <h6>Justin gaitche</h6>
                            <p><small>CEO & Founder of fucking co</small></p>
                        </div>
                    </Grid>
                    <Grid item xs="12" md="6">
                        {/* <img src={person} alt="" /> */}
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
