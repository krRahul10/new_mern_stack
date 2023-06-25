import React from 'react'
import './profile.css'
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/esm/Row'
import "./profile.css"
const Profile = () => {
  return (
    <>
     <div className="container"> 
     <Card className="card-profile shadow col-lg-6 mx-auto mt-5">
      <Card.Body>
        <Row>
          <div className="col">
            <div className="card-profile-stats d-flex justify-content-center">
              <img src="/man.png" alt="" />
            </div>
          </div>
        </Row>
        <div className="text-center">
          <h3>Rahul Kumar</h3>
          <h4><i class="fa-solid fa-envelope"></i>&nbsp; :- <span>Rahul@gmail.com</span></h4>
          <h5><i class="fa-solid fa-phone"></i>&nbsp; :- <span>987665432</span></h5>
          <h5><i class="fa-solid fa-user"></i>&nbsp; :- <span>male</span></h5>
          <h4>Status&nbsp; :- <span>Active</span></h4>
          <h5>Location <i class="fa-solid fa-location-dot"></i>&nbsp; :- <span>pune</span></h5>
          <h5>&nbsp; :- <span>pune</span></h5>

        </div>
      </Card.Body>
     </Card>
     </div> 
    </>
  )
}

export default Profile
