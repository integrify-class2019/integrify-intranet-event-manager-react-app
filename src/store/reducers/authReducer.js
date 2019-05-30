const initState = {
    authError: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return { ...state, authError: 'Login fail' };
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return { ...state, authError: null };
        case 'SIGNOUT_SUCCESS':
            console.log('signout  success', action.signOut);
            return { ...state, signOut: action.signOut };
        case 'SIGNUP_SUCEESS':
            console.log('signup success');
            return { ...state, authError: null };
        case 'SINGUP_ERROR':
            console.log('signup error');
            return { ...state, authError: action.err.message };
        default:
            return state;
    }
};

export default authReducer;
