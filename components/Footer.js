import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Footer() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
         Jamia Imam Ibn Taimia © {new Date().getFullYear()} All Right Reserved
        {/* <Link color="inherit" href="https://www.jiitms.com/">
         
        </Link>{' '} */}
        
        {'.'}
      </Typography>
    );
  }