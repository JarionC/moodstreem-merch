import React, { Component } from "react";
import DataService from "../services";
import { Link } from "react-router-dom";
import headerImg from "../img/phone-large.png";
import ownerImg from "../img/owner-img.png";
import "../styles/home.css";

const styles = {
  navcontainer: {
    width:"100%",
    top: "0px",
    position: "fixed",
    backgroundColor: "white"
  }
};
 class Home extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);

    this.state = {
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
  }

  searchTitle() {
    DataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
        return(
          <div>
            <header className="page-header">
                <div className="header-text">
                    MoodStreem
                </div>
                <div className="header-subtext">
                    Own Your Place On The Web
                </div>
                
            </header>
            <div className="home-section left">
                <div className="preview-container">
                  <div className="preview">
                    <div className="preview-title">Ownership</div>
                    <div className="preview-text">Let Your Ideas Generate A Profit</div>
                    
                                  
                  </div>                  
                  <div className="preview-image-container owner">
                    <div className="preview-image owner" >
                      
                    </div> 
                    <div className="cover-text">With MoodStreem, content creators will own the essense of their content. They will be able to create non-fungible assets representing commemoration and/or ownership of their work and sell their assets either using the platform or independently. This content will be created within Streems, categories representing a single mood or concept. Streems will be created and owned by users, responsible for maintainence and promotion within community guidelines, who will receive a portion of royalties from asset transactions related to their Streems. </div>
                  </div>
                </div>
            </div>
            <div className="home-section left">
                <div className="preview-container governance">
                  <div className="preview">
                    <div className="preview-title">Governance</div>
                    <div className="preview-text">Your Opinions Will Make A Difference</div>
                    <div className="cover-text">For now, the MoodStreem organization controls direction and development of the platform, but our goal is to carefully hand control over to the users themselves. Owners of MoodStreem assets will be able to vote on and propose changes for the development and administration teams to implement. Voting power will be weighted based on an asset's tier and popularity. For instance, assets representing content will give owners greater voting power proportional to the amount of views and other trackable activity the content has contributed to the platform. </div>
                                  
                  </div>                  
                  <div className="preview-image governance" ></div> 
                </div>
            </div>
            <div className="home-section left">
                <div className="preview-container privacy">
                  <div className="preview">
                    <div className="preview-title">Privacy</div>
                    <div className="preview-text">We Love Data, But We Also Love Peace Of Mind</div>
                    <div className="cover-text">Social Media apps are notorious for collecting data that blatantly invades your privacy. MoodStreem is dedicated to minimizing data collection that would compromise the identity and privacy of platform users. Collection will be focused on advancement of the platform. Desktop browser users will have the option of logging in using only their web wallet.  </div>
                                  
                  </div>                  
                  <div className="preview-image privacy" ></div> 
                </div>
            </div>
            <div className="home-section left">
                <div className="preview-container">
                  <div className="preview">
                    <div className="preview-title">Content Variety</div>
                    <div className="preview-text">We're Not Stopping At Stories</div>
                    <div className="cover-text">While we want to focus on video content to meet and exceed the modern standards of social media content, we also want MoodStreem to host a variety of other media and be a hub of discussion. We are making image and text based content and a robust comment system key features of the platform.</div>
                                  
                  </div>                  
                  <div className="preview-image variety" ></div> 
                </div>
            </div>
        </div>
        );
    }
}

export default Home;