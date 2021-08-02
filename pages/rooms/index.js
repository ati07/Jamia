import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { DataGrid } from "@material-ui/data-grid";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Slide from "@material-ui/core/Slide";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import GetAppIcon from '@material-ui/icons/GetApp';

// import MenuItem from '@material-ui/core/MenuItem';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const options = ["Approve", "Reject", "Dispute"];

const ITEM_HEIGHT = 48;

export default function SimpleTabs() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAction = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAction = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState({
    Img: "/RentAgreement/img.png",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage({ Img: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const [open1, setOpen1] = React.useState(false);
  const [number, setNumber] = useState(0);
  const [dlt, setDlt] = useState(false);

  const img = [
    "/Receipt/R1.png",
    "/Receipt/R2.png",
    "/Receipt/R3.png",
  ];
  const handleClickOpen1 = (i) => {
    console.log("i", i);
    setNumber(i);
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickDelete1 = (i) => {
    setDlt(true);
    setOpen1(true);
  };
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 //control Fillter
 const [openFilter,setOpenFilter] = React.useState(false);
 const handleClickOpenFilter = () => {
   setOpenFilter(true);
 };
 const handleCloseFilter = () => {
   
   setOpenFilter(false)
 };
  // DropDown
  const [floor, setFloor] = React.useState("Floor");
  const [RN, setRN] = React.useState("Room Number");

  const handleChangeDropFloor = (event) => {
    setFloor(event.target.value);
  };
  const handleChangeDropRN = (event) => {
    setRN(event.target.value);
  };
  const shopKeeper = ["Farhan", "Abdullah", "Rashid"];
  return (
    <div>
      <div className={classes.root}>
        <div className="flex w-3/4 mt-5">
          <KeyboardBackspaceIcon
            className="cursor-pointer"
            onClick={() => router.push("/marketmanagment")}
          />{" "}
          Back
        </div>
        <div>
          <h1 className="mt-8 font-sans text-5xl font-semibold">Rooms</h1>
        </div>
        <div className="flex justify-center mt-10 items-center w-[90%]">
        <IconButton aria-label="filter list">
          <div className="flex flex-col items-center justify-center pb-0 pl-2 pr-2 mt-2 cursor-pointer" onClick={handleClickOpenFilter}>
          
            <FilterListIcon
              style={{ fontSize: "20" }}
              className="text-lg font-semibold"
            />

            <span className="mt-1 text-xs font-medium text-gray-500">Filter</span>
            
          </div>
          </IconButton>
          {/* <div className="flex">
            <div className='pr-5'>
                      <TextField
    id="date"
    label="From"
    type="date"
    defaultValue="2017-05-24"
    className='text-gray-500'
    InputLabelProps={{
      shrink: true,
    }}
  />
            </div>
            <div>
            <TextField
    id="date"
    label="To"
    type="date"
    defaultValue="2017-05-24"
    // className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
            </div>
          </div> */}
          
          <div className="flex items-center justify-center">
            {/* <TextField className='w-[600px] rounded-r-none bg-[#fff]' id="outlined-search" label="Find Out Your Question" type="search" variant="outlined" /> */}

            <input
              placeholder="Search By ShopKeeper, Building"
              className="pl-5 w-[400px] h-[35px] shadow border border-transparent focus:outline-none focus:rounded-bl-lg focus:rounded-tl-lg focus:ring-2 focus:ring-[#1e56a0] focus:border-transparent"
            ></input>
            <SearchIcon
              className=" bg-[#1e56a0] cursor-pointer rounded-r-md hover:bg-[#5cb85c]"
              style={{ height: 39, width: 70, color: "white", padding: 10 }}
            />
          </div>
          <div className='flex pl-4'>
            <Button variant="outlined"
              color="primary">
              <span className='mr-3 text-xs'>Export as Excel</span>
              
              <GetAppIcon/>
            </Button>
          </div>
        </div>
        <div className="w-[90%] mt-5">
          <div>
            {/* <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              Add More Shop Keeper
            </Button> */}
            <div style={{ height: 400, width: "100%", marginTop: 10 }}>
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            {[
                              "#",
                              // "Date",
                              "Room Number",
                              "Market Name",
                            //   "Floor",
                            //   "Room Number",
                            //   "Mobile Number",
                              // "Receipt",
                              "Status",
                              "Action",
                            ].map((item, i) => (
                              <th
                                key={i}
                                scope="col"
                                className="px-4 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                              >
                                {item}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-center bg-white divide-y divide-gray-200">
                          {[1, 2, 3,4,5].map((r, i) => (
                            <tr key={i}>
                              <td className="px-6 text-center whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 w-10">
                                    {i + 1}
                                  </div>
                                </div>
                              </td>
                              {/* <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  31-07-2021
                                </div>
                              </td> */}
                              <td className="px-6 whitespace-nowrap" onClick={()=>router.push(`/rooms/${r}`)}>
                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full cursor-pointer">
                                  {r}
                                </span>
                              </td>
                              <td className="px-6 whitespace-nowrap">
                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-gray-500 rounded-full">
                                  Old Salam Market
                                </span>
                              </td>
                              {/* <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-gray-500 rounded-full ">
                                  5
                                </span>
                              </td> */}
                              {/* <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-gray-500 rounded-full">
                                  15
                                </span>
                              </td> */}
                              {/* <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex px-2 text-xs font-semibold leading-5 text-gray-500 rounded-full ">
                                  756509118605
                                </span>
                              </td> */}
                              {/* <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex px-2 text-xs font-semibold leading-5 rounded-full">
                                  <span className="p-2 text-gray-900 cursor-pointer">
                                    <VisibilityIcon
                                      className="text-gray-900 font-"
                                      onClick={() => handleClickOpen1(i)}
                                    />
                                  </span>
                                </span>
                              </td> */}

                              <td className="px-6 text-sm text-gray-500 whitespace-nowrap">
                                <span
                                  className={`${
                                    r%2 === 0
                                      ? "bg-green-200 text-green-800"
                                      : "bg-red-200 text-red-800"
                                  } px-2 inline-flex text-xs leading-5 font-semibold uppercase rounded-full`}
                                >
                                  {r% 2 == 0 ?'Vacant':'Filled'}
                                </span>
                                {/* <span
                                  className={`${
                                    r === "Rejected"
                                      ? "bg-red-200 text-red-800"
                                      : "hidden"
                                  } px-2 inline-flex text-xs leading-5 font-semibold uppercase rounded-full`}
                                >
                                  {r}
                                </span> */}
                                {/* <span
                                  className={`${
                                    r === "Dispute"
                                      ? "bg-yellow-200 text-yellow-800"
                                      : "hidden"
                                  } px-2 inline-flex text-xs leading-5 font-semibold uppercase rounded-full`}
                                >
                                  {r}
                                </span> */}
                                <br />
                                {/* <span
                                  className={`${
                                    r === "Approved"
                                      ? "whitespace-nowrap text-[10px] text-gray-500"
                                      : "hidden"
                                  }`}
                                >
                                  Approved By Farhan
                                </span> */}
                                {/* <span
                                  className={`${
                                    r === "Rejected"
                                      ? "whitespace-nowrap text-[10px] text-gray-500"
                                      : "hidden"
                                  }`}
                                >
                                  Rejected By Farhan
                                </span> */}
                              </td>
                              <td className="px-6 text-sm font-medium text-center whitespace-nowrap">
                                <span className="p-2 text-gray-900 cursor-pointer">
                                  <EditIcon />
                                </span>
                                <span className="p-2 text-gray-900 cursor-pointer">
                                  <IconButton
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                  >
                                    <MoreVertIcon />
                                  </IconButton>
                                  <Menu
                                    id="long-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={openAction}
                                    onClose={handleCloseAction}
                                    PaperProps={{
                                      style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: "20ch",
                                      },
                                    }}
                                  >
                                    {options.map((option) => (
                                      <MenuItem
                                        key={option}
                                        selected={option === "Pyxis"}
                                        onClick={handleClose}
                                      >
                                        {option}
                                      </MenuItem>
                                    ))}
                                  </Menu>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
              maxWidth='lg'
            >
              <DialogTitle id="form-dialog-title">Add Receipt Details</DialogTitle>
              <DialogContent>
                <div className="grid grid-cols-12 gap-1">
                  <div className="col-span-6">
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Building"
                      type="text"
                      fullWidth
                    />
                  </div>
                  <div className="col-span-6">
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Floor
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={floor}
                        onChange={handleChangeDropFloor}
                        fullWidth
                      >
                        <MenuItem value={10}>G</MenuItem>
                        <MenuItem value={20}>1</MenuItem>
                        <MenuItem value={30}>2</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-span-6 mt-1">
                    {/* <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Room Number
                      </InputLabel> */}
                      <TextField
                        label="Room Number"
                        id="select"
                        value={RN}
                        onChange={handleChangeDropRN}
                        fullWidth
                        select
                      >
                        <MenuItem value={10}>G</MenuItem>
                        <MenuItem value={20}>1</MenuItem>
                        <MenuItem value={30}>2</MenuItem>
                      </TextField>
                    {/* </FormControl> */}
                  </div>
                  <div className="col-span-6">
                    <TextField
                      margin="dense"
                      id="name"
                      defaultValue="2017-05-24"
                      label="Date"
                      type="Date"
                      fullWidth
                    />
                  </div>
                  <div className="col-span-12">
                    <TextField
                      margin="dense"
                      id="name"
                      label="Amount"
                      type="Number"
                      fullWidth
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <div className="container">
                    <div className="img-holder">
                      <Image
                        src={image.Img}
                        width={250}
                        height={200}
                        alt=""
                        id="img"
                        className="img"
                      />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      name="Receipt-upload"
                      id="input"
                      onChange={imageHandler}
                    />
                    {/* <div classNameNameNameName="label">
            <label classNameNameNameName="image-upload" htmlFor="input">
              <AddAPhotoIcon />
            </label>
          </div> */}
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Upload
                </Button>
              </DialogActions>
            </Dialog>
            {/* Filter popup */}
<Dialog
              open={openFilter}
              onClose={handleCloseFilter}
              aria-labelledby="form-dialog-title"
              maxWidth="lg"
            >
              <DialogTitle id="form-dialog-title">
                Filter
              </DialogTitle>
              <DialogContent>
                <div className='grid grid-cols-12 gap-6 w-[500px]'>
                  <div className='col-span-4'><TextField
                      label="Select Market"
                      id="select"
                      value={RN}
                      onChange={handleChangeDropRN}
                      fullWidth
                      select
                    >
                      <MenuItem value={10}>Old Salam Market</MenuItem>
                        <MenuItem value={20}>New Salam Market</MenuItem>
                        <MenuItem value={30}>Jamia market</MenuItem>
                        <MenuItem value={40}>Madni Chowk Market</MenuItem>
                        <MenuItem value={50}>
                          Motihari Jamia Building (Phase 1)
                        </MenuItem>
                        <MenuItem value={60}>
                          Motihari Jamia Building (Phase 2)
                        </MenuItem>
                    </TextField></div>
                  <div className='col-span-4'><TextField
                      label="Select Floor"
                      id="select"
                      value={RN}
                      onChange={handleChangeDropRN}
                      fullWidth
                      select
                    >
                      <MenuItem value={10}>G</MenuItem>
                      <MenuItem value={20}>1</MenuItem>
                      <MenuItem value={30}>2</MenuItem>
                    </TextField></div>
                  <div className='col-span-4'><TextField
                      label="Select Room"
                      id="select"
                      value={RN}
                      onChange={handleChangeDropRN}
                      fullWidth
                      select
                    >
                      <MenuItem value={10}>G</MenuItem>
                      <MenuItem value={20}>1</MenuItem>
                      <MenuItem value={30}>2</MenuItem>
                    </TextField></div>
                </div>
              </DialogContent>
              <DialogActions>
               
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleCloseFilter} color="primary">
                  Filter
                </Button>
              </DialogActions>
            </Dialog>

            {/* Image popup */}
            <Dialog
              maxWidth="lg"
              open={open1}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose1}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  {dlt ? (
                    <div className="flex flex-col">
                      <p className="font-semibold text-md">
                        Are you sure you want to delete
                      </p>
                      <div className="flex items-center justify-end mt-5">
                        <Button style={{ color: "red" }} onClick={handleClose1}>
                          Yes
                        </Button>
                        <Button
                          style={{ color: "blue" }}
                          onClick={handleClose1}
                        >
                          No
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={img[number]}
                      width={400}
                      height={500}
                      alt=""
                      id="img"
                      className="img"
                    />
                  )}
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
