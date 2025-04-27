'use client'

import { IData_TagItem } from "../../types/types";
import { useState } from "react";
import s from "./UnderTextTag.module.scss";
const UnderTextTag = ({arr}: {arr: IData_TagItem[]}) => {
    const [isFull, setIsFull] = useState(false);
    const newArr = isFull ? arr : arr.slice(0, 6);
    return (
        <div className={s.UnderTextTag}>
            {newArr.map((item, index) => (
                <div key={index} className={s.UnderTextTag__item}>
                    <p>{item.value}</p>
                    <span>{item.count}</span>
                </div>
            ))}
            <a onClick={() => setIsFull(!isFull)} className={isFull ? s.UnderTextTag__arrowUp : s.UnderTextTag__arrowDown}>
                {isFull ? 'Hide' : 'Show all'}
            </a>
        </div>
    )
}

export default UnderTextTag;
