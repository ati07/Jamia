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
import { DataGrid } from "@material-ui/data-grid";
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
          <h1 className="mt-8 font-sans text-5xl font-semibold">Payments</h1>
        </div>
        <div className='flex'>
            <div className='flex flex-col mt-7 mr-4 '>
            <FilterListIcon style={{fontSize:'30'}} className='text-lg font-semibold'/>
            <span className='mt-1 text-sm'>Filter</span>
            </div>
          <div className='flex items-center justify-center pb-10 mt-5'>
                  {/* <TextField className='w-[600px] rounded-r-none bg-[#fff]' id="outlined-search" label="Find Out Your Question" type="search" variant="outlined" /> */}
                  
                  <input placeholder='Search By ShopKeeper, Building' className="pl-5 w-[600px] h-[54px] shadow border border-transparent focus:outline-none focus:rounded-bl-lg focus:rounded-tl-lg focus:ring-2 focus:ring-[#1e56a0] focus:border-transparent"></input>
                  <SearchIcon className=' bg-[#1e56a0] cursor-pointer rounded-r-md hover:bg-[#5cb85c]' style={{height:58,width:70,color:"white",padding:10}}/>
          </div>
        </div>
        <div className="w-[90%] mt-5">
          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              Add More Payments
            </Button>
            <div style={{ height: 400, width: "100%", marginTop: 10 }}>
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            {[
                              "#",
                              "Date",
                              "ShopKeeper",
                              "Market Name",
                              "Floor",
                              "Room Number",
                              "Amount",
                              "Receipt",
                              "Status",
                              "Action",
                            ].map((item, i) => (
                              <th
                                key={i}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                {item}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {["Approved", "Rejected", "Dispute"].map((r, i) => (
                            <tr key={i}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    {i + 1}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  31-07-2021
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {shopKeeper[i]}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 text-gray-500 font-semibold rounded-full">
                                  Old Salam Market
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-gray-500 text-xs leading-5 font-semibold rounded-full ">
                                  5
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-gray-500 text-xs leading-5 font-semibold rounded-full">
                                  15
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-gray-500 text-xs leading-5 font-semibold rounded-full ">
                                  80000
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                                  <span className="p-2 cursor-pointer text-gray-900">
                                    <VisibilityIcon
                                      className="font- text-gray-900"
                                      onClick={() => handleClickOpen1(i)}
                                    />
                                  </span>
                                </span>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span
                                  className={`${
                                    r === "Approved"
                                      ? "bg-green-200 text-green-800"
                                      : "hidden"
                                  } px-2 inline-flex text-xs leading-5 font-semibold uppercase rounded-full`}
                                >
                                  {r}
                                </span>
                                <span
                                  className={`${
                                    r === "Rejected"
                                      ? "bg-red-200 text-red-800"
                                      : "hidden"
                                  } px-2 inline-flex text-xs leading-5 font-semibold uppercase rounded-full`}
                                >
                                  {r}
                                </span>
                                <span
                                  className={`${
                                    r === "Dispute"
                                      ? "bg-yellow-200 text-yellow-800"
                                      : "hidden"
                                  } px-2 inline-flex text-xs leading-5 font-semibold uppercase rounded-full`}
                                >
                                  {r}
                                </span>
                                <br />
                                <span
                                  className={`${
                                    r === "Approved"
                                      ? "whitespace-nowrap text-[10px] text-gray-500"
                                      : "hidden"
                                  }`}
                                >
                                  Approved By Farhan
                                </span>
                                <span
                                  className={`${
                                    r === "Rejected"
                                      ? "whitespace-nowrap text-[10px] text-gray-500"
                                      : "hidden"
                                  }`}
                                >
                                  Rejected By Farhan
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                <span className="p-2 cursor-pointer text-gray-900">
                                  <EditIcon />
                                </span>
                                <span className="p-2 cursor-pointer text-gray-900">
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
                      <p className="text-md font-semibold">
                        Are you sure you want to delete
                      </p>
                      <div className="flex justify-end items-center mt-5">
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