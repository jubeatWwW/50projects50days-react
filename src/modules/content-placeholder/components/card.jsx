import { styled } from '@material-ui/styles';

export const Card = styled('div')({
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  borderRadius: 10,
  overflow: 'hidden',
  width: 350,
});

export const CardHeader = styled('div')({
  height: 200,
  '& img': {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
});

export const CardContent = styled('div')({
  backgroundColor: '#fff',
  padding: 30,
});

export const CardTitle = styled('div')({
  height: 20,
  margin: 0,
});

export const CardExcerpt = styled('div')({
  color: '#777',
  margin: '10px 0 20px',
})
