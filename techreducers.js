const initialState = {
    tech: null,
    loading: false,
    error: null
};
export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TECHS:
            return {
                ...state,
                techs: [...state.techs, action.payload,]
                loading: false
            }
        case SET_LOADING:
        default:
            return{ ...state,
                loading: true
            }
            default:
                return state;
    }
    case TECHS_ERROR:
        console.error(action.pay);
        return {
            
        }
};