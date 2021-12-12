import { auth } from '../firebase';

export const signUpUsingEmailAndPassword = async(email, password, name) => {
    let response = {};
    try{
        await auth.createUserWithEmailAndPassword(email, password)
            .then(()=>{
                response.data = {
                    uid: user?.uid,
                };
            })
            .catch((error) => {
                response = { error: error };
            });
    }
    catch(err){
        response = {
            message: {
                code: 'auth/unable-to-register',
                message: `Unable to register. Error: ${err}`
            },
        };
    };
    return response;
};

export const signInUsingEmailAndPassword = async(email, password) => {
    let response;
    try{
        await auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                response = {
                    message: {
                        code: 'auth/signin-success',
                        message: `SignIn Successfully!`,
                    }
                };
            })
            .catch((error) => {
                response = { message: error };
            });
    }
    catch(err){
        response = {
            error: {
                code: 'auth/unable-to-signin',
                message: `Unable to signin. Error: ${err}`
            },
        };
    };
    return response;
}

export const signOut = () => {
    auth.signOut();
}
