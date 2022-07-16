import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import YoutubeEmbed from '../helper/YoutubeEmbed';
import { Box } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      Aaren Chu {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function AnsibleScripts() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit' href='/' noWrap>
            <Link href='/' color='inherit'>
              Aaren Chu's Portfolio{' '}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Ansible Scripts for Automating Publication
            </Typography>
            <Box alignSelf='center' alignContent='center' alignItems='center'>
              <YoutubeEmbed align='center' embedId='zXolxe0tMHY' />
              <h5>
                {' '}
                Fig. 1: Video demo on how to utilize the scripts I wrote.
              </h5>
            </Box>
            <Typography
              variant='p'
              align='left'
              color='textSecondary'
              paragraph
            >
              These scripts were created for a different team in the company who
              had originally manually uploaded and published data by themselves.
              I was required to complete this service after a month, which was
              the deadline my manager had given me. I developed scripts using
              Ansible and based some of my work off of the previous work that
              had been written by a previous co-op student and my work term
              supervisor. For this project, I needed my programming skills to
              learn how to write scripts in Ansible. Despite Ansible being a new
              tool for me, I was able to apply other basic programming concepts
              while writing the scripts. Also, I needed my problem solving
              skills when I faced implementing a feature that was unfamiliar to
              me. In addition, I needed my communication skills, since I needed
              to consult both my supervisor and my coworker when it came to
              meeting the needs of the project. This project was completed by
              the time of the demo. After the demo, I received congratulatory
              remarks from my work term supervisor. I also received a thank you
              email from some of the members of the other team for whom the
              scripts were written. My project allowed for the other team to
              automate their work in publishing data to the database. Through
              this project, I developed my demo presentation skills, such as
              rehearsing my presentation and filming my demo as seen in the
              artifact. In addition, I improved on my programming skills
              furthering my repertoire with a new tool.
            </Typography>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
