import React, { Component } from 'react';
import styles from "./style.module.scss";
import Profile from "components/Profile";

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Profile />
            </div>
        );
    }
}

export default App;