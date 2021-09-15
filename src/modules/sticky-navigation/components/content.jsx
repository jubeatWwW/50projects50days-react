import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  heading: {
    fontSize: '150%',
    margin: '20px 0',
  },
  paragraph: {
    color: '#555',
    lineHeight: '30px',
    letterSpacing: 1.2,
  },
});

const Content = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <h2 className={classes.heading}>Content One</h2>
      <p className={classes.paragraph}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
        dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
        quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
        officia aperiam corporis similique. Facilis quos tempore labore totam!
        Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
        modi dolorem sit architecto, voluptate magni sunt unde est quas?
        Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
        libero laboriosam ab eligendi omnis delectus earum labore, placeat
        officiis sint illum rem voluptas ipsum repellendus iste eius recusandae
        quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et
        iste dolorum obcaecati minus odio eligendi!
      </p>

      <h3 className={classes.heading}>Content Two</h3>
      <p className={classes.paragraph}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        provident nostrum possimus inventore nisi laboriosam consequatur modi
        nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
        provident, voluptates illo odio nostrum minima beatae similique a sint
        sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
        quae iste aperiam hic cumque repellat?
      </p>
    </section>
  );
};

export default Content;
