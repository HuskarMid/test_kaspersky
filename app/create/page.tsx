'use client'

import { useRouter } from 'next/navigation'
import { useAppDispatch } from "../lib/hooks"
import { addSnippet } from "../lib/store/store"
import { IData_SnippetNews, IData_TagItem, IData_TrafficItem } from "../lib/types/types"
import { useState } from "react"
import styles from "./page.module.scss"

import { mockData } from "../lib/data"

export default function Create() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState<IData_SnippetNews>({
        ID: Date.now(),
        TI: '',
        AB: '',
        URL: '',
        DOM: '',
        DP: new Date().toISOString(),
        LANG: '',
        REACH: 0,
        KW: mockData.KW,
        AU: [],
        CNTR: '',
        CNTR_CODE: '',
        SENT: '',
        TRAFFIC: [],
        FAV: '',
        HIGHLIGHTS: mockData.HIGHLIGHTS,
        DUPLICATES: 0
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addSnippet(formData))
        router.push('/components')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleAuthorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const authors = e.target.value.split(',').map(author => author.trim())
        setFormData(prev => ({ ...prev, AU: authors }))
    }

    return (
        <div className={styles.container}>
            <h1>Создать новую новость</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Заголовок:</label>
                    <input
                        type="text"
                        name="TI"
                        value={formData.TI}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Содержимое:</label>
                    <textarea
                        name="AB"
                        value={formData.AB}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>URL:</label>
                    <input
                        type="url"
                        name="URL"
                        value={formData.URL}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Домен:</label>
                    <input
                        type="text"
                        name="DOM"
                        value={formData.DOM}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Язык:</label>
                    <input
                        type="text"
                        name="LANG"
                        value={formData.LANG}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Охват:</label>
                    <input
                        type="number"
                        name="REACH"
                        value={formData.REACH}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Авторы (через запятую):</label>
                    <input
                        type="text"
                        value={formData.AU.join(', ')}
                        onChange={handleAuthorsChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Страна:</label>
                    <input
                        type="text"
                        name="CNTR"
                        value={formData.CNTR}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Код страны:</label>
                    <input
                        type="text"
                        name="CNTR_CODE"
                        value={formData.CNTR_CODE}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Сентимент:</label>
                    <input
                        type="text"
                        name="SENT"
                        value={formData.SENT}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Ссылка на иконку:</label>
                    <input
                        type="text"
                        name="FAV"
                        value={formData.FAV}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Дубликаты:</label>
                    <input
                        type="number"
                        name="DUPLICATES"
                        value={formData.DUPLICATES}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type="submit" className={styles.submitButton}>Создать</button>
            </form>
        </div>
    )
}
