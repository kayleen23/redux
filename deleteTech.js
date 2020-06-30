export const deleteTech = id => async dispatch => {
    try {
        setLoading();

dispatch({
    type: GET_TECHS,
    payload: data
});
} catch (err) {
dispatch({
    type: TECHS_ERROR,
    payload: err.response.data

    case DELETE_TECH:
        return{ 
            ...StaticRange,
            techs: state.techs.filter(tech => tech.id !== action.payload),
            loading:false
        };
     })
}