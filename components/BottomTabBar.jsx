import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import Home from "./screens/Home";
import WishList from "./screens/Wishlist";
import Order from "./screens/Order";
import Account from "./screens/Account";
import Colors from "../constants/Colors";
import HomeHeader from "./HomeHeader";
import { useColorScheme } from "nativewind";

const Icon = ({ type, name, color, size = 24, style }) => {
  const fontSize = 24;
  const Tag = type;
  return (
    <>
      {type && name && (
        <Tag name={name} size={size || fontSize} color={color} style={style} />
      )}
    </>
  );
};

const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const { colorScheme } = useColorScheme();

  const { colors } = useTheme();
  const color = colorScheme == "dark" ? "white" : "black";
  const bgColor = colorScheme == "dark" ? "black" : "white";

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={600} style={styles.container}>
        <View
          style={[
            styles.btn,
            { borderColor: bgColor, backgroundColor: bgColor },
          ]}
        >
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.iconLibrary}
            name={item.icon}
            color={focused ? Colors.white : Colors.secondary}
          />
        </View>
        <Animatable.Text ref={textRef} style={[styles.text, { color }]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const MainBottomTabBar = () => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();
  return (
    <Tab.Navigator
      safeAreaInsets={{ bottom: 10 }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme == "dark" ? "black" : "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          // header: () => <HomeHeader />,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              item={{
                label: "Home",
                size: 22,
                icon: "home",
                iconLibrary: FontAwesome,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wish List"
        component={WishList}
        options={{
          headerShown: true,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              item={{
                label: "Wish List",
                size: 22,
                icon: "heart",
                iconLibrary: FontAwesome,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: true,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              item={{
                label: "Order",
                size: 22,
                icon: "shopping-bag",
                iconLibrary: FontAwesome,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: true,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              item={{
                label: "Account",
                size: 22,
                icon: "account-circle",
                iconLibrary: MaterialIcons,
              }}
              // onPress={() => console.log("Account clicked")} // navigation.openDrawer()
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 55,
  },
  tabBar: {
    height: 70,
    position: "absolute",
    margin: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: Colors.secondary,
    fontWeight: "500",
  },
});

export default MainBottomTabBar;
