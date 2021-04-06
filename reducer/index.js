

const INITIAL_STATE = {
    user : "Ghous",
    mail: "abc@mail.com"
}

export default (state = INITIAL_STATE, action) =>{
    console.log("ACTION", action)
    switch(action.type){
        case "SETDATA" :
            return({
                ...state,
                user : action.data
            })
    }
    return state;
}