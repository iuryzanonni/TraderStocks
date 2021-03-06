import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab, Typography, Box, Grid} from '@material-ui/core';
import Stocks from '../Stocks/Stocks'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  menu:{
      background: 'black',
        padding: '10px',
        color: 'white'
  },
  
  indicator:{
      backgroundColor: "yellow"
  }
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <Grid container direction="row-reverse" justify="flex-start" alignItems="center" className={classes.menu}>
            <Grid item className={classes.menu}>
               
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" classes={{indicator: classes.indicator }}>
                    <Tab label="Minha Carteira" {...a11yProps(0)} />
                    <Tab label="Ações" {...a11yProps(1)} />
                    <Tab label="Ranking" {...a11yProps(2)} />
                </Tabs>
            
            </Grid>
        </Grid>
                
        <TabPanel value={value} index={0}> Minha Carteira </TabPanel>
        <TabPanel value={value} index={1}> <Stocks/> </TabPanel>
        <TabPanel value={value} index={2}> Ranking </TabPanel>
                
    </> 
    
  );
}