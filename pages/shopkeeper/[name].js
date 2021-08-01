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
import LegalDoucuments from '../../components/LegalDocumentes';
import PersonalDetail from '../../components/PersonalDetail';
import IdentityProof from '../../components/IdentityProof';

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
  const { pid } = router.query
  console.log("pid", {pid})
  console.log("route",router.query.name)
  // SimpleTabs.getInitialProps = async () => {
  //   return {};
  // };
  return (
    <div>
      {/* <h1>{pid}</h1> */}
    <div className={classes.root}>
      <div className="flex w-3/4 mt-5">
      <KeyboardBackspaceIcon className='cursor-pointer' onClick={() => router.push('/shopkeeper')}/> Back
    </div>
      <div>
        <h1 className="mt-16 font-sans text-5xl font-semibold">
          {router.query.name}
        </h1>
        {/* <p className="mt-2 text-xs text-center opacity-70">
              Jama Masjid, Beside Mukhtarkhana,
               Ghorasahan Road, 845418
            </p> */}
      </div>
      <div className="w-3/4 mt-5">
      <AppBar position="static" >
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Personal Detail" {...a11yProps(0)} />
          <Tab label="Identity Proof" {...a11yProps(1)} />
          <Tab label="Payments" {...a11yProps(2)} />
          {/* <Tab label="Payments" {...a11yProps(3)} disabled/> */}

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PersonalDetail/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IdentityProof/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Here, you can see electricity and maintenance expenses.
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
      Here, you can see electricity and maintenance expenses.
      </TabPanel> */}
      </div>
    </div>
    </div>
  );
}
