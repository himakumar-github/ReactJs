import { Tab } from 'bootstrap';
import React, { Component } from 'react';
class Mycomponents extends Component {
    state = { 
        emps:[
                {
                    "id": 101,
                    "name": "Abdul",
                    "dept": "IT",
                    "salary":45000
                },
                {
                    "id": 102,
                    "name": "John",
                    "dept": "Sales",
                    "salary":25000
                },
                {
                    "id": 103,
                    "name": "Ramu",
                    "dept": "Admin",
                    "salary":15000
                },
          ]
         }
         render() {
            return (
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">DEPARTMENT</th>
      <th scope="col">SALARY</th>
    </tr>
  </thead>
  <tbody>
    {
        this.state.emps.map(eachemp=>
            <tr>
            <th scope="row">{eachemp.id}</th>
            <td>{eachemp.name}</td>
            <td>{eachemp.dept}</td>
            <td>{eachemp.salary}</td>
          </tr>
        )
      }
    </tbody>
    </table>
           )
         }
     } 
export default Mycomponents;