import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import StackNavigation from './navigation/StackNavigation'
import { saveToken, retrieveToken, removeToken } from './services/secureStorage';
import SSRProvider from 'react-bootstrap/SSRProvider'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    prepare();
  }, []);

  const checkIfUserHasToken = async () => {
    const token = await retrieveToken();
    setToken(token);
  }

  const login = (token) => {
    if (!token) throw new Error();
    setToken(token);
    saveToken(token);
  }

  const logout = async () => {
    await removeToken();
    setToken(null);
  }

  const prepare = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await checkIfUserHasToken();
    } catch (error) {
      console.warn(error);
    } finally {
      setAppIsReady(true);
    }
  }

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);


  return (
    (!appIsReady)
      ? null
      : <SSRProvider>
        <NavigationContainer
          onReady={onLayoutRootView}
        >
          <StackNavigation token={token} login={login} logout={logout} />
        </NavigationContainer>
      </SSRProvider>
  );
}

