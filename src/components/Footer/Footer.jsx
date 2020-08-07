import React, { useState } from 'react';
import {
    Switch,
    FormControlLabel,
    Typography,
    Collapse
} from '@material-ui/core';
import FormCopyright from '../FormCopyRight/FormCopyRight';
import FooterCollapse from '../FooterCollapse/FooterCollapse';
import styles from './Footer.module.css';


export default function Footer() {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);

    }

    return (
        <footer className={styles.footer}>
            <FormCopyright />
            <Typography variant="body2" align="center" color="textSecondary">
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                />
                Show Sitemap
            </Typography>
            <Collapse in={checked} >
                <FooterCollapse />
            </Collapse>
        </footer>
    )
}