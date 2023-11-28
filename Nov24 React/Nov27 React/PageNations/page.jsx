import React, { Component } from 'react';
import PageNation from './pageNation';
import _ from 'lodash';
class Page extends Component {
    state = { 
        perPage : 3,
        currentPage:1,
         data :[
            {
                id:1,
                Name:"Himakumar",
                location:"Hyderabad"
            },
            {
                id:2,
                Name:"Himakumar",
                location:"Hyderabad"
            },
            {
                id:3,
                Name:"Himakumar",
                location:"Hyderabad"
            },
            {
                id:4,
                Name:"Himakumar",
                location:"Hyderabad"
            },
            {
                id:5,
                Name:"Himakumar",
                location:"Hyderabad"
            },
            {
                id:6,
                Name:"Himakumar",
                location:"Hyderabad"
            },
            {
                id:7,
                Name:"Himakumar",
                location:"Hyderabad"
            },
            {
                id:8,
                Name:"Himakumar",
                location:"Hyderabad"
            },
            {
                id:9,
                Name:"Himakumar",
                location:"Hyderabad"
            },
        ]
     }
        pageClicked=pag=>{
            console.log("page Clicked..."+pag)
            this.setState({currentPage:pag})
    }
    pageFilterRecords() {
        const startIndex = ( this.state.currentPage - 1) * this.state.perPage;
        return _(this.state.data)
          .slice(startIndex)
          .take(this.state.perPage)
          .value();
    }
    render() { 
        return (
            <div>
                <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">LOCATION</th>
              </tr>
            </thead>
            <tbody>
               {
                this.pageFilterRecords().map(
                    each=><tr>
                    <th scope="row">{each.id}</th>
                    <td>{each.Name}</td>
                    <td>{each.location}</td>
                  </tr>
                )
               }
            </tbody>
          </table>
          <PageNation len={this.state.data.length} pag={this.state.perPage} pageChange={this.pageClicked} Hanled={this.pageHanlde}></PageNation>
            </div>
        );
    }
}
export default Page;