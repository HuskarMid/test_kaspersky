import styles from "./page.module.scss";

const About = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <h1>Test task for Kaspersky</h1>
                <ul>
                    <li>Next.js</li>
                    <li>Redux-persist</li>
                    <li>TypeScript</li>
                    <li>Antd icons</li>
                    <li>Reusable snippet</li>
                </ul>
            </div>
        </div>
    )
}

export default About;
