/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./components/NoteApp";
import './style.css'

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp/>)