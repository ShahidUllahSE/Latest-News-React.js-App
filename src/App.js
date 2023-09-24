import './App.css';
import React, { useState } from 'react'
 import NavBar from './components/NavBar'; 
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'



const App=()=> {
  // const [progress, setprogress] = useState(0)

        return (
          <Router> 
            <div>
           
              <NavBar />
              <Routes>
                <Route
                  path="/"
                  element={<News key="general" pageSize={5} country="in" category="general" />}
                ></Route>

                  <Route
                  path="/business"
                  element={<News key="business" pageSize={5} country="in" category="business" />}
                ></Route>

                  <Route
                  path="/entertainment"
                  element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />}
                ></Route>



                  <Route
                  path="/general"
                  element={<News key="general" pageSize={5} country="in" category="general" />}
                ></Route>



                  <Route
                  path="/health"
                  element={<News key="health" pageSize={5} country="in" category="health" />}
                ></Route>

                <Route
                  path="/science"
                  element={<News key="science" pageSize={5} country="in" category="science" />}
                ></Route>


                <Route
                  path="/sports"
                  element={<News key="sports" pageSize={5} country="in" category="sports" />}
                ></Route>



                  <Route
                  path="/technology"
                  element={<News key="technology" pageSize={5} country="in" category="technology" />}
                ></Route>




              </Routes>
            </div>
          </Router>
        );
      };
      
      export default App;
      
