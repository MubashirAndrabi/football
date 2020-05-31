import Axios from 'axios';
const SCORES = 'app/scores/SCORES';
const CURRENT_MATCH = 'app/scores/CURRENT_MATCH';


export default function reducer(state={results:[],liveScore:{}},action){

    switch(action.type){

        case SCORES:
            return {...state, results:action.values}
            case CURRENT_MATCH:
                return {...state, liveScore:action.value}
            default:
                return state
    }
    
}



export function scores(values){
    return{type: SCORES , values}
}

export function currentMatch(value){
    return{type: CURRENT_MATCH , value}
}

export function allScores(){
    return (dispatch,getState) => {

        Axios.get("https://api.football-data.org/v2/matches?dateFrom=2020-06-15&dateTo=2020-06-25", {
	"headers": {
		'X-Auth-Token': '78c344381c794ce880b288d279bb81a0'
	}
})
.then(response => {
    const data = response.data.matches.map((item)=>{
        return item;
    })

    dispatch(scores(data))

})
.catch(err => {
	console.log(err);
});

    }
}
