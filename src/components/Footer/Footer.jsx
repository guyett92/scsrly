import React from 'react';
import FormCopyright from '../FormCopyRight/FormCopyRight';
import styles from './Footer.module.css';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <FormCopyright />
        </footer>
    )
}