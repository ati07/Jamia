import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Badge from '@material-ui/core/Badge';


const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    dispaly:'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
}));
function Floors() {
  const classes = useStyles();
  const router = useRouter();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      
      <div className="w-full mt-5">
        {[5, 4, 3, 2, 1, "Ground"].map((items, i) => (
          <Accordion
            key={i}
            square
            // expanded={expanded === `panel${i + 1}`}
            // onChange={handleChange(`panel${i + 1}`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Floor {items}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.heading}>
              <Typography className={classes.heading}>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="grid w-full grid-cols-12 gap-4 text-lg font-semibold text-center uppercase bg-white">
                  {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((r,i)=>(
                      // <Badge overlap="circular" badgeContent=" "
                      // anchorOrigin={{
                      //   vertical: 'bottom',
                      //   horizontal: 'right',
                      // }}
                      // >
                      <div key={i}
                      onClick={() => router.push("/floors")}
                      className={`${i%2===0?'bg-red-500':'bg-green-500'} flex-col col-span-1 h-[50px] w-[50px] cursor-pointer text-white shadow-xl border-2 flex justify-center items-center`}
                    >
                      <h1 className="font-sans text-lg font-semibold">{r}</h1>
                    </div>
                    //  </Badge>
                  ))}
                </div>
                </div>
                <div className='flex items-center justify-center mt-5'>
                  <div className='bg-red-500 w-[50px] h-1'></div>
                  <div className='pl-5 pr-5'> Filled</div>
                  <div className='bg-green-500 w-[50px] h-1'></div>
                  <div className='pl-5 pr-5'>Vacant</div>

                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

      </div>
    </div>
  );
}

export default Floors;
