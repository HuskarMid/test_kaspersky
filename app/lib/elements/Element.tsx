import Image from "next/image";
// FUNC / JSX FUNCTIONS
import { FormatDate } from "../functions/FormatDate";
import { FormatReach } from "../functions/FormatReach";
import { FormatTopCountry } from "../functions/FormatTopCountry";
import { FormatDomain } from "../functions/FormatDomain";
import { getFlagEmoji } from "../functions/GetFlagEmoji";
// COMPONENTS
import {InfoSvg} from "../components/info/infoSvg";
import RectButton from "../components/rectButton/RectButton";
import TopLineTag from "../components/topLineTag/TopLineTag";
import { GlobalOutlined } from "@ant-design/icons";
import TextKw from "../components/textKw/textKw";
import UnderTextTag from "../components/underTextTag/UnderTextTag";
import DuplicatesSorter from "../components/dublicatesSorter/DuplicatesSorter";
import { FooterButton } from "../components/footerButton/FooterButton";

import styles from "./Element.module.scss"
import { IData_SnippetNews } from "../types/types";

export default function Element({data}: {data: IData_SnippetNews}) {
    return (
        <div className={styles.main}>
        <div className={styles.topline}>
          <div className={styles.topline__info}>
            <div className={styles.topline__info__date}>{FormatDate(data.DP)}</div>
            <div className={styles.topline__info__reach}>{FormatReach(data.REACH)}</div>
            <div className={styles.topline__info__topCountry}>{FormatTopCountry(data.TRAFFIC)}</div>
          </div>
          <div className={styles.topline__buttons}>
            <TopLineTag info={`${data.SENT}`} />
            <RectButton><InfoSvg /></RectButton>
            <RectButton></RectButton>
          </div>
        </div>
        <div className={styles.title}>
            <h1>{data.TI}</h1>
        </div>
        <div className={styles.underTitleInfo}>
            <div className={styles.underTitleInfo__item}>
              <GlobalOutlined />
              <a className={styles.underTitleInfo__link}>{FormatDomain(data.DOM)}</a>
            </div>
            <div className={styles.underTitleInfo__item}>
              <div className={styles.underTitleInfo__icon}>{getFlagEmoji(data.CNTR_CODE)}</div>
              <p>{data.CNTR}</p>
            </div>
            <div className={styles.underTitleInfo__item}>
              <Image className={styles.underTitleInfo__icon} src="/book-open.svg" alt="favicon" width={16} height={16} />
              <p>{data.LANG}</p>
            </div>
            <div className={styles.underTitleInfo__item}>
              <Image className={styles.underTitleInfo__icon} src="/user.svg" alt="favicon" width={16} height={16} />
              <p>{data.AU.join(', ')}</p>
            </div>
        </div>
        <div className={styles.textSection}>
          <TextKw text={data.HIGHLIGHTS} />
        </div>
        <div className={styles.underTextTag}>
          <UnderTextTag arr={data.KW} />
        </div>
        <div className={styles.originalSourceButton}>
          <a href={data.URL} target="_blank" rel="noopener noreferrer">Original source</a>
        </div>
        <div className={styles.duplicates}>
          <div className={styles.duplicates__count}>
            <p>Duplicates: </p>
            <span>{data.DUPLICATES}</span>
          </div>
          <DuplicatesSorter />
        </div>
        <div className={styles.blueElement}>
          <div className={styles.blueElement__top}>
              <div className={styles.blueElement__info}>
                <div className={styles.blueElement__info__date}>{FormatDate(data.DP)}</div>
                <div className={styles.blueElement__info__reach}>{FormatReach(data.REACH)}</div>
              </div>
              <div className={styles.blueElement__buttons}>
                <RectButton><InfoSvg /></RectButton>
                <RectButton></RectButton>
              </div>
          </div>
          <div className={styles.blueElement__title}>
            <h1>{data.TI}</h1>
          </div>
          <div className={styles.blueElement__bottom}>
              <div className={styles.blueElement__bottom__item}>
                  <GlobalOutlined />
                  <a className={styles.blueElement__bottom__link}>{FormatDomain(data.DOM)}</a>
              </div>
              <div className={styles.blueElement__bottom__item}>
                  <div className={styles.blueElement__bottom__icon}>{getFlagEmoji(data.CNTR_CODE)}</div>
                  <p>{data.CNTR}</p>
              </div>
              <div className={styles.blueElement__bottom__item}>
                  <Image className={styles.blueElement__bottom__icon} src="/user.svg" alt="favicon" width={16} height={16} />
                  <p>{data.AU.join(', ')}</p>
              </div>
          </div>
        </div>
        <FooterButton />
      </div>
    )
}