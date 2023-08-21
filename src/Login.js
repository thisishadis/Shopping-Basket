import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-between p-4 w-[450px] h-[700px] bg-blue-200">
            <p>login</p>
            <button onClick={()=>{navigate('/')}}>back to HOME</button>
        </div>
    );
}

export default Login;