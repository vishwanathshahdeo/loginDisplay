import React, { Component } from 'react';
import menuData from './menudata.json';
import './selectedItem.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import Button from '@material-ui/core/Button';

class ItemList extends Component {
    state = {
        data: []
    };
 
    componentDidMount() {
    this.setState({ data: menuData });

    }

handleChange=(e)=>{  
    
    
}

deleteItem =(id) =>{
    const newList = this.state.data.filter((item) => item.id !== id);
 
    this.setState({data:newList});
}
   render() {

        return (
<ThemeProvider theme={theme}>
            <AppBar position="fixed">
        <Toolbar><h1>ItemList</h1></Toolbar>
</AppBar>
            
                <div >
                    
                    <div>
                        {
                            this.state.data.map((item, i) => {
                                /*console.log(item)*/
                                return (<div className="cardItem" key={item.id}>< img src={item.imageUrl} alt="Image_unavailable" style={{ width: "100%" }} />
                                <h1>{item.name}</h1>
                                <label><b>Rate:</b><input  onChange={this.handleChange} defaultValue={item.rate} /> </label>
                            <p>Qwality:{item.quality}</p>
                            <Button onClick={this.deleteItem.bind(this,item.id)}>Delete Item</Button>
                                </div>)
                            })
                        }
                    </div>
                </div>
                </ThemeProvider>
        );
    }
}

export default ItemList;
