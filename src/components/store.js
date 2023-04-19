import React, { Component } from "react";
import DataService from "../services";
import { Link } from "react-router-dom";
import "../styles/store.css";



export default class Store extends Component {
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
      <div className="store-container">
      <div className="contact-title">MoodStreem Store</div>

      <div className="store-text">
        <div className="store-pretext">
          Welcome to the MoodStreem Store! Proceeds and royalties from our store will go towards supporting the MoodStreem ecosystem as we continue development.
         
          We plan to have physical merchandise added to our store in the near future!
        </div>
        
        <div className="opensea-title">Opensea Assets</div>

        <div className="opensea-text">We have listed our first non-fungible assets on OpenSea! As these are our very first assets, they are Tier 1, meaning they will have the highest base voting power of any of our governance assets. Remember, we're just getting started 
        and supporting development. Our big collections are underway!</div>

        </div>
        <div className="cards-container">
          <div className="card-container">
          
          
            <nft-card
            tokenAddress="0x495f947276749ce646f68ac8c248420045cb7b5e"
            tokenId="96992185146916278361451728444758184607614776950004640635031808801783714676738"
            network="mainnet"
            referrerAddress="YOUR_ADDRESS_HERE"
            width="100%"
            height="100%"
            horizontal
            >
            </nft-card>
          </div>
        </div>
      </div>
    );
}
}