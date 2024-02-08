import React,{useState} from 'react'

function Model(props) {
    const [show,setShow] = useState(props.show)
    return (
        <div className={`modal ${show ? 'd-block' : ''}`} >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-danger text-light">
                        <h5 className="modal-title" id="exampleModalLongTitle">Confirm Delete</h5>
                        <button type="button" className="btn text-light" onClick={() => setShow(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model