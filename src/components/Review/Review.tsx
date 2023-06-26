import { FunctionComponent, ReactNode } from "react"
import { NoImageSvg } from "../NoImageSvg/NoImageSvg";
import Image from 'next/image';
import '../../styles/loading.css';
import '../../styles/image.css';
import styles from './Review.module.css';

interface Props {
  name?: string,
  text?: string,
  rating?: number,
  imageUrl?: string,
  isLoading?: boolean
};

export const Review: FunctionComponent<Props> = ({name = 'Без имени', text, rating, imageUrl, isLoading}) => {
  let review: ReactNode;

  if (isLoading) {
    review = 
      <li className={styles.review + ' loading'}>
        <div className={styles.image + ' image'}></div>

        <span className={styles.head}>
          <h3></h3>
          <span></span>
        </span>

        <p className={styles.text}></p>
      </li>
  }
  else {
    review = 
      <li className={styles.review}>
        <div className={styles.image + ' image'}>
          { imageUrl ? <Image className='image__inner' src={imageUrl} width={100} height={100} alt="profile image" /> : <NoImageSvg /> }
        </div>

        <span className={styles.info}>
          <span className={styles.head}>
            <h3>{name}</h3>
            <span>Оценка: <h3>{rating}</h3></span>
          </span>

          <p className={styles.text}>{text}</p>
        </span>
      </li>;
  }

  return review;
}