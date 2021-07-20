import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import Image from 'next/image'
import profilePic from '/public/me2.png'
import sign from '/public/sign.svg'
import styles from './style.module.css'
import AOS from 'aos';
import "aos/dist/aos.css"
import SocialLink from '../SocialLink/SocialLink'


export default function Hero() {

    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration: 2000,
            once: true,
            delay: 200
        });
        // AOS.refresh();
    }, [])

    return (
        <div id="hero" class="div">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <Grid className={styles.container} container>
                <Grid item xs={12} md={5}>
                    <div data-aos="fade-in" className={styles.imageContainer}>
                        <Image src={profilePic} alt="Picture of the author" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ color: '#fff' }}>
                    <div className={styles.details}>
                        <h2 data-aos="fade-left" data-aos-delay="700" className={styles.name}>Hi! I am mukim billah</h2>
                        <h2 data-aos="fade-left" data-aos-delay="800" className={styles.title}>I build and design <br></br> website</h2>
                        <h4 data-aos="fade-left" data-aos-delay="900" className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam necessitatibus amet vitae ex iusto!</h4>
                        <div data-aos="fade-left" data-aos-delay="1000" className={styles.sign}>
                            <Image src={sign} alt="Picture of the author" />
                        </div>
                        <SocialLink aos="fade-left" delay="1100"/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
