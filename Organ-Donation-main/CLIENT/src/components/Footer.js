import React from "react";
import {  MDBContainer } from "mdbreact";
const Footer= () => {
  return (
    <footer class="Footer" >
        <div class="row">  
          <div class="col" style={{textAlign : "center"}}>
            <br/>
            <h3>Follow Us</h3>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-youtube"></a>
            <a href="#" class="fa fa-instagram"></a>
          </div>
          </div>
          <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{color:'white'}}> 
          &copy; {new Date().getFullYear()} Copyright: Organ Donation
        </MDBContainer>
      </div>
      </footer>
  );

}

export default Footer;
