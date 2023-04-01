import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import pic from "../images/02.webp";
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";

export default function PropertyCard({ prop }) {
  const [deleteProperty, setDeleteProperty] = useState([]);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    loadPropertyList();
    deleteProp();
  }, []);

  const deleteProp = async (propertyId) => {
    const result2 = await axios.delete(
      `http://localhost:8083/api/auth/removeProperty/${propertyId}`
    );
    // console.log(result2, "temp");
    setDeleteProperty(result2.data);
    loadPropertyList();
  };

  const loadPropertyList = async () => {
    const result = await axios.get(
      "http://localhost:8083/api/auth/propertyList"
    );
    console.log(result, "temp");
    setProperty(result.data);
  };

  return (
    <Card style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body style={{ width: "100%" }}>
        <Card.Title>{prop.propertyName}</Card.Title>
        <Card.Text
          style={{
            width: "100%",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "2", // max lines
            WebkitBoxOrient: "vertical",
            WordBreak: "none",
            hyphens: "auto",
          }}
        >
          {prop.details}
        </Card.Text>
        <Link
          to="/UpdateProperty"
          state={{ propertyId: prop.propertyId }}
          style={{ textDecoration: "none" }}
        >
          <Button
            style={{
              margin: "5px",
              backgroundColor: "#fd390e",
              borderColor: "#fd390e",
              color: "#fff",
              width: "100%",
            }}
          >
            Update
          </Button>
        </Link>
        <Button
          style={{
            margin: "5px",
            backgroundColor: "#fd390e",
            borderColor: "#fd390e",
            color: "#fff",
            width: "100%",
          }}
          value={prop.propertyId}
          onClick={(e) => {
            console.log(e.target.value);
            swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover this Property!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                deleteProp(e.target.value);
                swal("Poof! Your Property has been deleted!", {
                  icon: "success",
                });
              } else {
                swal("Your Property is safe!");
              }
            });
          }}
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}
