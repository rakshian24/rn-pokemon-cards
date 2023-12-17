/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const PokemonCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Bulbasaur</Text>
        </View>
        <View style={styles.headerRightContainer}>
          <View>
            <Icon
              name="heart"
              size={20}
              color={colors.red}
              style={{marginRight: 4}}
            />
          </View>
          <View style={styles.headerRightTextContainer}>
            <Text style={styles.headerRightText}>HP: </Text>
            <Text style={styles.headerRightText}>49</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightTextContainer: {
    flexDirection: 'row',
  },
  headerRightText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
