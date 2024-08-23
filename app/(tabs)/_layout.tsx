import TabBarIcon from "@/components/TabBarIcon"
import { Tabs } from "expo-router"
import React from "react"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon FontAwesomeName={"home"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="market"
        options={{
          title: "Market",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon FontAwesomeName={"shopping-cart"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon FontAwesomeName={"gear"} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
