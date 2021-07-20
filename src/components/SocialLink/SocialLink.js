import React from 'react'
import styles from './styles.module.css'
import { FiFacebook, FiTwitter, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

export default function SocialLink({aos, delay}) {
    return (
        <div data-aos={aos} data-aos-delay={delay} className={styles.socialLink}>
            <a href="https://join.skype.com/invite/VLF0V7ZED15A">S</a>
            <a href="https://www.facebook.com/real.bangali.1/"><FiFacebook /></a>
            <a href="#"><FiTwitter /></a>
            <a href="https://www.linkedin.com/in/billah1/"><FiLinkedin /></a>
            <a href="#"><FiInstagram /></a>
            <a href="https://github.com/politeboys"><FiGithub /></a>
        </div>
    )
}
