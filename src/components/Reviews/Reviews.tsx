'use client';

import { useGetReviewsQuery } from "@/redux/services/movie.api";
import { FunctionComponent, ReactNode } from "react";
import { Review } from "../Review/Review";
import styles from './Reviews.module.css';

interface Props {
  id: string
};

interface Review {
  id: string,
  name: string,
  text: string,
  rating: number,
  imageUrl?: string
};

export const Reviews: FunctionComponent<Props> = ({id}) => {
  const { data, isLoading, error } = useGetReviewsQuery(id);

  let reviewsList: ReactNode[] = [];

  if (isLoading) { 
    reviewsList = Array.from({length: 2}, (_, index) => <Review key={index} isLoading={true} />);
  }
  else if (error) {
    reviewsList = [<li key={1}>Ошибка при попытке загрузки отзывов :(</li>];
  }
  else {
    reviewsList = data.map((review: Review) => {
      return <Review key={review.id} name={review.name} text={review.text} rating={review.rating} imageUrl={review.imageUrl} />
    });
  }

  return (
    <ul className={styles.reviewsList}>
      {reviewsList}
    </ul>
  );
};