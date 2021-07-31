import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Floors from '../../components/Floors'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useRouter } from "next/router";

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
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
  },
}));

export default function SimpleTabs() {
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      
    <div className={classes.root}>
      <div className="flex w-3/4 mt-5">
      <KeyboardBackspaceIcon className='cursor-pointer' onClick={() => router.push('/marketmanagment')}/>
    </div>
      <div>
        <h1 className="mt-16 font-sans text-5xl font-semibold">
          Old Salam Market
        </h1>
        <p className="mt-2 text-xs text-center opacity-70">
              Jama Masjid, Beside Mukhtarkhana,
               Ghorasahan Road, 845418
            </p>
      </div>
      <div className="w-3/4 mt-5">
      <AppBar position="static" >
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Floors & Rooms" {...a11yProps(0)} />
          <Tab label="Legal Documents" {...a11yProps(1)} disabled/>
          <Tab label="Expenses" {...a11yProps(2)} disabled />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Floors/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      </div>
    </div>
    </div>
  );
}
