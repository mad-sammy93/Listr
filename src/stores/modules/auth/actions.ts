
export default {
    async login(context:any, payload:any) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        })
    },
    async signup(context:any, payload:any) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        })
    },
    async auth(context:any, payload:any) {
        // const mode = payload.mode
        let url = 'https://nextjs-dev.deploy.nl/auth/register';
    
        // if(mode === 'signup'){
        //     url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBT9Mt9MsDhsTkeWtJWGCsKrRSzzGtf8so'
        // }
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            }),
        }) ;
    
            
        const responseData = await response.json();
    
        if(!response.ok) {
           console.log(responseData);
            const error = new Error(responseData.message || 'Failed to send request');
            throw error;
        }
    
        localStorage.setItem('token', responseData.idToken)
        localStorage.setItem('userId', responseData.localId)
    
        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
}
