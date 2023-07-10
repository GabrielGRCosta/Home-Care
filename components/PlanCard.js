import styles from '../styles/PlanCard.module.css';
import { BiCalendarWeek, BiCalendarEvent, BiChart, BiInfinity, BiPuzzle, BiWrench } from 'react-icons/bi';
import Link from 'next/link';


const PlanCard = ({ plan, title, description }) => {

  let IconComponent;

  if (plan === 'weekly') {
    IconComponent = BiCalendarWeek;
  } else if (plan === 'monthly') {
    IconComponent = BiChart;
  } else if (plan === 'annual') {
    IconComponent = BiCalendarEvent;
  } else if (plan === 'custom') {
    IconComponent = BiWrench;
  }


  return (
    <div className={`${styles.card} ${styles[plan]}`}>
      <div className={styles['card-icon']}>
        <IconComponent size={30}></IconComponent>
      </div>
      <div className={styles['card-title']}>{title}</div>
      <div className={`${styles['card-description']} ${styles['card-description-fixed-height']}`}>{description}</div>
      <Link className={styles['card-button']} href={`/Detalhes?plano=${title}`}>
        Saiba mais
      </Link>
    </div>
  );
};

export default PlanCard;
