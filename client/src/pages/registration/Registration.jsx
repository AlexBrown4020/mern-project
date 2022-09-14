import React from 'react';

export const Registration = () => {
    return (
        <div>
            <h2>Register</h2>
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>
                        Username:
                    </label>
                    <input 
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    />
                    <label htmlFor='password'>
                        Password:
                    </label>
                    <input 
                    type='password'
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    />
                    <label htmlFor="confirmPwd">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirmPwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                    />
                </form>
            </div>
        </div>
    )
}