import styles from './HeroStyle.module.css'
import heroImg from '../../assets/gokul_profile.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Head() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
    <section id='hero' className={styles.container}>
    <div className={styles.colormodecontainer}>
        <img className={styles.hero} src={heroImg} alt="Profile of gokul" />
        <img className={styles.colormode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
    </div>
    <div className={styles.info}>
        <h1>Gokula Krishnan</h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href="https://x.com/Gokulak08612388?t=QsO7skcV6VilmeoxNDeSag&s=08" target='_blank'>
                <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href="https://github.com/Gokulakrishnan6587" target='_blank'>
                <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/gokul2706" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
        </span>
        <p className={styles.des}>With a passion for developing modern React web apps for commercial business.</p>
        <a href={cv} download>
            <button className='hover'>Resume</button>
        </a>
    </div>
    </section>
  )
}

export default Head
