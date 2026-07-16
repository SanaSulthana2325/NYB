export const initialState={

present:0,
absent:0

};

export function attendanceReducer(state,action){

switch(action.type){

case "PRESENT":

return{

...state,
present:state.present+1

};

case "ABSENT":

return{

...state,
absent:state.absent+1

};

default:

return state;

}

}