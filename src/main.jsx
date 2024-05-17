import React from "react";
import { createRoot as createAppRoot } from "react-dom/client";

import CustomNotesApp from "./components/CustomNotesApp";
import "./styles/index.css";

const root = createAppRoot(document.getElementById("root"));
root.render(<CustomNotesApp />);
