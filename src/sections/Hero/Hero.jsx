import styles from './HeroStyles.module.css';
import zachHero from '../../assets/hero.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/ZHuard-WebDevResume-Nov2024.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={zachHero}
          className={styles.hero}
          alt="Profile picture of Zachary Huard"
        />
        <img // light/dark theme switching
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme} 
        />
      </div>
      <div className={styles.info}>
        <h1>
          Zach
          <br />
          Huard
        </h1>
        <h2>Web Developer</h2>
        <span>
          {/*}a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>*/}
          <a href="https://github.com/zhua95" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="www.linkedin.com/in/zachary-huard-633b27281" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Skilled guitarist, cabinetmaker and web/app developer with a passion for problem-solving, precision and design. 
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;