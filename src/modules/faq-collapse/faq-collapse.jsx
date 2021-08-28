import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Collapse from './components/collapse';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f0f0f0',
    height: 'var(--content-height)',
    overflow: 'hidden',
  },
  heading: {
    margin: '50px 0 30px',
    textAlign: 'center',
  },
  container: {
    maxWidth: 600,
    margin: '0 auto',
  },
});

const faqs = [
  {
    title: "Why shouldn't we trust atoms?",
    content: 'They make up everything',
  },
  {
    title: 'What do you call someone with no body and no nose?',
    content: 'Nobody knows.',
  },
  {
    title: "What's the object-oriented way to become wealthy?",
    content: 'Inheritance.',
  },
  {
    title: 'How many tickles does it take to tickle an octopus?',
    content: 'Ten-tickles!',
  },
  {
    title: 'What is: 1 + 1?',
    content: 'Depends on who are you asking.',
  },
];

const FaqCollapse = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Frequently Asked Questions</h1>
      <div className={classes.container}>
        {faqs.map((faq, index) => (
          <Collapse title={faq.title} key={index} index={index}>
            {faq.content}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default FaqCollapse;
