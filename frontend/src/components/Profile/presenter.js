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
                        <li><span className={styles.icon}><IosPhonePortrait fontSize="30px" color="#3e3e3e" /></span><a href="tel:010-9914-9055">010-9914-9055</a></li>
                        <li><span className={styles.icon}><IosMailOutline fontSize="30px" color="#3e3e3e" /></span><a href="mailto:jjun0214z@gmail.com">jjun0214z@gmail.com</a></li>
                        <li><span className={styles.icon}><LogoGithub fontSize="30px" color="#3e3e3e" /></span><a href="https://github.com/jjun0214z" target="_blank">https://github.com/jjun0214z</a></li>
                        <li><span className={styles.icon}><IosCode fontSize="30px" color="#3e3e3e" /></span><a href="https://jjun0214z.github.io/resume" target="_blank">https://jjun0214z.github.io/resume</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.title}><span>INTRODUCE</span></div>
                <div className={styles.txtWrap}>
                    <p>웹퍼블리싱 및 프론트개발을 SI회사 및 개인프리랜서 활동으로 다양한 프로젝트 경험이 있습니다.<br/>UI개발 및 프론트에서의 성능을 이끌수 있도록 확장성을 가진 디자인패턴을 위해 노력하고 있습니다.</p>
                    <p>저는 신규기술에 관심이 많고, 항상 발전하는 개발자로 거듭나기 위해 학습을 게을리 하지 않습니다. <br/>또한 새로운 트렌트에 대응할수 있도록 귀를 기울이고 있습니다. <br/>무수히 진보되는 개발기술 속에서 현재의 기술의 경험치보다, 새로운 기술을 접하였을때 빠르게 소화하여 제대로 사용할수있도록 끊임없이 노력하고 있습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;