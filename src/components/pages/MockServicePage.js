import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MockServiceDiagram from '../../assets/imgs/MockService_Diagram.png';

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
    marginRight: theme.spacing(2),
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

export default function MockServicePage() {
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
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Mock Service
            </Typography>
            <Box alignItems='center' sx={{ width: '50%', height: '50%' }}>
              <img src={MockServiceDiagram} alt='Mock Service Diagram' />
            </Box>

            <Typography
              variant='p'
              align='left'
              color='textSecondary'
              paragraph
            >
              This service was created for the team to test out the product that
              the rest of the team is working on. I was required to complete
              this service by the time we were to demo the rest of the project
              to the company. I developed the Python scripts, the authorizer
              function, which is written in JavaScript, and the database by
              myself, and the rest I had help from my coworker. He also reviewed
              my code on my scripts. For this project, I needed my research
              skills to find how to develop a schema for a NoSQL database like
              DynamoDB. I also needed my programming skills to write clean
              Python scripts, unit tests and the JavaScript Lambda Authorizer
              function. In addition, I needed my communication skills, since I
              needed to consult both my supervisor and my coworker when it came
              to meeting the needs of the project. This project was completed by
              the time of the demo. Following the code review, I received
              positive feedback from my coworker, and after the demo, the team
              all received a thank you e-mail from our manager and project
              manager. My project allowed for our team to demo the product from
              end to end. Through this project, I learned of all the many
              different tools from AWS, such as the API Gateway, Lambda
              functions, and DynamoDB. I also developed my demo presentation
              skills, such as creating PowerPoint slides and rehearsing my
              presentation, when I had the opportunity to demo my project to the
              rest of the company. In addition, I improved on my programming
              skills after writing in both Python and JavaScript.
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
