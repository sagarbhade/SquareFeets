import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import SFNav from "../components/Navbar";

const AdminPropList = () => {
  const [property, setProperty] = useState([]);
  const [deleteProperty, setDeleteProperty] = useState([]);

  useEffect(() => {
    loadPropertyList();
    deleteProp();
  }, []);

  const loadPropertyList = async () => {
    const result = await axios.get(
      "http://localhost:8083/api/auth/propertyList"
    );
    console.log(result, "temp");
    setProperty(result.data);
  };

  //delete property
  const deleteProp = async (propertyId) => {
    const result2 = await axios.delete(
      `http://localhost:8083/api/auth/removeProperty/${propertyId}`
    );
    // console.log(result2, "temp");
    setDeleteProperty(result2.data);
    loadPropertyList();
  };

  return (
    <div className="container">
      <SFNav />
      <div className="py-3" style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center", color: "red", fontSize: 50 }}>
          List Of Properties
        </h1>
        <hr />
        <table className="table">
          <thead style={{ textAlign: "center" }}>
            <tr
              className="bg-warning text-black border border-dark"
              style={{ fontSize: 20 }}
            >
              <th>Sr.No.</th>
              <td>Property Name</td>
              <td>RERA No.</td>
              <td>Construction Status</td>
              <td>View Details</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {property.map((plist, index) => (
              <tr
                key={plist.propertyId}
                className="text-black border border-warning"
              >
                <th scope="row">{index + 1}</th>
                <td>{plist.propertyName}</td>
                <td> {plist.reraReg} </td>
                <td>{plist.constructionStatus}</td>

                <td>
                  <button>
                    <Link
                      className="btn btn-primary "
                      style={{ width: "100%", border: "none" }}
                      to="/property/profile"
                      state={{ propId: plist.propertyId }}
                    >
                      View
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    style={{ width: "100%" }}
                    className="btn btn-danger"
                    value={plist.propertyId}
                    onClick={(e) => {
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
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPropList;
