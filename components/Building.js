import { useRouter } from "next/router";
import React,{ useState} from "react";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from '@material-ui/core/Checkbox';

function Building() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState({
    Img: "/RentAgreement/img.png",
  });
  const handleClickOpen = () => {
    setOpen(true);
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
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Image src='/Titleimg.png' width={600} height={100}/> */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Add New Market
        </Button>
      <div className="grid grid-cols-12 gap-12 pt-10 text-lg font-semibold text-center uppercase bg-white">
        <div
          onClick={() => router.push("/building/OldSalamMarket")}
          className="flex-col col-span-4 h-[150px] w-[300px] p-5 cursor-pointer hover:bg-[#556cd6] hover:text-white rounded-xl shadow-xl border-2 flex justify-center items-center"
        >
          <h1 className="font-sans text-lg font-semibold">Old Salam Market</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
              Jama Masjid, Beside Mukhtarkhana,
              <br /> Ghorasahan Road, 845418
            </p>
          </span>
        </div>
        <div className="flex-col col-span-4 h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
          <h1 className="font-sans text-lg font-semibold">New salam market</h1>
          <span className="pt-1 pl-1 mt-5 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Near SBI, CBI, Dhaka,<br/> 845418
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center items-center">
        <h1 className="font-sans text-lg font-semibold">Jamia market</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Madni Chowk Market, Near Petrol pump, <br/>chandanbara, 845304
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
        <h1 className="font-sans text-lg font-semibold">Madni Chowk Market</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Near Petrol pump, <br/>chandanbara, 845304
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
        <h1 className="font-sans text-lg font-semibold">Motihari Jamia Building (Phase 1)</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Salam Nagar, Qabristan Road, <br/>Motihari, 845401
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
        <h1 className="font-sans text-lg font-semibold">Motihari Jamia Building (Phase 2)</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Salam Nagar, Qabristan Road, <br/>Motihari, 845401
            </p>
          </span>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Building Details </DialogTitle>
          <DialogContent>
            <div className='grid grid-cols-12 gap-6'>
              <div className='col-span-6'><TextField
              autoFocus
              margin="dense"
              id="name"
              label="Market Name"
              type="text"
              fullWidth
            /></div>
              <div className='col-span-6'>
              <TextField
              
              margin="dense"
              id="name"
              label="Address"
              type="text"
              fullWidth
            />
              </div>
              <div className='col-span-6'><TextField
              
              margin="dense"
              id="name"
              label="Legal Document"
              type="text"
              fullWidth
            /></div>
              <div className='col-span-6'><TextField
              margin="dense"
              id="name"
              label="Number of Floors"
              type="text"
              fullWidth
            /></div>
              <div className='col-span-6'><TextField
              
              margin="dense"
              id="name"
              label="Number of Rooms"
              type="text"
              fullWidth
            /></div>
              <div className='col-span-6'> 
              Underconstruction: <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
            </div>

            </div>
            
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
      </div>
    </div>
  );
}

export default Building;
