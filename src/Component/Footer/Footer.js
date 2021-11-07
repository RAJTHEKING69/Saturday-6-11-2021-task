import Footernav from "./Footernav"
import styles from "./footer.module.css"
function Footer() {
    return (
        <div className={styles.Imagelogo__content}>
            
            <div >
                <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="AchieversIT__logo" /><br />
                <p className='text-secondary mt-3 p-3'>AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.</p>
            </div>
            <div>
                <Footernav name = "COMPANY" li1 = "HOME" li2 = "PLACEMENTS" li3 = "CORPORATE TRAINING" li4 = "CONTACT US"/>
            </div>
            <div>
            <Footernav name = "TRENDING COURSES" li1 = "UI DEVELOPMENT COURSE" li2 = "ANDULAR JS COURSE" li3 = "REACTJS COURSE" li4 = "DIGITAL MARKETING COURSE" li5 = "PYTHON COURSE"/>
            </div>
            <div>
            <Footernav name = "CONTACT INFO" li1 = "#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029" li2 = "India : +91 8431-040-457" li3 = "Info@achieversit.com" />
            </div>
        </div>
    )
}

export default Footer