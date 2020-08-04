import React, {Component} from 'react';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';


class Login extends Component{

    state={
           username:'',
           password:''

    };


    userChange=(e)=>{

this.setState({username: e.target.value})
    }

    passwordChange =(e) =>{
this.setState({password:e.target.value})

    }

    clickHandler=()=>{ 
if(this.state.username === 'Clarion@clarion.com' && this.state.password === 'Clarion123'){

    this.props.history.push("/itemList");
}
    else {
    alert("wrong credentials");
}
}

    
    render(){

        const {username, password}= this.state;
        return(
            <div>
                <h1>Dive In</h1>
                <form>
<TextField
              variant="outlined"
              label="Username"
              name="Username"
              value={username}
              onChange={this.userChange}
              
            />
            <TextField
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={this.passwordChange}
            />
           
            <Button
             
              variant="contained"
              color="primary"
              onClick={this.clickHandler}
              
            >
              Sign In
            </Button>
            </form>
            </div>


        );
    }
}

export default Login;