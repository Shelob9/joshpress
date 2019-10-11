import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image'
import Container from '@material-ui/core/Container';
import Post from './Post';

const useStyles = makeStyles(theme => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));
  





export default function Blog({posts}) {
  const classes = useStyles();

  return (
    
      <Container maxWidth="lg">
        
            <main>
                {posts.map( ({node:post}) => <Post post={post} key={post.id}  />)}

            </main>
        <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </Container>
        </footer>
      </Container>
  );
}