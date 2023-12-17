import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {colors} from './constants/colors';
import PokemonCardsContainer from './components/PokemonCardsContainer';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.appContainer}>
        <PokemonCardsContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  appContainer: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export default App;
