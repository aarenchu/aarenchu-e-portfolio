import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import WorkCertificate from '../../workcertificate.jpg';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Aaren Chu
        {' '}
      {new Date().getFullYear()}
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

export default function JavaMySqlQueryingProgram() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" href="/" noWrap>
            <Link href="/" color="inherit">Aaren Chu's Portfolio </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Java MySQL Querying Program
            </Typography>
            <img src={WorkCertificate} alt="Certificate from Work" />
            <Typography variant="p" align="left" color="textSecondary" paragraph>
                This program is a part of a health data access program for citizens in the
                Atlantic provinces.
                I was required to complete this project by the time we were to demo to the client.
                I used an Amazon Cloud (AWS) environment to provision a relational database (RDS) and import clinical data.
                I wrote most of the Java code to connect to the database using a framework, and I also populated the table with data
                given to us by the clients, using MySQL statements.
                I wrote Java code for retrieving data from the RDS database using a Java SQL framework (JOOQ).
                I used GitHub for version control.  After completing and testing the code, I submitted a pull request for my code branch  and my coworker would review my code before merging it with the rest of the project.
                For this project, I needed my research skills to find which Java MySQL framework to use.
                I also needed my programming skills to write clean Java code and unit tests. 
                In addition, I needed my communication skills, since I needed 
                to consult both my supervisor and my coworker when it came to meeting the needs of the project. This 
                project was completed after the demo since the client requested some changes.
                Our team all received certificates from the company for our good work. Also,
                the client congratulated us after our demo and were pleased. 
                My project played an important role in the product.
                In addition, I improved on my programming skills after writing in Java and some MySQL.
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