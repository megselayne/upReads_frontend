import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, SectionList, View } from "react-native";
import Styles from './Styles';
const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];



const Home = () => {
    const Item = ({ title }) => (
        <View style={Styles.item}>
          <Text style={Styles.title}>{title}</Text>
        </View>
    );

  return (
    <SafeAreaView style={Styles.container}>
    <SectionList
      horizontal={true}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={Styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  );
};

export default Home;