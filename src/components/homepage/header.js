import React, { Fragment } from 'react'
import {Typography, Container, Grid, makeStyles} from '@material-ui/core'
import logoname from '../../assets/logoname.png'
import logo from '../../assets/logo.png'
import banner from '../../assets/banner.jpg'

const useStyles = makeStyles((theme) => ({
    font : {
        color : '#ffff'
    },
  }));
const home = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    return (
        <Fragment>
            <Container className={classes.font} style={{marginTop: '25px', position: 'absolute'}} maxWidth="lg">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <img src={logoname} alt='logoname'/>

                    <img src={logo} alt='logoname' style={{position:'absolute', zIndex:'3', marginTop:'85px'}}/>

                    <Grid container direction="row" justify="flex-end" alignItems="center" >
                        <Typography className="raleway" style={{margin:'15px', fontSize: '14px',fontWeight: 'bold'}}>
                            PRODUCTS
                        </Typography>
                        <Typography className="raleway" style={{margin:'15px', fontSize: '14px',fontWeight: 'bold'}}>
                            WORLD OF VISION
                        </Typography>
                        <Typography className="raleway" style={{margin:'15px', fontSize: '14px',fontWeight: 'bold'}}>
                            BLOG
                        </Typography>
                        <Typography className="raleway" style={{margin:'15px', fontSize: '14px',fontWeight: 'bold'}}>
                            ABOUT
                        </Typography>
                        <Typography className="raleway" style={{margin:'15px', fontSize: '14px',fontWeight: 'bold'}}>
                            CONTACT
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <img src={banner} alt='banner' style={{width:'100%', marginTop: '-10%', zIndex: '-1'}}/>
        </Fragment>
    )
}

export default home 