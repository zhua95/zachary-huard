import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import reactIcon from '../../assets/react-svgrepo-com.svg';
import jsIcon from '../../assets/js-svgrepo-com.svg';
import htmlIcon from '../../assets/html-svgrepo-com.svg';
import nodeIcon from '../../assets/node-js-svgrepo-com.svg';
import phpIcon from '../../assets/php2-svgrepo-com.svg';
import cssIcon from '../../assets/css-3-svgrepo-com.svg';
import jqueryIcon from '../../assets/jquery-svgrepo-com.svg';
import awsIcon from '../../assets/aws-svgrepo-com.svg';
import gitIcon from '../../assets/git-svgrepo-com.svg';
import csharpIcon from '../../assets/csharp-svgrepo-com.svg';
import pythonIcon from '../../assets/python-svgrepo-com.svg';
import javaIcon from '../../assets/java-svgrepo-com.svg';
import sqlIcon from '../../assets/sql-svgrepo-com.svg';
import mongoIcon from '../../assets/mongodb-svgrepo-com.svg';
import mariaIcon from '../../assets/mariadb-svgrepo-com.svg';

import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={htmlIcon} skill="HTML" />
            <SkillList src={cssIcon} skill="CSS" />
            <SkillList src={jsIcon} skill="JavaScript" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={reactIcon} skill="React" />
            <SkillList src={jqueryIcon} skill="jQuery" />
            <SkillList src={nodeIcon} skill="Node" />
            <SkillList src={phpIcon} skill="PHP" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={awsIcon} skill="AWS" />
            <SkillList src={gitIcon} skill="Git" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={csharpIcon} skill="C#" />
            <SkillList src={pythonIcon} skill="Python" />
            <SkillList src={javaIcon} skill="Java" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={sqlIcon} skill="SQL" />
            <SkillList src={mongoIcon} skill="MongoDB" />
            <SkillList src={mariaIcon} skill="MariaDB" />
        </div>
        <hr />
        
    </section>
  )
}

export default Skills
