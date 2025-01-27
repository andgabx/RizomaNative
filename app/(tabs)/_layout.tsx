import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { TabIcon, TabLabel } from "@/components/TabBar";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#8B4513",
        tabBarInactiveTintColor: "#8B4513",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#ADBA61",
          borderTopWidth: 0,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          height: 80,
          position: "absolute",
          bottom: 0,
          paddingVertical: 15,
        },
        tabBarItemStyle: {
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="home" color={color} focused={focused} />
          ),
          tabBarLabel: ({ color }) => <TabLabel label="Início" color={color} />,
        }}
      />
      <Tabs.Screen
        name="fields"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="map-marked-alt" color={color} focused={focused} />
          ),
          tabBarLabel: ({ color }) => <TabLabel label="Campos" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="calendar-alt" color={color} focused={focused} />
          ),
          tabBarLabel: ({ color }) => (
            <TabLabel label="Calendário" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="deliveries"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="truck" color={color} focused={focused} />
          ),
          tabBarLabel: ({ color }) => (
            <TabLabel label="Entregas" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
