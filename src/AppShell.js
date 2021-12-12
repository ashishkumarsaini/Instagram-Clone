import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from './helpers/firebase/auth/authContext'
import CoreBrowsing from './CoreBrowsing';

const AppShell = () => {
    return (
        <AuthProvider>
            <NativeBaseProvider>
                <CoreBrowsing />
            </NativeBaseProvider>
        </AuthProvider>
    );
};

export default AppShell;
