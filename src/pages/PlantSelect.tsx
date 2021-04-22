import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native';

import { Header } from '../components/Header'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta?
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 15,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 18,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 15,
    lineHeight: 18,
    color: colors.heading
  }
})