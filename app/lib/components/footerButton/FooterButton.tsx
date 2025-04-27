'use client'

import styles from './FooterButton.module.scss'
import { useState } from 'react'

export const FooterButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.footerButton} onClick={() => setIsOpen(!isOpen)}>
            <p className={isOpen ? styles.footerButton__arrowUp : styles.footerButton__arrowDown}>View Duplicates</p>
        </div>
    )
}
