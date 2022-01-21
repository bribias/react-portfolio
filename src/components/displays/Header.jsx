import React, { Component } from 'react';
import bb from '../../assets/logo.png';
import styles from '../../styles/app.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <img className={styles.logo} src={bb} alt="initials icon" />
            </header>
        )
    }
}