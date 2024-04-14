import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import FoodScreen from "./screens/FoodScreen";
import MenuScreen from "./screens/MenuScreen";
import OrderScreen from "./screens/OrderScreen";
import CartScreen from "./screens/CartScreen";
import LoadingScreen from "./screens/LoadingScreen";
import homeIcon from './assets/homeIcon.png';
import foodIcon from './assets/foodIcon.png';
import instamart from './assets/instamart.png';
import searchIcon from './assets/searchIcon.png';
import profileIcon from './assets/profileIcon.png';
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "black",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#eee",
            height: 60,
            paddingBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Image source={homeIcon} style={{width: 20, height: 30}} />
            ),
          }}
        />
        <Tab.Screen
          name="FoodScreen"
          component={FoodStackScreen}
          options={{
            tabBarLabel: "Food",
            tabBarIcon: ({ color, size }) => (
              <Image source={foodIcon} style={{width: 30, height: 30}} />
            ),
          }}
        />
        <Tab.Screen
          name="InstamartScreen"
          component={FoodScreen}
          options={{
            tabBarLabel: "Instamart",
            tabBarIcon: ({ color, size }) => (
              <Image source={instamart} style={{width: 30, height: 30}} />
            ),
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Image source={searchIcon} style={{width: 30, height: 30}} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused,color, size }) => (
              <Image source={profileIcon} style={{width: 30, height: 30, borderColor: "black"}} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const FoodStack = createNativeStackNavigator();

const FoodStackScreen = () => {
  return (
    <FoodStack.Navigator screenOptions={{headerShown: false}}>
      <FoodStack.Screen name="Food" component={FoodScreen} />
      <FoodStack.Screen name="Menu" component={MenuScreen} />
      <FoodStack.Screen name="Cart" component={CartScreen} />
      <FoodStack.Screen name="Loading" component={LoadingScreen} />
      <FoodStack.Screen name="Order" component={OrderScreen} />
    </FoodStack.Navigator>
  );
}
export default TabNavigator;

const styles = StyleSheet.create({})

