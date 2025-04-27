'use client'

import styles from './DuplicatesSorter.module.scss'

export default function DuplicatesSorter() {
    return (
        <div className={styles.duplicatesSorter}>
            <select name="sort" id="sort">
                <option value="relevance">By Relevance</option>
                <option value="date">By Date</option>
            </select>
        </div>
    )
}
