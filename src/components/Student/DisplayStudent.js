import { Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        'width': '60vw',

    },
});

export default function DisplayStudent(props) {

    const classes = useStyles();

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.info.dark,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
        }))(TableCell);
        
        const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
            },
        },
        }))(TableRow);

if (props.student != null) {
    return (
        <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <StyledTableRow>
                    <StyledTableCell style={{width: '30vh'}}>Hours from Now</StyledTableCell>
                    <StyledTableCell align="right">Icon</StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">Temperature (F)</StyledTableCell>
                    <StyledTableCell align="right">Feels Like</StyledTableCell>
                </StyledTableRow>
                </TableHead>
                <TableBody>
                {props.student.map((student,index) => (
                    <StyledTableRow key={index}>
                    <StyledTableCell align="right"><Typography variant="h5">{student.name}</Typography></StyledTableCell>
                    </StyledTableRow>)
                )}
                </TableBody>
            </Table>
            </TableContainer>
            <div style={{ padding: "10px", height: "360px", marginLeft: "17px", overflowY: "scroll" }}>
                {
                    props.student.map((student) => (
                        <div>
                            <div style={{ backgroundColor: "#fadfca", width: "20%", marginLeft: "auto", marginRight: "auto", padding: "10px", borderRadius: "15px" }}>
                                <Typography variant="h5">{student.name}</Typography>
                                {/* <Typography variant="h6">{}</Typography>
                                <br />
                                <StyledButton onClick={add(
                                    book.volumeInfo.title,
                                    book.volumeInfo.authors != null ? book.volumeInfo.authors[0] : "Author not found.",
                                    book.volumeInfo.imageLinks != null ? book.volumeInfo.imageLinks.thumbnail : "https://img-premium.flaticon.com/png/512/1178/1178428.png?token=exp=1622443658~hmac=3e2be4c05df17924d62aeb20d3d1061f")} >
                                    Add to Library
                                </StyledButton> */}
                            </div>
                            <br />
                        </div>
                    ))
                } <br />
            </div>
        </div>

    );

}
else {
    return null;
}
}
