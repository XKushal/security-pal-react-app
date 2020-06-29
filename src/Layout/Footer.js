import React, {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <footer id="footer">
                <div className="container footer-bottom clearfix">
                  <div className="copyright" style={{textAlign:"center"}}>
                    &copy; Copyright <strong><span>SecurityPalHQ</span></strong>. 
                    All Rights Reserved. San Francisco, CA
                  </div>
                  <div className="credits">
                   
                  </div>
                </div>
              </footer>
        )
    }
}

export default Footer;