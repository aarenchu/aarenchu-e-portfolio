import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MockServiceDiagram from '../../MockService_Diagram.png';
import WorkCertificate from '../../workcertificate.jpg';
import AnsibleScriptsThumbnail from '../../ansiblescriptsthumbnail.png';

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

export default function Album() {
    const classes = useStyles();
    return(
    <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link href="/" color="inherit">Aaren Chu's Portfolio </Link>
                </Typography>
            </Toolbar>
            </AppBar>
            <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Aaren Chu's Portfolio
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Here are my projects in complete detail.
                </Typography>
                
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image={MockServiceDiagram}
                        title="Mock Service Diagram"
                        />
                        <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mock Service
                        </Typography>
                        <Typography>
                        This service was created for the team to test out the product that the rest of the team is working on.
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary" href="/mockservice">
                            View
                        </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image={WorkCertificate}
                        title="Certificate from Work"
                        />
                        <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Java MySQL Querying Program
                        </Typography>
                        <Typography>
                        This program was created for the team based on requirements provided by the client.
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary" href="/javamysqlqueryingprogram">
                            View
                        </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image={AnsibleScriptsThumbnail}
                        title="Thumbnail of Video Demo for Ansible Scripts"
                        />
                        <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Ansible Scripts for Automating Publication
                        </Typography>
                        <Typography>
                        These scripts were created for a different team in the company who had originally manually uploaded
                        and published data by themselves.
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary" href="/ansiblescripts">
                            View
                        </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                </Grid>
            </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
            <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}