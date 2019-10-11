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


const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      width: '100%'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));
  





function Featured({post}){
    if( ! post.hasOwnProperty('featured_media') || null === post.featured_media) {
      return <React.Fragment />
    }
    const {
      fixed
    } = post.featured_media.localFile.childImageSharp;
    return (
      <Img
        src={post.featured_media.source_url} 
        alt={post.featured_media.alt_text} 
        title={post.featured_media.title}
        fixed={fixed}
        objectFit="cover"
        objectPosition="100% 50%"
  
    />
    )
  }
  
function createMarkup(excerpt) {
  return {__html: excerpt};
}
export default function Post({post}){
    const classes = useStyles();
    const {title,excerpt,slug} = post;
    return (
        <Paper>
            <Featured post={post} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Link component="h2" gutterBottom  href={slug}>
                    {title}
                  </Link>
                  <Typography variant="subtitle1" dangerouslySetInnerHTML={createMarkup(excerpt)} />
                </div>
              </Grid>
            </Grid>
        </Paper>
    )
}
