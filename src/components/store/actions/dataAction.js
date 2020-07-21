export const createData =(data)=>{
    return (dispatch ,getState)=>{
        dispatch ({type:'CREATE_DATA' ,data});

    }
};