import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import  './style.css'

function Sidebar() {
    const [active, setActive] = useState(1);
    return (
        <div className= 'sidebar d-flex justify-content-between flex-column bg-danger text-white py-3 ps-3 pe-5 vh-100'>
            <div>
                <span className='p-3 text-decoration-none text-white'>
                    <i className='bi bi-code-slash fs-4 p-4'></i>
                    <span className='fs-4'> Honeywell</span>
                </span>
                <hr className='text-white mt-2' />
                <ul className='nav nav-pills flex-column mt-2'>
                    <li className={active===1 ? 'active nav-item p-2':'nav-item p-2'} onClick={e => setActive(1)}>
                        <span className='p-1'>
                            <i className='bi bi-speedometer2 me-3 fs-4'></i>
                            <span className='fs-4'><strong>Dashboard</strong></span>
                        </span>
                    </li>
                    <li className={active===2 ? 'active nav-item p-2':'nav-item p-2'} onClick={e => setActive(2)}>               
                         <span className='p-1'>
                            <i className='bi bi-people me-3 fs-4'></i>
                            <span className='fs-4'><strong>Users</strong></span>
                        </span>
                    </li>
                    <li className={active===3 ? 'active nav-item p-2':'nav-item p-2'} onClick={e => setActive(3)}>                         
                        <span className='p-1'>
                            <i className='bi bi-table me-3 fs-4'></i>
                            <span className='fs-4'><strong>Table</strong></span>
                        </span>
                    </li>
                    <li className={active===4 ? 'active nav-item p-2':'nav-item p-2'} onClick={e => setActive(4)}>                         
                        <span className='p-1'>
                            <i className='bi bi-grid me-3 fs-4'></i>
                            <span className='fs-4'><strong>Report</strong></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <hr className='text-white' />
                <div className='nav-item p-2'>
                        <span className='p-1 text-decoration-none text-white'>
                            <i className='bi bi-person-circle me-3 fs-4'></i>
                            <span className='fs-4'><strong>Cristiano</strong></span>
                        </span>
                </div>
            </div>
        
        </div>
    )
}

export default Sidebar