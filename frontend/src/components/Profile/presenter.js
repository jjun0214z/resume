import React from 'react';
import IosPhonePortrait from 'react-ionicons/lib/IosPhonePortrait';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import IosCode from 'react-ionicons/lib/IosCode';
import styles from "./style.module.scss";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div className={styles.column}>
                <div className={styles.photo}><img src={require("images/min_photo.jpg")} alt="min" /></div>
                <div className={styles.userInfo}>
                    <p className={styles.name}>박준민 <span className={styles.small}>Junmin Park</span></p>
                    <ul className={styles.info}>
                        <li><span className={styles.icon}><IosPhonePortrait fontSize="30px" color="#3e3e3e" /></span>010-9914-9055</li>
                        <li><span className={styles.icon}><IosMailOutline fontSize="30px" color="#3e3e3e" /></span>jjun0214z@gmail.com</li>
                        <li><span className={styles.icon}><LogoGithub fontSize="30px" color="#3e3e3e" /></span>https://github.com/jjun0214z</li>
                        <li><span className={styles.icon}><IosCode fontSize="30px" color="#3e3e3e" /></span>https://jjun0214z.github.io/resume</li>
                    </ul>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.title}><span>INTRODUCE</span></div>
                <div className={styles.txtWrap}>
                    <p>안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다</p>
                    <p>안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다안녕하세요 박준민입니다</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;