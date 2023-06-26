import { Film } from '@/components/Film/Film';
import { Reviews } from '@/components/Reviews/Reviews';
import styles from './page.module.css';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      { <Film id={params.id} /> }
      { <Reviews id={params.id} /> }
    </>
  );
}