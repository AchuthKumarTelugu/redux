export const depositCash = (amount)=>{
    return (dispatch)=>{
    dispatch({
        type:'add',
        payload:amount
    })
    }
}
export const withdrawCash = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'delete',
            payload:amount
        })
    }
}