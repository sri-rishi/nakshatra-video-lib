import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, DataProvider, FilterProvider, ServiceDataListProvider } from "./Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ServiceDataListProvider>
        <AuthProvider>
          <DataProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </DataProvider>
        </AuthProvider>
      </ServiceDataListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
