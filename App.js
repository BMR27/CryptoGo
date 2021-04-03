
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from 'cryptoGo/src/components/coins/CoinsStack';
import FavoritesStack from 'cryptoGo/src/components/favorites/FavoritesStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from 'cryptoGo/src/res/colors';

import CoinsScreen from './src/components/coins/CoinsScreen';


const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <>
    {/**
    
    
    <CoinsScreen />*/}
<NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: "#fefefe", 
          style: {
            backgroundColor: Colors.blackPearl
          }
        }}
      >
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image 
                  style={{ tintColor: color, width: size, height: size }}
                  source={require('cryptoGo/src/assets/bank.png')}
              />
            )
          }


          }
        />
         <Tabs.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image 
                  style={{ tintColor: color, width: size, height: size }}
                  source={require('cryptoGo/src/assets/star.png')}
              />
            )
          }


          }
        />
      </Tabs.Navigator>
    </NavigationContainer>
    
    </>
  
  );
};



export default App;
