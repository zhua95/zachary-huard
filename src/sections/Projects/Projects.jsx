import React from 'react'
import viberr from '../../assets/viberr.png';
import atm from '../../assets/atm-card-atm-card-security-atm-pin-locked-card-password-protected-svgrepo-com.svg';
import chatroom from '../../assets/chat-alt-3-svgrepo-com.svg';
import inventory from '../../assets/store-business-and-finance-svgrepo-com.svg';
import styles from '../Projects/ProjectsStyles.module.css';
import game from '../../assets/game-svgrepo-com.svg';
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={atm} link="https://github.com/zhua95/virtual-atm" 
            h3="Virtual ATM (C#)"
            p="Account Manager"/>

            <ProjectCard src={chatroom} link="https://github.com/zhua95/chat-application" 
            h3="Chatroom App (PHP)"
            p="UI with MySql database"/>

            <ProjectCard src={inventory} target ="_blank" link="https://github.com/zhua95/console-inv-manager" 
            h3="Inventory Management(C#)"
            p="CLI"/>

            <ProjectCard src={game} link="https://github.com/zhua95/chat-application" 
            h3="Towers of Hanoi(Java)"
            p="Towers of Hanoi Game (UI)"/>

            
        </div>
    </section>
  )
}

export default Projects
