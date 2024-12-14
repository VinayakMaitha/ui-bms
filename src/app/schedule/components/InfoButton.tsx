'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../schedule.module.css';

const InfoButton = ({ title, route }: { title: string; route: string }) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(route)} className={styles.infoButton}>
      {title}
    </button>
  );
};

export default InfoButton;
