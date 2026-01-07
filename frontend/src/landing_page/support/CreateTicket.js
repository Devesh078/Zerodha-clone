import React from 'react';

function CreateTicket() {
    return ( 
       <div className='container my-5'>
           <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="fw-semibold">Support Portal</h2>
                <button class="btn btn-primary px-4">My tickets</button>
            </div>

        <div class="card border-0 shadow-sm">
            <div class="card-body p-3">
                <div class="input-group input-group-lg">
                    <span class="input-group-text bg-white border-end-0">
             <      i class="bi bi-search text-muted"></i>
                </span>
                    <input 
                        type="text"
                        class="form-control border-start-0"
                    placeholder="Eg: How do I open my account, How do i activate F&O..."
                    />
            </div>
        </div>
    </div>
    </div>
     );
}

export default CreateTicket;