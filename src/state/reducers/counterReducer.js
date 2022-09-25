
const counter = (state=0 , action)=>{

    if(action.type === 'IncreamentCounter'){
        //let counter  = ...state;
        return state => state + 1 ;
    }else if(action.type === 'DecreamentCounter'){
        return state=> state - 1 ;
    }else{
        return state;
    }

}

export default counter;