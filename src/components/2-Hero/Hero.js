import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import Image from 'next/image'
import profilePic from '/public/me2.png'
import sign from '/public/sign.svg'
import styles from './style.module.css'
import { FiFacebook, FiTwitter, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import AOS from 'aos';
import "aos/dist/aos.css"


export default function Hero() {

    useEffect(() => {
        AOS.init({
            // initialise with other settings
            duration: 1000,
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
                    <div data-aos="fade-in" data-aos-delay="500" className={styles.imageContainer}>
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
                        <div data-aos="fade-left" data-aos-delay="1100" className={styles.socialLink}>
                            <a href="https://join.skype.com/invite/VLF0V7ZED15A">S</a>
                            <a href="https://www.facebook.com/real.bangali.1/"><FiFacebook /></a>
                            <a href="#"><FiTwitter /></a>
                            <a href="https://www.linkedin.com/in/billah1/"><FiLinkedin /></a>
                            <a href="#"><FiInstagram /></a>
                            <a href="https://github.com/politeboys"><FiGithub /></a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
