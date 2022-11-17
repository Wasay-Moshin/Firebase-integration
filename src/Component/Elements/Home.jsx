import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/home");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");
  };
  
 
  return (
    <div className="homepg">
      <div className="container">
        <div className="text-center mb-5">
          <h1>Home Page</h1>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <h2 className="mt-5">We Can Work On It Together</h2>
            <div className="mt-4">
         <Link to="/detail">
            {/* <Button variant="contained" >Show profile</Button>  */}
            showDetails
     </Link>
            &nbsp;
              <Button variant="outlined">
                Log out
              </Button>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid bg1" src=" Assets/project.webp " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
