import {
    GET_TECHS, ADD_TECHS, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types';
    import { connect } from 'react-redux';
    import PropTypes from 'prop-types';
    import { addTech } from '.././.';
    import M from 'materialize-css/dist/js/materialize.min.js';

    const TechListModal = () => {
        const [techs, setTechs] = useState {[]};
        const [loading, setLoading] = useState(false);

        useEffect (() => {
            GET_TECHS();
        }, []);
    };
    
     const onSubmit = () => {
         if (firstName === '' || lastName === ''){
             M.Toast({ html: 'Please Enter First and Last name'});

         } ELSE {
             console.log(firstname, lastName);

             SetFirstName('');
             setLastName('');
         }
         M.Toast({ html: '${firstName'} ${lastName} was added as a tech');
     }
    export const addTech = (tech) => async dispatch => {
        try {
            setLoading();

            const res = await fetch('/techs');
            method: 'POST'
            body:JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const data = await res.json();

            dispatch({
                type: GET_TECHS,
                payload: data
            });
        } catch (err) {
            dispatch({
                type: TECHS_ERROR,
                payload: err.response.data
            })
        }
    }
    const AddTechModal = () => {
        const [firstname, SetFirstName]
        const [lastName, setLastName]
    }

export const setLoading = () => {
    return {
        <div id='tech-list-modal' className='modal>
        <div className='modal-content'>
        <ul className='collection'>
        {!loading &&
        techs.map(tech => <techItem tech={tech.id} /> }}
            </ul>
            </div>
            </div>

    };
};

TechListModal
const mapStateToProps = state => {{
    tech: state.tech
}};


export default connect(mapStateToProps, { getTechs })(TechListModal);

AddTechModal.PropTypes = {

}
export default connect(null, { addTech })(AddTechModal);