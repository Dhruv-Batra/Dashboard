import { Typography } from "@material-ui/core"
export default function DisplayStudent(props) {

    console.log("DisplayStudent", props.student);

if (props.student != null) {
    return (
        // <div>
        //     Students is not null.
        // </div>
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

    );

}
else {
    return null;
}
}