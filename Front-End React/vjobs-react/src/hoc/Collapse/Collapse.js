//higth order components
import React from 'react';

const collapse = (props) => (
    <div>
        <div className="container mt-2 mb-2" > 
            <a className="btn btn-primary mb-2" data-toggle="collapse" href={"#" + props.collapseId}role="button" aria-expanded="false" aria-controls="collapseExample">
            {props.innerText}
            </a>
            <div className="collapse" id={props.collapseId}>
                <div className='card card-body'>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
)

export default collapse;