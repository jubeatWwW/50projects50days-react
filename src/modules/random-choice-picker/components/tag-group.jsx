import React, {
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';

import Tag from './tag';

const TIMES = 30;
const INTERVAL = 100;

const TagGroup = forwardRef((props, ref) => {
  const [active, setActive] = useState(-1);

  const tags = useMemo(
    () => props.text.split(',').map(t => t.trim()),
    [props.text]
  );

  useEffect(() => {
    setActive(-1);
  }, [tags]);

  useImperativeHandle(
    ref,
    () => {
      const random = (times = TIMES) => {
        if (!times) {
          return;
        }

        setActive(Math.floor(Math.random() * tags.length));
        setTimeout(() => {
          random(times - 1);
        }, INTERVAL);
      };

      return { random };
    },
    [tags.length]
  );

  return (
    <div>
      {tags.filter(Boolean).map((tag, index) => (
        <Tag label={tag} key={index} active={index === active} />
      ))}
    </div>
  );
});

TagGroup.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
};

TagGroup.defaultProps = {
  text: '',
  active: -1,
};

export default TagGroup;
