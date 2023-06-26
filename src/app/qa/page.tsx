import { ReactNode } from 'react';
import styles from './page.module.css';
import { Question } from '@/components/Question/Question';

export default function Page() {
  interface QA {
    head: string,
    text: string
  };

  const data: QA[] = [
    {
      head: 'Что такое Билетопоиск?',
      text: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
    },

    {
      head: 'Какой компании принадлежит Билетопоиск?',
      text: 'Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий Суханов. Владельцем проекта являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис купила компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей на то время).'
    },

    {
      head: 'Как купить билет на Билетопоиск?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    {
      head: 'Как оставить отзыв на Билетопоиск?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];

  return (
    <>
      <h2 className={styles.header}>Вопросы-ответы</h2>

      <ul className={styles.list}>
        { data.map((qa, index) => {
          return (
            <li className={styles.list__item} key={index}>
              <Question head={qa.head} text={qa.text}/>
            </li>
          );
        }) as ReactNode[] }
      </ul>
    </>
  );
};