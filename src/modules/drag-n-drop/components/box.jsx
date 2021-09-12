import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  block: props => ({
    height: 150,
    width: 150,
    margin: 10,
    border: 'solid 3px black',
    background: props.isOver ? '#333' : 'white',
    borderColor: props.isOver ? 'white' : 'black',
    borderStyle: props.isOver ? 'dashed' : 'solid',
  }),
  content: {
    backgroundImage: 'url("https://source.unsplash.com/random/150x150")',
    height: 145,
    width: 145,
    cursor: 'pointer',
  },
});

const Box = ({ active, id, onDrop }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.id) {
        onDrop(dropResult.id);
      } else {
        onDrop(item.id);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'box',
    drop: () => ({ id }),
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  }));

  const classes = useStyles({ isOver });

  return (
    <div ref={drop} className={classes.block}>
      {active ? (
        <div
          ref={drag}
          className={classes.content}
          style={{ opacity: isDragging ? 0 : 1 }}
        ></div>
      ) : null}
    </div>
  );
};

export default Box;
