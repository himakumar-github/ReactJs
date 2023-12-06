import React, { Component } from 'react';
class LoginForm extends Component {
    state = {
        userDetails: {
            username: "",
            password: ""
        }
    };
    handleSubmitt = (e) => {
        e.preventDefault();
        console.log("Submitt Pressed");
        console.log("acount .. username--->" + this.state.userDetails.username);
        console.log("acount .. password--->" + this.state.userDetails.password);
    }
    // handleOnChange = (e) => {
    //     const details = { ...this.state.userDetails };
    //     details[e.currentTarget.name] = e.currentTarget.value;
    //     this.setState({ userDetails:details });
    // }
    handleusernameChange=(f)=>{
        const user={...this.state.userDetails};
        user.username=f.currentTarget.value;
        this.setState({userDetails:user});
    }
    handlePasswordChange=(f)=>{
        const userdetails={...this.state.userDetails};
        userdetails.password=f.currentTarget.value;
        this.setState({userDetails:userdetails});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmitt}>  
                    <div className="form-group">
                        <label>UserName</label>
                    <input
                        onChange={this.handleusernameChange}
                        value={this.state.userDetails.username} 
                        type="text"
                        className="form-control"
                        name="username"

                    />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                    <input
                        onChange={this.handlePasswordChange}
                        value={this.state.userDetails.password}
                        type="password"
                        className="form-control"
                        name="password"
                    />
                    </div>
                <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        );
    }
}
export default LoginForm;