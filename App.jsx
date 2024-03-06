import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import  { useEffect, useState } from "react";

import Contact from "./src/screens/Contact";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const Tab = createBottomTabNavigator();

  let [msg, setMsg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsg((prevMsg) => prevMsg + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#25d366",
        }}
      >
        <Tab.Screen
          name="Home"          component={Home}
          options={{
            tabBarLabel: "Início",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: "Contact",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="whatsapp" color={color} size={26} />
            ),
            tabBarBadge: msg > 99 ? "99+" : msg,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
