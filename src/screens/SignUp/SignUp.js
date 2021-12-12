import React, { useState } from 'react';
import { Box, Button, Center, Heading, Input, Text, VStack } from 'native-base';
import { signUpUsingEmailAndPassword } from '../../helpers/firebase/auth/authHelpers';

const SignUp = ({ navigation }) => {
    const [name, setName ] = useState('');
    const [password, setPassword ] = useState('');
    const [email, setEmail ] = useState('');
    const [error, setError ] = useState('');

    const handleSubmit = async() => {
        signUpUsingEmailAndPassword(email, password).then((res)=>{
            if (res?.error) {
                setError(res.error.message);
            }
        });
    }

    return (
        <Center flex={1} p={6}>
            <Box w="100%">
                <VStack space={4}>
                    <Heading size="2xl">Instagram Clone</Heading>
                    <Heading size="md">Sign Up</Heading>
                    <Input p={3} fontSize={15} placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Input p={3} fontSize={15} placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input p={3} fontSize={15} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <Text color='green.500' fontWeight={500} alignSelf='center'>{error}</Text>}
                    <Button p={3} onPress={() => handleSubmit()}>
                        <Text fontSize={15} color='white'>Next</Text>
                    </Button>
                    <Text alignSelf='center' fontWeight={700}>OR</Text>
                    <Button p={3} onPress={() => navigation.navigate('SignIn')}>
                        <Text fontSize={15} color='white' fontWeight={700}>Already have an account? Sign In.</Text>
                    </Button>
                </VStack>
            </Box>
        </Center>
    )
}

export default SignUp

