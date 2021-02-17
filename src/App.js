import { render } from '@testing-library/react';
import React from 'react';
import {useState, useEffect} from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';





const App = () => {

  const BASE_URL = "https://dashboard-api.bounceinsights.com/misc/sampleUsers";

  let [userData, setUserData] = useState([]);

  var Users = userData.users;

  useEffect( async () => {
    getUserData();
  });


  const getUserData = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setUserData(data);
    console.log(Users);

  };

  return (
    <React.Fragment>
    <nav class="navbar navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Bounce Insights</a>
    </nav>

  <div class="jumbotron">
  <h1 class="display-4">Bounce Technical Assessment</h1>
  <p class="lead">Redering user details to table from the <a href="https://dashboard-api.bounceinsights.com/misc/sampleUsers">API.</a></p>
  <hr class="my-4"></hr>
  
  <table class="table table-sm ">
      <thead className="table-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Gender</th>
          <th scope="col">Email Address</th>
          <th scope="col">Registration</th>
          <th scope="col">Surveys</th>
          <th scope="col">Id</th>
        </tr>
      </thead>
      <tbody>
      {Users && Users.map(item => (
        <tr key={item.id}>
        <td scope="row">{item.name}</td>
        <td>{item.dateOfBirth}</td>
        <td>{item.gender}</td>
        <td>{item.email}</td>
        <td>{item.registeredAt}</td>
        <td>{item.surveys}</td>
        <td>{item.userId}</td>
      </tr>
      ))}
      </tbody>
    </table>
  </div>

    

    </React.Fragment>
   
 
  );
};

export default App;
