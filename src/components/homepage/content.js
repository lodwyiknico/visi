/* eslint-disable react-hooks/rules-of-hooks */
import React, {Fragment} from 'react'
import {Typography, Container, Grid, TextField, Button, makeStyles, Card, CardContent} from '@material-ui/core'
import logoname from '../../assets/logoname.png'
import logo from '../../assets/logo.png'
import Slide from './slider'
import People from  '../../assets/orang.PNG'
import Maps from './maps'
import footImage from '../../assets/footer.jpg' 

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#363636"
      },
    input: {
        color: "#848484",
        borderStyle: 'solid'
    },
    font : {
        color : '#ffff'
    },
  }));
const content = () => {
    const classes = useStyles();
   
    return (
        <Fragment>
            <Container className={classes.font} maxWidth="md">
                <Grid style={{marginTop: '7.1em'}} container direction="column" justify="center" alignItems="center">
                    <Typography className="raleway" style={{fontWeight: 'bold'}} variant="h3">
                        IF IT CAN BE <span style={{color:'#c5a47e'}}>IMAGINED</span>,
                    </Typography>
                    <Typography className="raleway" style={{fontWeight: 'bold'}} variant="h3">
                        IT CAN BE <span style={{color:'#c5a47e'}}>CREATED</span>
                    </Typography>
                </Grid>
                <Grid style={{marginTop: '3.1em'}} container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <img src={logo} alt='logoname' />
                            <img src={logoname} alt='logoname' style={{marginTop:'25px'}}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac lorem non ornare. Quisque condimentum massa eget venenatis ultrices. Integer at tristique metus. Aliquam pellentesque vulputate urna, id vestibulum magna porta a. Mauris sem velit, commodo in metus et, convallis tristique risus. Sed volutpat consequat velit, non faucibus mi ultricies id. Duis gravida cursus velit vel auctor. Quisque eget auctor urna.
                        </Typography>
                        <Button className="raleway" color="primary" style={{fontWeight: 'bold', marginTop:'3.1em', borderRadius: '0'}} variant="outlined">
                            read our story
                        </Button>
                    </Grid>
                </Grid>
                <Grid style={{marginTop: '7.1em', marginBottom: '7.1em'}} container direction="column" justify="center" alignItems="center">
                    <Typography className="raleway" style={{fontWeight: 'bold'}} variant="h3">
                        OUT <span style={{color:'#c5a47e'}}>LEATHERS</span>
                    </Typography>
                </Grid>
            </Container>
            <Slide/>
            <Container className={classes.font} maxWidth="md">
                <Grid style={{marginTop: '7.1em', marginBottom: '7.1em'}} container direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography className="raleway" style={{fontWeight: 'bold'}} variant="h3">
                            EVERY VISION HAS 
                        </Typography>
                        <Typography className="raleway" style={{fontWeight: 'bold'}} variant="h3">
                            ITS OWN <span style={{color:'#c5a47e'}}>STORY</span>
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac lorem non ornare. 
                        </Typography>
                        <Button className="raleway" color="primary" style={{fontWeight: 'bold', marginTop:'3.1em', borderRadius: '0'}} variant="outlined">
                            discover their story
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <img src={People} alt='people' style={{width:'100%'}} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <Maps/>

            {/* <img src={footImage}/> */}
            <div style={{ height: '100vh', backgroundImage:`url(${footImage}) `, width: '100%', position: 'absolute', zIndex: -9, marginTop: '-324px' }}> 
                <Grid className={classes.font} style={{ marginTop: '30.1em', marginBottom: '4.1em'}} container direction="row" justify="center" alignItems="center">
                    <Typography className="raleway" style={{fontWeight: 'bold'}} variant="h3">
                        CHECK YOUR <span style={{color:'#c5a47e'}}>WARRANTY</span>
                    </Typography>
                </Grid>
                <Grid className={classes.font} container direction="row" justify="center" alignItems="center">
                <Card style={{width:'70%' , backgroundColor:'#848484', marginBottom: '180px'}}>
                    <CardContent style={{padding: '60px 90px'}}>
                        <TextField
                            variant="outlined"
                            placeholder="WARRANTY NUMBER"
                            className={classes.root}
                            style ={{marginTop:'15px', width:'60%'}}
                            InputProps={{
                                className: classes.input
                            }}
                        />
                         <Button style ={{marginLeft:'25px',marginTop:'17px', borderRadius:0, padding: '15px 60px'}} variant="contained" color="primary">
                            search
                        </Button>
                    </CardContent>
                </Card>
                </Grid>
                <div style ={{marginTop:'3.1em'}} className={classes.font} >
                    <Container style={{color:'#8c8c8c'}} maxWidth="md">
                        <Grid container direction="row" justify="flex-start" alignItems="center" >
                             <img src={logo} alt="logo" style={{width:'100px'}}/>
                            <Typography className="raleway" style={{margin:'15px', fontSize: '10px',fontWeight: 'bold'}}>
                                HOME
                            </Typography>
                            <Typography className="raleway" style={{margin:'15px', fontSize: '10px',fontWeight: 'bold'}}>
                                WORLD OF VISION
                            </Typography>
                            <Typography className="raleway" style={{margin:'15px', fontSize: '10px',fontWeight: 'bold'}}>
                                BLOG
                            </Typography>
                            <Typography className="raleway" style={{margin:'15px', fontSize: '10px',fontWeight: 'bold'}}>
                                CONTACT
                            </Typography>
                            <Typography className="raleway" style={{margin:'15px', fontSize: '10px',fontWeight: 'bold'}}>
                                CAREERS
                            </Typography>
                        </Grid>
                    </Container>
                </div>
            </div>
        </Fragment>
    )
}

export default content 