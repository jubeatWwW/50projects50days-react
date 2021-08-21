import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';

import Card from './components/card';

const cards = [
  {
    title: 'Explore The World',
    imageId: 'photo-1558979158-65a1eaa08691',
  },
  {
    title: 'Wild Forest',
    imageId: 'photo-1572276596237-5db2c3e16c5d',
  },
  {
    title: 'Sunny Beach',
    imageId: 'photo-1507525428034-b723cf961d3e',
  },
  {
    title: 'City on Winter',
    imageId: 'photo-1551009175-8a68da93d5f9',
  },
  {
    title: 'Mountains - Clouds',
    imageId: 'photo-1549880338-65ddcdfd017b',
  },
];

const useStyles = makeStyles({
  container: {
    display: 'flex',
    overflow: 'hidden',
  },
});

export default function ExpandingCards() {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  const handleClick = useCallback(index => {
    setActive(index);
  }, []);

  return (
    <div className={classes.container}>
      {cards.map((card, index) => (
        <Card
          key={index}
          onClick={() => handleClick(index)}
          {...card}
          active={index === active}
        />
      ))}
    </div>
  );
}
