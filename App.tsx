import * as React from 'react';
import { Provider as PaperProvider, BottomNavigation } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Home } from './src/pages/home'
import { Login } from './src/pages/login';


export default function App() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
    { key: 'login', title: 'Login', focusedIcon: 'login' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    login: Login
  });

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}
