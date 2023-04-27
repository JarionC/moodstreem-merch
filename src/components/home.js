import React, { Component } from "react";
import DataService from "../services";
import { Link } from "react-router-dom";
import headerImg from "../img/phone-large.png";
import ownerImg from "../img/owner-img.png";
import governImg from "../img/governance-img.png";
import privacyImg from "../img/privacy-img.png";
import varietyImg from "../img/variety-img.png";
import Carousel from "./carousel";
import "../styles/home.css";

const styles = {
  navcontainer: {
    width:"100%",
    top: "0px",
    position: "fixed",
    backgroundColor: "white"
  }
};

const carouselItems = [
  {
    title: "Privacy",
    content: "Content 1",
    image: privacyImg,
    link: "https://your-link-url-1.com",
  },
  {
    title: "Governance",
    content: "Content 2",
    image: governImg,
    link: "https://your-link-url-2.com",
  },
  {
    title: "Variety",
    content: "Content 3",
    image: varietyImg,
    link: "https://your-link-url-2.com",
  },
];
 class Home extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);

    this.state = {
      showText1: false,
      showText2: false,
      showText3: false,
      showText4: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      window.scrollTo(0, 0);
    }
  }

  toggleText = (data) => {
    var section = data.currentTarget.id;
    if(section == "revealer1")
      this.setState({ showText1: !this.state.showText1 });
    if(section == "revealer2")
      this.setState({ showText2: !this.state.showText2 });
    if(section == "revealer3")
      this.setState({ showText3: !this.state.showText3 });
    if(section == "revealer4")
      this.setState({ showText4: !this.state.showText4 });
  };

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

  /*
            <section className="long-text">
              
              
            <div className="text-image">
                <img src="../img/governance-img.png" alt="Long Text Section" />
              </div>
              <div className={`text-content right`}>
                        <div className="preview-title">Governance</div>
                        <div className="preview-text">Your Opinions Will Make A Difference</div>
                <button id="revealer2" className="reveal-button" onClick={this.toggleText}>
                {this.state.showText2 ? 'Hide' : 'Read More'}
              </button>
                <p className={this.state.showText2 ? 'section-text-three visible' : 'section-text-three hidden'}>
                For now, the MoodStreem organization controls direction and development of the platform, but our goal is to carefully hand control over to the users themselves. Owners of MoodStreem assets will be able to vote on and propose changes for the development and administration teams to implement. Voting power will be weighted based on an asset's tier and popularity. For instance, assets representing content will give owners greater voting power proportional to the amount of views and other trackable activity the content has contributed to the platform.
                </p>
                </div>
          
                </section>
               
                <section className="long-text">
                <div className="text-image">
                    <img src="../img/variety-img.png" alt="Long Text Section" />
                  </div>
                  <div className={`text-content right`}>
                            <div className="preview-title">Content Variety</div>
                            <div className="preview-text">We're Not Stopping At Stories</div>
                    <button id="revealer4" className="reveal-button" onClick={this.toggleText}>
                    {this.state.showText4 ? 'Hide' : 'Read More'}
                  </button>
                    <p className={this.state.showText4 ? 'section-text-three visible' : 'section-text-three hidden'}>
                    While we want to focus on video content to meet and exceed the modern standards of social media content, we also want MoodStreem to host a variety of other media and be a hub of discussion. We are making image and text based content and a robust comment system key features of the platform.
                    </p>
                  </div>
                  
                  
              
                </section>
            <Carousel items={carouselItems} />*/ 

  render() {
        return(
          <div>
            <div className="page-header">
                <div className="header-text">
                    MoodStreem
                </div>
                <div className="header-subtext">
                    Own Your Place On The Web
                </div>
                <div className="header-small-text">
                    MoodStreem is an in-development social media platform that's looking to turn the space on its head 
                    by giving control to the users in a rich, privacy-minded ecosystem. Click over to our store to find 
                    some fun ways that you can help support our development!

                    
                </div>
                <Link to={"/store"} >
                  <div className="store-btn">MoodStreem Store</div>
                </Link>
                <div className="header-image"></div>

                <div className = "header-extra-container">
                  <div className="header-extra-text">
                    <div className="title">Welcome to A New World</div>
                    <div className="subtitle">Let Your Ideas Generate A Profit</div>
                    <div className="text">With MoodStreem, content creators will own the essense of their content. They will be able to create non-fungible assets representing commemoration and/or ownership of their work and sell their assets either using the platform or independently. This content will be created within Streems, categories representing a single mood or concept. Streems will be created and owned by users, responsible for maintainence and promotion within community guidelines, who will receive a portion of royalties from asset transactions related to their Streems. </div>
                  </div>
                  <div className="header-extra-text">
                    <div className="title">Privacy</div>
                    <div className="subtitle">Data is Life</div>
                    <div className="text">Social Media apps are notorious for collecting data that blatantly invades your privacy. MoodStreem is dedicated to minimizing data collection that would compromise the identity and privacy of platform users. Collection will be focused on advancement of the platform. Desktop browser users will have the option of logging in using only their web wallet.  </div>
                  </div>
                </div>

                
            </div>
            <div className="long-text-2">
              <div className="section-text-wrapper one">
                <div className="section-text-container one">
                      <div className="title">Control</div>
                      <div className="subtitle">Your Perspective Will Help Plot Our Course</div>
                      <div className="text">For now, the MoodStreem organization controls direction and development of the platform, but our goal is to carefully hand control over to the users themselves. Owners of MoodStreem assets will be able to vote on and propose changes for the development and administration teams to implement. Voting power will be weighted based on an asset's tier and popularity. For instance, assets representing content will give owners greater voting power proportional to the amount of views and other trackable activity the content has contributed to the platform. </div>
                </div>
              </div>
              
              <div className="section-text-wrapper two">
                <div className="section-text-container two">
                      <div className="title">Variety</div>
                      <div className="subtitle">We're Not Stopping At Stories</div>
                      <div className="text">While we want to focus on video content to meet and exceed the modern standards of social media content, we also want MoodStreem to host a variety of other media and be a hub of discussion. We are making image and text based content and a robust comment system key features of the platform.</div>
                </div>
              </div>
            </div>
            
        </div>
        );
    }
}

export default Home;