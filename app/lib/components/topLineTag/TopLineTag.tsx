import s from "./TopLineTag.module.scss";

const TopLineTag = ({info}: {info: string}) => {
    if (info.toLowerCase() === 'positive') {
        return (
            <div className={s.tag} style={{backgroundColor: '#36ff94'}}>{info}</div>
        )
    }
    if (info.toLowerCase() === 'negative') {
        return (
            <div className={s.tag} style={{backgroundColor: '#ff3636', color: '#fff'}}>{info}</div>
        )
    }

    return (
        <div className={s.tag} style={{backgroundColor: '#9e9e9e'}}>{info}</div>
    )
}

export default TopLineTag;
