import React, { Component } from 'react';
import styles from "./style.module.scss";
import Profile from "components/Profile";
import Reference from "components/Reference";

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Profile />
                <Reference />
            </div>
        );
    }
}

export default App;