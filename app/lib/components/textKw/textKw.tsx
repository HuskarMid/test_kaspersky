'use client'

import { useState } from "react";
import s from "./textKw.module.scss";

const TextKw = ({text}: {text: string[]}) => {

    const [isFull, setIsFull] = useState(false);
    const processText = (text: string) => {
        const parts = text.split(/(<kw>.*?<\/kw>)/g);
        return parts.map((part, index) => {
            if (part.startsWith('<kw>') && part.endsWith('</kw>')) {
                const content = part.slice(4, -5);
                return <span key={index} className={s.textKw__keyword}>{content}</span>;
            }
            return part;
        });
    };

    const getFullText = (isFull: boolean) => {
        if (isFull) {
            return text.map((line, index) => (
                <div key={index}>{processText(line)};</div>
            ));
        }
        
        // Объединяем все строки в одну
        const fullText = text.join(' ');
        // Берем первые 100 символов
        const shortText = fullText.slice(0, 400);
        // Разбиваем обратно на строки по переносам строк
        const shortLines = shortText.split('\n');
        
        return shortLines.map((line, index) => (
            <div key={index}>{processText(line)};</div>
        ));
    }

    return (
        <div className={s.textKw}>
            {getFullText(isFull)}
            <a onClick={() => setIsFull(!isFull)} className={isFull ? s.textKw__arrowUp : s.textKw__arrowDown}>
                {isFull ? 'Hide' : 'Show more'}
            </a>
        </div>
    )
}

export default TextKw;
