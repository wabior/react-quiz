import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={`${styles.header} d-none d-md-block`}>
            Witaj na stronie Quizu
        </header>
    );
}

export default Header;