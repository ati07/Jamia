import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

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
function Floors() {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col mt-16 justify-center items-center">
      <div>
        <h1 className="text-5xl font-semibold font-sans">
          Old Salam Market Floors
        </h1>
      </div>
      <div className="w-4/5 mt-5">
        {[5, 4, 3, 2, 1, "Ground"].map((items, i) => (
          <Accordion
            key={i}
            square
            expanded={expanded === `panel${i + 1}`}
            onChange={handleChange(`panel${i + 1}`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Floor {items}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{dispaly:'flex', justifyContent:'center',alignItems:'center'}}>
              <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-12 bg-white w-full gap-4 uppercase text-center text-lg font-semibold">
                  {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((r,i)=>(
                      <div key={i}
                      onClick={() => router.push("/floors")}
                      className="flex-col col-span-1 h-[50px] w-[50px] cursor-pointer hover:bg-[#556cd6] hover:text-white shadow-xl border-2 flex justify-center items-center"
                    >
                      <h1 className="text-lg font-semibold font-sans">{r}</h1>
                    </div>
                  ))}
                </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      </div>
    </div>
  );
}

export default Floors;
