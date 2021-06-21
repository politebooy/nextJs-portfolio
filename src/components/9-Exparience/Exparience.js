import React from 'react'
import Section from '../4-Section/Section'
import styles from './styles.module.css'
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const data = [
    { id: 1, companny: "Fiverr", position: 'Freelance Web Developer', details: { 1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda voluptates, voluptatibus dolor harum, blanditiis optio pariatur magnam quasi unde animi sapiente nisi itaque impedit atque consequatur. Asperiores, amet laboriosam?", 2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda voluptates, voluptatibus dolor harum, blanditiis optio pariatur magnam quasi unde animi sapiente nisi itaque impedit atque consequatur. Asperiores, amet laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.", 3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda voluptates, voluptatibus dolor harum, blanditiis optio pariatur magnam quasi unde animi sapiente nisi itaque impedit atque consequatur." } },
    { id: 1, companny: "Upwork", position: 'Front End developer', details: { 3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda voluptates, voluptatibus dolor harum, blanditiis optio pariatur magnam quasi unde animi sapiente nisi itaque impedit atque consequatur. Asperiores, amet laboriosam?", 1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda voluptates, voluptatibus dolor harum, blanditiis optio pariatur magnam quasi unde animi sapiente nisi itaque impedit atque consequatur. Asperiores, amet laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.", 2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda voluptates, voluptatibus dolor harum, blanditiis optio pariatur magnam quasi unde animi sapiente nisi itaque impedit atque consequatur." } },
    { id: 1, companny: "Freelancer", position: 'Freelance Web Developer', details: { 1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda voluptates, voluptatibus dolor harum, blanditiis optio pariatur magnam quasi unde animi sapiente nisi itaque impedit atque consequatur. Asperiores, amet laboriosam?", 2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda voluptates, voluptatibus dolor harum, blanditiis optio pariatur magnam quasi unde animi sapiente nisi itaque impedit atque consequatur. Asperiores, amet laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.", 3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda voluptates, voluptatibus dolor harum, blanditiis optio pariatur magnam quasi unde animi sapiente nisi itaque impedit atque consequatur." } },
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};




export default function Exparience() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div className={styles.container}>
            <Section title="Exparience">
                <div className={styles.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={styles.tabs}
                        data-aos="fade-left"
                    >
                        {data.map((item, i) => (
                            <Tab className={styles.tab} label={item.companny} />
                        ))}
                    </Tabs>

                    {data.map((item, i) => (
                        <TabPanel value={value} index={i} className={styles.tabPanel} data-aos="fade-right">
                            <h3>{item.position}</h3>
                            <h4>{item.companny}</h4>
                            <h5>{ Date()}</h5>
                            <p>{item.details[1]}</p>
                            <p>{item.details[2]}</p>
                            <p>{item.details[3]}</p>
                        </TabPanel>
                    ))}
                </div>
            </Section>
        </div>
    )
}
