import React, { useState }
} from 'react'

export const addblog = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention]= useState(false);
    const [tech, setTech] = useState('');
    const onSubmit = () => {
        console.log(message, tech, attention);
    }
    return (
        <div id='add-log-modal' className="modal">
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                    <input 
                    type='text'
                    name='message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}/>
                    <label htmlfor='message' className='active'>
                        log Message
                    </label>

                    </div>
                </div>
                </div>
            
        </div>
    )
}


