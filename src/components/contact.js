import React, { Component, useRef } from "react";
import DataService from "../services";
import { Link } from "react-router-dom";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import {ContactUs} from "./contactus";



export default class Contact extends Component {
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

  render() {
      return(
        <ContactUs></ContactUs>
      );
  }
}