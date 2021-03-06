import { Card, Grid } from '@material-ui/core'
import React from 'react'
import Section from '../4-Section/Section'
import styles from './styles.module.css'
import Image from 'next/image'
import portfolio1 from '/public/images/p1.jpg'
import portfolio2 from '/public/images/p6.jpg'
import portfolio3 from '/public/images/p3.jpg'
import portfolio4 from '/public/images/p4.jpg'

export default function Portfolio() {
    return (
        <div id="portfolio" className={styles.container}>
            <Section title="Portfolios" route="portfolio">
                <Grid container alignItems="center">
                    <Grid data-aos="fade-left" item xs="12" md="6">
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident distinctio sunt deserunt asperiores animi cupiditate maiores molestiae libero dolores similique! Sapiente optio eum minus ex nulla voluptate molestiae repellat placeat.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem ducimus iusto nemo fugit nesciunt. Autem, suscipit a! Sunt velit harum dignissimos reprehenderit nobis? Quod aliquam beatae nam id ratione minus eligendi velit, recusandae illum debitis, veritatis incidunt aliquid cumque, vero iure consequuntur natus! Reiciendis voluptas officia adipisci molestiae, tenetur delectus sint repudiandae eaque explicabo vel neque excepturi, dolores autem. Esse nihil quas eius iste at molestias. Corporis, ipsam aspernatur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nulla dolorem sequi impedit commodi soluta officiis tempora omnis eum harum libero porro et temporibus maiores inventore molestiae architecto obcaecati! Mollitia?</p>
                    </Grid>
                    <Grid className={styles.right} data-aos="zoom-in" container item xs="12" md="6" spacing={3}>
                        <Grid item item xs="6" md="6">
                            <Image src={portfolio1} width={300} height={180} alt="Picture of the author" />
                        </Grid>
                        <Grid item item xs="6" md="6">
                            <Image src={portfolio2} width={300} height={180} alt="Picture of the author" />
                        </Grid>
                        <Grid item item xs="6" md="6">
                            <Image src={portfolio3} width={300} height={180} alt="Picture of the author" />
                        </Grid>
                        <Grid item item xs="6" md="6">
                            <Image src={portfolio4} width={300} height={180} alt="Picture of the author" />
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
        </div>
    )
}
