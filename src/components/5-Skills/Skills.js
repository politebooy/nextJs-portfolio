import { Grid } from '@material-ui/core'
import React from 'react'
import Section from '../4-Section/Section'
import styles from './styles.module.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingProgressProvider";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import { easeQuadInOut } from "d3-ease";

export default function Skills() {


    return (
        <div className={styles.container}>
            <Section title="Acquired skills" route="skills">
                <Grid container>
                    <Grid item style={{ padding: '30px' }} md="2">
                        <div  data-aos="zoom-in">
                        <CircularProgressbar
                            value="75"
                            text={`75%`}
                            strokeWidth={7}
                            styles={buildStyles({
                                pathTransition: "none",
                                pathColor: "rgb(0, 247, 255)",
                                trailColor: "rgba(0, 247, 255, .1)"
                            })}
                        />
                        </div>
                        <h3>Javascript & ECMAScript</h3>
                    </Grid>

                    <Grid item style={{ padding: '30px' }} md="2">
                        <ChangingProgressProvider
                            values={[80, 82, 84, 86]}
                            duration={1.8}
                        >
                            {percentage => (
                                <div  data-aos="zoom-in">
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    strokeWidth={7}
                                    styles={buildStyles({
                                        pathTransition: "none",
                                        pathColor: "rgb(28, 255, 7)",
                                        trailColor: "rgba(28, 255, 7, .1)"
                                    })}
                                />
                                </div>
                            )}
                        </ChangingProgressProvider>
                        <h3>React & Redux</h3>
                    </Grid>

                    <Grid item style={{ padding: '30px' }} md="2">
                        <div  data-aos="zoom-in">
                        <CircularProgressbar
                            value="70"
                            text={`70%`}
                            strokeWidth={7}
                            styles={buildStyles({
                                pathTransition: "none",
                                pathColor: "rgb(255, 18, 223)",
                                trailColor: "rgba(255, 18, 223, .1)"
                            })}
                        />
                        </div>
                        <h3>Node & Express js</h3>
                    </Grid>

                    <Grid item style={{ padding: '30px' }} md="2">
                        <div  data-aos="zoom-in">
                        <CircularProgressbar
                            value="40"
                            text={`40%`}
                            strokeWidth={7}
                            styles={buildStyles({
                                pathColor: "rgb(255, 18, 18)",
                                trailColor: "rgba(255, 18, 18, .1)",
                            })}
                        />
                        </div>
                        <h3>MongoDB, Firebase</h3>
                    </Grid>

                    <Grid item style={{ padding: '30px' }} md="2">
                        <div  data-aos="zoom-in">
                        <CircularProgressbar
                            value="85"
                            text={`85%`}
                            strokeWidth={7}
                            styles={buildStyles({
                                pathTransition: "none",
                                pathColor: "gold",
                                trailColor: "rgba(255, 18, 223, .1)"
                            })}
                        />
                        </div>
                        <h3>Next js & Material-ui</h3>
                    </Grid >

                    <Grid item style={{ padding: '30px' }} md="2">
                        <div  data-aos="zoom-in">
                        <CircularProgressbar
                            value="80"
                            text={`80%`}
                            strokeWidth={7}
                            styles={buildStyles({
                                pathColor: "#263569",
                                trailColor: "#92a4e4",
                            })}
                        />
                        </div>
                        <h3>Wordpress</h3>
                    </Grid >
                </Grid >
            </Section >
        </div >
    )
}
