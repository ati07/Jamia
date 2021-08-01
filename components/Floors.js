import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Popover from "@material-ui/core/Popover";

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
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    dispaly: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));
function Floors() {
  const classes = useStyles();
  const router = useRouter();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popup, setPopup] = React.useState(null);

  // const [anchorEl1, setAnchorEl1] = React.useState(null);
  // const [anchorEl2, setAnchorEl2] = React.useState(null);
  // const [anchorEl3, setAnchorEl] = React.useState(null);


  const handlePopoverOpen = (event,r) => {
    console.log("Event",event.currentTarget)
    console.log("r",r)

    setAnchorEl(event.currentTarget);
    setPopup(r)
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // const open1 = Boolean('');
  // const open2 = Boolean('');
  // const open3 = Boolean('');

  const GFloor =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  const Floor1 = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,]
  const Floor2 = [29,30,31,32,33,34,35,36,37,38,39,40,41,42,]
  const Floor3 = [43,44,45,46,47,48,49,50,51,52,53,54,55,56]
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full mt-5">
        {["G", 1, 2, 3].map((items, i) => (
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
                  {items === 'G' ? (
                      <>
                        {GFloor.map((r, i) => (
                          <div
                          // className="font-sans text-lg font-semibold"
                              aria-owns={
                                popup===r ? `mouse-over-popover${r}` : undefined
                              }
                              aria-haspopup="true"
                              onMouseEnter={(event)=>handlePopoverOpen(event,r)}
                              onMouseLeave={handlePopoverClose}
                            key={i}
                            // onClick={() => router.push("/floors")}
                            className={`${
                              i % 2 === 0 ? "bg-red-500" : "bg-green-500"
                            } col-span-1 h-[50px] w-[50px] cursor-pointer text-white shadow-xl border-2 flex justify-center items-center`}
                          >
                            <Typography
                            >
                              {r}
                            </Typography>
                            <Popover
                              id={`mouse-over-popover${r}`}
                              className={classes.popover}
                              classes={{
                                paper: classes.paper,
                              }}
                              open={popup===r?open:''}
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                              onClose={handlePopoverClose}
                              disableRestoreFocus
                            >
                              <Typography>
                                {r % 2 == 0 ?'Vacant':
                              
                              <div>
                                <h1>ShopKeeper Name: Farhan</h1>
                                <h1>Purpose: Hotel</h1>
                                <h2>Mobile Number: 7886161631313</h2>
                                <h2>Room Area: 20x20</h2>
                              </div>
                               }
                              </Typography>
                            </Popover>
                          </div>
                        ))}
                      </>
                    ) : (
                      ""
                    )}

{items === 1 ? (
                      <>
                        {Floor1.map((r, i) => (
                          <div
                          // className="font-sans text-lg font-semibold"
                              aria-owns={
                                popup===r ? `mouse-over-popover${r}` : undefined
                              }
                              aria-haspopup="true"
                              onMouseEnter={(event)=>handlePopoverOpen(event,r)}
                              onMouseLeave={handlePopoverClose}
                            key={i}
                            // onClick={() => router.push("/floors")}
                            className={`${
                              i % 2 === 0 ? "bg-red-500" : "bg-green-500"
                            } col-span-1 h-[50px] w-[50px] cursor-pointer text-white shadow-xl border-2 flex justify-center items-center`}
                          >
                            <Typography
                            >
                              {r}
                            </Typography>
                            <Popover
                              id={`mouse-over-popover${r}`}
                              className={classes.popover}
                              classes={{
                                paper: classes.paper,
                              }}
                              open={popup===r?open:''}
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                              onClose={handlePopoverClose}
                              disableRestoreFocus
                            >
                              <Typography>{r % 2 == 0 ?'Vacant':
                              
                              <div>
                                <h1>ShopKeeper Name: Farhan</h1>
                                <h1>Purpose: Hotel</h1>
                                <h2>Mobile Number: 7886161631313</h2>
                                <h2>Room Area: 20x20</h2>
                              </div>
                               }</Typography>
                            </Popover>
                          </div>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                    {items === 2 ? (
                      <>
                        {Floor2.map((r, i) => (
                          <div
                          // className="font-sans text-lg font-semibold"
                              aria-owns={
                                popup===r ? `mouse-over-popover${r}` : undefined
                              }
                              aria-haspopup="true"
                              onMouseEnter={(event)=>handlePopoverOpen(event,r)}
                              onMouseLeave={handlePopoverClose}
                            key={i}
                            // onClick={() => router.push("/floors")}
                            className={`${
                              i % 2 === 0 ? "bg-red-500" : "bg-green-500"
                            } col-span-1 h-[50px] w-[50px] cursor-pointer text-white shadow-xl border-2 flex justify-center items-center`}
                          >
                            <Typography
                            >
                              {r}
                            </Typography>
                            <Popover
                              id={`mouse-over-popover${r}`}
                              className={classes.popover}
                              classes={{
                                paper: classes.paper,
                              }}
                              open={popup===r?open:''}
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                              onClose={handlePopoverClose}
                              disableRestoreFocus
                            >
                              <Typography>{r % 2 == 0 ?'Vacant':
                              
                              <div>
                                <h1>ShopKeeper Name: Farhan</h1>
                                <h1>Purpose: Hotel</h1>
                                <h2>Mobile Number: 7886161631313</h2>
                                <h2>Room Area: 20x20</h2>
                              </div>
                               }</Typography>
                            </Popover>
                          </div>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                    {items === 3 ? (
                      <>
                        {Floor3.map((r, i) => (
                          <div
                          // className="font-sans text-lg font-semibold"
                              aria-owns={
                                popup===r ? `mouse-over-popover${r}` : undefined
                              }
                              aria-haspopup="true"
                              onMouseEnter={(event)=>handlePopoverOpen(event,r)}
                              onMouseLeave={handlePopoverClose}
                            key={i}
                            // onClick={() => router.push("/floors")}
                            className={`${
                              i % 2 === 0 ? "bg-red-500" : "bg-green-500"
                            } col-span-1 h-[50px] w-[50px] cursor-pointer text-white shadow-xl border-2 flex justify-center items-center`}
                          >
                            <Typography
                            >
                              {r}
                            </Typography>
                            <Popover
                              id={`mouse-over-popover${r}`}
                              className={classes.popover}
                              classes={{
                                paper: classes.paper,
                              }}
                              open={popup===r?open:''}
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                              onClose={handlePopoverClose}
                              disableRestoreFocus
                            >
                              <Typography>
                              {r % 2 == 0 ?'Vacant':
                              
                              <div>
                                <h1>ShopKeeper Name: Farhan</h1>
                                <h1>Purpose: Hotel</h1>
                                <h2>Mobile Number: 7886161631313</h2>
                                <h2>Room Area: 20x20</h2>
                              </div>
                               }</Typography>
                            </Popover>
                          </div>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                  <div className="bg-red-500 w-[50px] h-1"></div>
                  <div className="pl-5 pr-5"> Filled</div>
                  <div className="bg-green-500 w-[50px] h-1"></div>
                  <div className="pl-5 pr-5">Vacant</div>
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
