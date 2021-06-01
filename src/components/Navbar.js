import { Link } from 'react-router-dom';
import { Button, withStyles } from '@material-ui/core';
export default function Navbar() {
    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #ff4447 30%, #ff4447 90%)', // gradient color l -> r
          borderRadius: 3,
          border: 0,
          color: 'black', // text color
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          //textTransform: 'capitalize',
        },
      })(Button);

    return (
        <div style={{ padding: "15px", backgroundColor: "gray"}}> 
        {/* placeholder bar color ^ */}
            <Link to="/" style={{ textDecoration: "none" }}>
                <StyledButton style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Homepage
                </StyledButton>
            </Link>

            <Link to="/teacher" style={{ textDecoration: "none" }}>
                <StyledButton style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Teacher Directory
                </StyledButton>
            </Link>

            <Link to="/student" style={{ textDecoration: "none" }}>
            <StyledButton style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Student Directory
                </StyledButton>
            </Link>

            <Link to="/calendar" style={{ textDecoration: "none" }}>
            <StyledButton style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Calendar
                </StyledButton>
            </Link>
        </div>
    );
};