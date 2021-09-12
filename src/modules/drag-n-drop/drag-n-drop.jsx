import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { makeStyles } from '@material-ui/styles';

import Box from './components/box';

const BLOCKS = 5;

const useStyles = makeStyles({
  root: {
    backgroundColor: 'steelblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'var(--content-height)',
    overflow: 'hidden',
    margin: 0,
    '@media (max-width: 800px)': {
      flexDirection: 'column',
    },
  },
});

const DragNDrop = () => {
  const classes = useStyles();
  const [active, setActive] = useState(1);

  return (
    <div className={classes.root}>
      {[...Array(BLOCKS)].map((_, index) => (
        <Box
          active={index + 1 === active}
          id={index + 1}
          onDrop={id => setActive(id)}
          key={index}
        />
      ))}
    </div>
  );
};

export default function DnD() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragNDrop />
    </DndProvider>
  );
}
