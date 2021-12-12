import React from 'react';
import { Box, Center, Heading, Input, VStack, Button, Text } from 'native-base';

const SignIn = ({navigation}) => {
    return (
        <Center flex={1} p={6}>
            <Box w="100%">
                <VStack space={4}>
                    <Heading size="2xl">Instagram Clone</Heading>
                    <Input p={3} fontSize={15} placeholder='Phone number, email or username'/>
                    <Input p={3} fontSize={15} placeholder='Password' type="password"/>
                    <Button p={3}>
                        <Text fontSize={15} color='white' fontWeight={700}>Log In</Text>
                    </Button>
                    <Text alignSelf='center' fontWeight={700}>OR</Text>
                    <Button p={3} onPress={()=>navigation.navigate('SignUp')}>
                        <Text fontSize={15} color='white' fontWeight={700}>Dont have an account? Sign up.</Text>
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default SignIn;
