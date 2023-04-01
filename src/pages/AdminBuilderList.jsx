import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import axios from "axios";
import swal from "sweetalert";
import SFNav from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  const [builders, setBuilders] = useState([]);
  const [deleteBuilder, setDeleteBuilder] = useState([]);
  const [approve, setApproval] = useState([]);

  useEffect(() => {
    loadBuilderList();
    deleteBuild();
    //approval();
  }, []);

  const loadBuilderList = async () => {
    const result = await axios.get(
      "http://localhost:8083/api/auth/builderList"
    );
    console.log(result, "temp");
    // console.log(result.data[0].builder.builderLicense);
    setBuilders(result.data);
    console.log(builders.builder.builderId);
    const shri = JSON.stringify(result);
    console.log(shri);
    console.log(shri.data.builder.builderId);
  };

  //delete builder
  const deleteBuild = async (id) => {
    const result3 = await axios.delete(
      `http://localhost:8083/api/auth/removeBuilder/${id}`
    );
    console.log(result3, "temp");
    setDeleteBuilder(result3.data);
    loadBuilderList();
  };

  // for (const {builder:builderLicense} of builders){
  //     console.log(builderLicense);
  // }

  const approval = async (id) => {
    const result1 = await axios.put(
      `http://localhost:8083/api/auth/builderApproval/${id}`
    );
    console.log(result1, "temp");
    // console.log(result.data[0].builder.builderLicense);
    setApproval(result1.data);
    loadBuilderList();
  };

  // const { builderData } = useBuilderProfile();
  // console.log(builderData);

  return (
    <div className="container">
      <SFNav />
      <div className="py-3" style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center", color: "red", fontSize: 50 }}>
          List Of Builders
        </h1>
        <hr />
        <table className="table">
          <thead style={{ textAlign: "center" }}>
            <tr
              className="bg-warning text-black border border-dark"
              style={{ fontSize: 20 }}
            >
              <th scope="col" style={{ textAlign: "center" }}>
                Sr.No.
              </th>
              <td>Builder Name</td>
              <td>Email</td>
              <td>Mobile No</td>
              <td>View</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {builders.map((blist, index) => (
              <tr key={blist.id} className="text-black border border-warning">
                <th scope="row">{index + 1}</th>
                <td>{blist.username}</td>
                <td> {blist.email} </td>
                <td>{blist.mobileNo}</td>
                <td>
                  <button
                    type="button"
                    style={{ width: "100%" }}
                    className="btn btn-success"
                    onClick={(e) => {
                      swal("Good job!", "Builder is Approved!", "success");
                      approval(blist.id);
                    }}
                  >
                    {/* <Link className="btn btn-primary " to="/ProfileCard" state={{ buildId: blist.id }}>
                      View
                    </Link> */}
                    Approve Builder
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    style={{ width: "100%" }}
                    className="btn btn-danger"
                    value={blist.id}
                    onClick={(e) => {
                      swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this Builder!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          deleteBuild(e.target.value);
                          swal("Poof! Builder has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          swal("Builder detail is safe!");
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

export default Admin;
