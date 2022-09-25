import React, { Component } from 'react';
import Users from './Users';

class Placeholder extends Component {
    constructor(props) {
        super(props);
    }

    state = { 

        todos : [],
        filteredData :[],
        
     }
    
     componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data =>  this.setState({todos : data ,filteredData:data}));
     }

     handleChange = (e) => {
        const todo = this.state.todos;
        const searchParams = e.target.value;
        const filteredData =todo.filter(todo => todo.title.toLowerCase().includes(searchParams.toLowerCase()));
        
        this.setState({filteredData});


     }
    render() { 
        const {filteredData} = this.state;
        return ( 
            <div>
                <h1 style={{textAlign : 'center'}}>Todo List</h1>
                    <input type="search" placeholder='search' onChange={this.handleChange} />
                <Users todos={filteredData}/>
            </div>
         );
    }
}
 
export default Placeholder;