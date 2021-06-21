import { Grid } from '@material-ui/core'
import React from 'react'
import Section from '../4-Section/Section'
import classes from './styles.module.css'

export default function About() {

    return (
        <div className={classes.container}>
            <Section title="Little Description" route="about">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <h3 data-aos="fade-up">About me</h3>
                        {/* My name is mukim billah, district: Bagerhat, i am a freelance web developer */}
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium pariatur nemo voluptatibus dolor similique minima quam excepturi architecto magni tempore fuga deserunt distinctio quidem aperiam nesciunt, debitis vel voluptatem. Asperiores earum dignissimos deserunt possimus mollitia tenetur iste rerum id modi sed. Totam, animi quibusdam laborum veniam ea voluptatibus laudantium?</p>
                        <p className="dsk">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, adipisci mollitia. Esse, eum asperiores! Doloremque, accusantium, cupiditate unde mollitia provident veniam vitae, quae optio odio odit velit cum corrupti pariatur!</p> */}
                        <h4 data-aos="fade-up">I am mukim billah from khulna, bangladesh, i am a freelance web developer i satarted this professon since 2019 and still with it</h4>
                        <p data-aos="fade-up" className="dsk">after hsc exan i admitted Khulna university at history and civilization in 2017 few days later i started learning programming language, and from bigining from 2020 i can't continue at KU because of my programming related study and activity.</p>
                        <hr data-aos="fade-up" style={{ margin: '5px 0' }} />
                        <p data-aos="fade-up">Phone: 01679 401050</p>
                        <p data-aos="fade-up">Gmail: billahmukim@gmail.com</p>
                        <p data-aos="fade-up"><address>Rampal, Bagerhat, Khulna</address></p>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <h3 data-aos="fade-up">And my Desire</h3>
                        <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium pariatur nemo voluptatibus dolor similique minima quam excepturi architecto magni tempore fuga deserunt distinctio quidem aperiam nesciunt, debitis vel voluptatem. Asperiores earum dignissimos deserunt possimus mollitia tenetur iste rerum id modi sed. Totam, animi quibusdam laborum veniam ea voluptatibus laudantium?</p>
                        <br data-aos="fade-up" />
                        <p data-aos="fade-up" className="dsk">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, adipisci mollitia. Esse, eum asperiores! Doloremque, accusantium, cupiditate unde mollitia provident veniam vitae, quae optio odio odit velit cum corrupti pariatur!</p>
                    </Grid>
                </Grid>
            </Section>
        </div>
    )
}
