import { Button, withStyles, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from 'material-ui-search-bar';
import { useState } from 'react';
export default function Student() {
    const [student, setStudent] = useState("");
    const StyledButton = withStyles({
        root: {
            background: "#003c6c", // gradient color l -> r
            borderRadius: 3,
            border: 0,
            color: "#FDC700", // text color
            height: 40,
            width: 250,
            padding: "0 30px",
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",


        },
        label: {
            //textTransform: 'capitalize',
            fontSize: "18px"
        },
    })(Button);

    const handleStudentSearch = (e) => {
        setStudent(e.target.value);
    }


    return (
        <div style={{ backgroundColor: "lightgray"}}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>Student Directory</h1>
            </div>
            <div className="add-button-container" style={{ position: "absolute", left: '57%', top: "27%" }}>
                <StyledButton variant="contained" color="primary">
                    Add Student
                </StyledButton>


            </div>

            <div className="search-button-container" style={{ position: "absolute", left: '25%', top: "26%" }}>
                {/* <TextField
                    id="outlined-basic"
                    label="Search for a Student"
                    onChange={handleStudentSearch}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>)}}
                />

                <StyledButton
                    style={{ marginLeft: "20px", top: "10px" }}
                    variant="contained"
                    color="secondary"
                    onClick={console.log(student)}
                >
                    Search Student
                </StyledButton> */}
                <SearchBar
                    placeholder="Search Student"
                    onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    style={{
                        // margin: '0 auto',
                        // maxWidth: 800
                    }}
                />


            </div>
        </div>
    )
}