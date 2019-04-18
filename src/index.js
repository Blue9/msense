import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/home.js';


const content = document.getElementById("content");
content ? ReactDOM.render(<HomePage />, content) : false;
