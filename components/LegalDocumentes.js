import React, { useState } from "react";
// import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
// import './Image.css'
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function LegalDoucuments() {
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

  const img = ["/RentAgreement/Land.jpg","/RentAgreement/TaxReciept.png","/RentAgreement/building.png"]
  const handleClickOpen1 = (i) => {
      console.log('i',i)
    setNumber(i)
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickDelete1=(i)=>{
      
      setDlt(true)
      setOpen1(true);
  }
  return (
    <div>
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add More Document
        </Button>
        <div style={{ height: 400, width: "100%", marginTop: 10 }}>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Document Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Uploaded By
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Updated On
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {['Land','Tax Reciept', 'Building'].map((r, i) => (
                        <tr key={i}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                {i+1}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{r}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Farhan
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            31-7-2021
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <span className="p-2 cursor-pointer text-gray-900">
                              <VisibilityIcon className="font- text-gray-900" onClick={()=>handleClickOpen1(i)} />
                            </span>
                            <span className="p-2 cursor-pointer text-gray-900">
                              <EditIcon />
                            </span>
                            <span className="p-2 cursor-pointer text-gray-900">
                              <DeleteIcon onClick={()=>handleClickDelete1(i)}/>
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
        >
          <DialogTitle id="form-dialog-title">Upload Documents</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Document Name"
              type="text"
              fullWidth
            />
            <div className="page">
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
                  name="image-upload"
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
        maxWidth='lg'
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
              {dlt?
              <div className="flex flex-col">
                <p className='text-md font-semibold'>Are you sure you want to delete</p>
                <div className='flex justify-end items-center mt-5'>
                <Button style={{color: 'red'}} onClick={handleClose1}>Yes</Button>
                <Button style={{color: 'blue'}} onClick={handleClose1}>No</Button>
                </div>
              </div>
              
              :<Image
                src={img[number]}
                width={500}
                height={500}
                alt=""
                id="img"
                className="img"
              />}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default LegalDoucuments;
