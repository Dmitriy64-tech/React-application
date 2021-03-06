import React, {useState, useEffect} from 'react'

const ProfileStatusWithHooks = (props) => {
    
    let [editMode,setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode =() =>{
        setEditMode(true);
    }
    const deactivateEditMode =() =>{
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }
    

    return (
        <div>
            {
                editMode
                    ? <div>
                        <input  autoFocus={true}
                        onBlur ={deactivateEditMode}
                          onChange={onStatusChange} 
                          value={status}>
                        </input>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>
                            <b>Status:</b> {props.status || "No status"} 
                        </span>
                    </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;