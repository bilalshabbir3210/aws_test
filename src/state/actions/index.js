export const increamentHandle = (counter) =>{

    return(dispatch) => {
        dispatch({
            type : 'IncreamentCounter',
            payload : counter,
        });
    }
}

export const decreamentHandle = (counter) =>{

    return (dispatch) =>{

        dispatch({
            type : 'DecreamentCounter',
            payload : counter,
        })
    }
}


