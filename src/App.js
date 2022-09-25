import logo from './logo.svg';
import './App.css';
import Navbar from './Components/home/Navbar';
import Placeholder from './Components/Placeholder/Placeholder';
import { useDispatch, useSelector , connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { actionCreator } from './state';

function App(props) {
  
  const dispatch = useDispatch();
  const {increamentHandle , decreamentHandle} = bindActionCreators(actionCreator , dispatch);
  // const counter = useSelector(state => state.counter);
  
  return (
    <div className="App">
      {/* <Navbar start="Hello" middle="Miss" name="Tanuja"/> */}

        <Button variant='primary' onClick={() => increamentHandle(props.counter)}>+</Button>
        <p>{props.counter}</p>  
        <Button variant="danger" onClick={() => decreamentHandle(props.counter)} >-</Button>  

    </div>
  );
}

const mapStateToProps=(state)=>
{
    return{
        counter: state.counter
    }
}
export default connect(mapStateToProps)(App);