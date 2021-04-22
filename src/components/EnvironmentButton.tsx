import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({ 
  title,
  active = false,
  ...rest
 }) {
  return (
    <View>
      <Text>
        Botão
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
});