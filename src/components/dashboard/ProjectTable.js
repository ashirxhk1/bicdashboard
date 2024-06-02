import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { fetchallusers } from "../../features/userApis";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import { useSidebar } from "../../context/SidebarContext";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
  },
];

const ProjectTables = () => {
  const [userDetails,setUserDetails] = useState([])
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const handlerProfile = (id) => {
    navigate(`/bi/userdetails/${id}`);
    // toggleSidebar();
  };
  const getallUsers = async () => {
    const {data} = await fetchallusers()
    setUserDetails(data)
  }
  
  useEffect(() => {
    getallUsers()
  },[])

  console.log(userDetails);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Agent Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Team Lead</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {userDetails?.user?.map((tdata, index) => (
                <tr
                  key={index}
                  className="border-top"
                  style={{ cursor: "pointer" }}
                  onClick={() => handlerProfile(tdata._id)}
                >
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div>
                        {/* <h6 className="mb-0">{tdata.name}</h6> */}
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata?.evaluationRating?.length}</td>
                  {/* <td>{tdata.project}</td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
