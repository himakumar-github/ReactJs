import React, { Component } from 'react';
import { getStudentStatus } from '../StudentServices/studentData';
class StudentEvent extends Component {
    state = {
        studentInfo:getStudentStatus()
      }
      passedStudents=()=>{
       const pass=this.state.studentInfo.filter(std=> std.Maths>=35 && std.Science>=35 && std.Social>=35)
       this.setState({studentInfo:pass})
      }
      failedStudents=()=>{
        const allStudents=this.state.studentInfo;
        const allfailed=allStudents.filter(eachstudent=>eachstudent.Maths<35 || eachstudent.Science<35 || eachstudent.Social<35);
        this.setState({studentInfo:allfailed})
      }
      refresh=()=>{
       const refresh=getStudentStatus();
       const allFilterStudents=refresh.filter(eachstudent=>eachstudent)
       this.setState({studentInfo:allFilterStudents})
      }
    render() {
        return (
            <div>
                 <button onClick={()=>this.passedStudents()} className='btn btn-primary m-4'>PassedStudents</button>
                 <button onClick={()=>this.failedStudents()} className='btn btn-danger m-4'>FailedStudents</button>
                 <button onClick={()=>this.refresh()} className='btn btn-warning m-4'>Refresh</button> 
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">MATHS</th>
                        <th scope="col">SCIENCE</th>
                        <th scope="col">SOCIAL</th>
                    </tr>
                </thead>
            <tbody>
            {
            this.state.studentInfo.map(
             a=><tr>
                    <td>{a.id}</td>
                    <td>{a.Name}</td>
                    <td>{a.Maths}</td>
                    <td>{a.Science}</td>
                    <td>{a.Social}</td>
                </tr>
                )
            }
            </tbody>
        </table>
    </div>
        );
    }
}
export default StudentEvent;