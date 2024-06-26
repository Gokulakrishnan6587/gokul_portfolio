import styles from './SkillStyle.module.css'
import checkDark from '../assets/checkmark-dark.svg'
import checkLight from '../assets/checkmark-light.svg'
import SkillList from '../common/SkillList'
import { useTheme } from '../common/ThemeContext'

function Skills() {
  const {theme,toggleTheme}=useTheme();
  const checkMarkIcon = theme === 'light' ? checkLight : checkDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skilllist}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="Javascript"/>
            <SkillList src={checkMarkIcon} skill="React"/>
        </div>
        <hr/>
        <div className={styles.skilllist}>
            <SkillList src={checkMarkIcon} skill="Vue"/>
            <SkillList src={checkMarkIcon} skill="Java"/>
            <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
        </div>
        <hr/>
        <div className={styles.skilllist}>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="Bootstrap"/>
            <SkillList src={checkMarkIcon} skill="Sql"/>
        </div>
        <hr/>
    </section>
  )
}

export default Skills
