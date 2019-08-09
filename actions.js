import React, {Component} from "react";
import TypingEffect from "typing-effect-react";

const welcome = document.getElementsByClassName('welcome');

function gotolinkedin(){
    window.open ("https://www.linkedin.com/in/nguyennpaulina");
}

function projectPage(){
    alert("This page is still being developed :)");
}

class YourComponent extends Component {
    render() {
      return <TypingEffect data={["Hello world :)", "Hello again :)"]} />;
    }
  }