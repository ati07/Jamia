import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useRouter} from 'next/router'
import Footer from '../components/Footer'
// import Link from 'next/link'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.jiitms.com/">
        Jamia Imam Ibn Taimia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
    const router = useRouter()
  const classes = useStyles();
 const [css, setCss] = useState(classes)
 const [show, setShow] = useState(false);
 const [credential,setCredential] = useState({
     email:'india@jrms.com',
     password:'superadmin@jmiit'
})
const handleChange= (e)=>{
    e.preventDefault()
    setShow(false)
setCredential({
    ...credential,
      [e.target.name]: e.target.value,
      
})

}
const submit=(e)=>{
    e.preventDefault()
    if((credential.email === 'india@jrms.com') || (credential.email === 'ksa@jrms.com') && (credential.password === 'superadmin@jmiit')){
        localStorage.setItem('Credential',JSON.stringify(credential));
        
        router.push('/marketmanagment')
    }else{
        setShow(true)
    }
}
//  console.log("credential", credential)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={css.paper}>
        <Avatar className={css.avatar}>
          <LockOutlinedIcon  className='cursor-pointer' onClick={()=>router.push('/')}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <p className={show ? "text-red-600" : "hidden"}>
                Credential Not found.
              </p>
        <form className={css.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={credential['email']}
            // value={'india@jrms.com'}
          />
          <TextField
          onChange={handleChange}
          value={credential['password']}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // value={'superadmin@jmiit'}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={css.submit}
            onClick={submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={18}>
        {/* <Copyright /> */}
        <Footer/>
      </Box>
    </Container>
  );
}
