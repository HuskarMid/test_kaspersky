'use client'

import { useAppSelector } from "../lib/hooks";
import Element from "../lib/elements/Element";
import styles from "./page.module.scss";

export default function Components() {
    const snippets = useAppSelector(state => state.snippets.list)
    return (
        <div className={styles.main}>
            {snippets.map((item, index) => (
                <Element key={index} data={item} />
            ))}
        </div>
    )
}