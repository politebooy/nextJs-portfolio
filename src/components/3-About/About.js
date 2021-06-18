import { Grid } from '@material-ui/core'
import React from 'react'
import Section from '../4-Section/Section'
import classes from './styles.module.css'

export default function About() {

    return (
        <div className={classes.container}>
            <Section title="Little Description" route="about">
                <Grid data-aos="fade-in" container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <h3>About me</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium pariatur nemo voluptatibus dolor similique minima quam excepturi architecto magni tempore fuga deserunt distinctio quidem aperiam nesciunt, debitis vel voluptatem. Asperiores earum dignissimos deserunt possimus mollitia tenetur iste rerum id modi sed. Totam, animi quibusdam laborum veniam ea voluptatibus laudantium?</p>
                        <p className="dsk">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, adipisci mollitia. Esse, eum asperiores! Doloremque, accusantium, cupiditate unde mollitia provident veniam vitae, quae optio odio odit velit cum corrupti pariatur!</p>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <h3>And my Desire</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, soluta quae? Sint illo voluptatum, laborum veniam ipsa recusandae modi ipsam unde excepturi quisquam perferendis, nostrum error cupiditate dolore magni fugiat assumenda velit. Aspernatur quaerat cumque consequuntur, saepe eos neque mollitia, maiores fugiat natus dolor eligendi vel perspiciatis ad sequi enim accusamus iusto culpa illo repellat commodi minus quasi praesentium! Molestiae voluptate, hic accusamus eius fugiat pariatur deserunt quidem sunt, reprehenderit aliquam nostrum. Eveniet consectetur, sequi repellendus modi reprehenderit aperiam vel est quas non dicta nam nemo voluptas laborum eligendi debitis, voluptates impedit qui eaque delectus. Ducimus dolore voluptatem nostrum consequuntur.</p>
                    </Grid>
                </Grid>
            </Section>
        </div>
    )
}
