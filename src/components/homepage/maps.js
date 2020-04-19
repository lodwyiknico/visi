import React, {Fragment} from 'react'
import {Typography, Grid, makeStyles, TextField, Button} from '@material-ui/core'
import leather from '../../assets/leather.png'
import GoogleMapReact from 'google-map-react';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';

const useStyles = makeStyles(() => ({
    input: {
        color: "#c5a47e",
        borderStyle: 'solid'
    },
    font : {
        color : '#ffff'
    },
  }));
  const currencies = [
    {
      value: '1',
      label: 'Jakarta',
    },
    {
      value: '2',
      label: 'Bandung',
    },
    {
      value: '3',
      label: 'Yogyakarta',
    },
    {
      value: '4',
      label: 'Palembang',
    },
  ];
const maps = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [city,setCity] = React.useState('')
    const AnyReactComponent = ({ text }) => <div><LocationOnTwoToneIcon/></div>;
    const bro  = {
        center: {
            lat: -6.224202,
            lng: 106.828550
        },
        zoom: 14
    };
    const handleChange = event => {
        setCity(event.target.value);
      };
    return (
        <Fragment>
            <Grid container className={classes.font} direction="row" justify="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <div style={{ height: '60vh', backgroundImage:`url(${leather})`, width: '100%' }}>
                        <div style={{padding: '65px 0px 0px 125px'}}>
                            <Typography className="raleway" style={{fontWeight: 'bold'}} variant="h4">
                                <span style={{color:'#c5a47e'}}>SEAT</span> MAKERS
                            </Typography>
                            <Typography style={{marginTop:'35px', paddingRight: '115px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac lorem non ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac lorem non ornare.
                            </Typography>
                            <TextField
                                variant="outlined"
                                placeholder="ENTER A PLACE OR CITY"
                                style ={{marginTop:'15px', width:'60%'}}
                                InputProps={{
                                    className: classes.input
                                }}
                            /><br/>
                             <TextField
                                select
                                value={city}
                                style ={{marginTop:'15px', width:'60%'}}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                    className: classes.input
                                }}
                                variant="outlined"
                            >
                                <option value=''>
                                    DEALER IN ALL CITY
                                </option>
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                    {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <br/>
                            <Button style ={{marginTop:'45px', borderRadius:0, padding: '15px 60px'}} variant="contained" color="primary">
                                search
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                   <div style={{ height: '60vh', width: '100%' }}>
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAaxkx_GbkW1B81S5-UWNTkT9v9VYNQs2c'}}
                        defaultCenter={bro.center}
                        defaultZoom={bro.zoom}
                        >
                        <AnyReactComponent
                            lat={-6.224202}
                            lng={106.828550}
                            text="My Marker"
                        />
                        </GoogleMapReact>
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default maps