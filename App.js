import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import AddQuestion from './AddQuestion';
import Card from './Card';
const visibleTabs = { isAppVisible: true, isCard: false, is: false };
const addCardToDeck = function (card, deck) {
  decks[deck].questions.push(card);
}
const getDeck = function (deck) {
  return decks[deck];
}
const saveDeckTitle = function (title) {
  Object.assign(decks, { [title]: { title: title } });
}

const decks = {
  meaning:
  {
    title: 'meaning',
    questions: -[{
      question: 'What is the meaning of life?',
      answer: 'To learn as much as possible'
    }]
  },
  react: {
    title: 'react',
    queestions: [
      {
        question: 'what are the main benefits of reactjs',
        answer: 'It is lightweight and only requires javascript knowledge'
      },
      {
        question: 'what are the disadvantages',
        answer: "it doesn't come with many other packages like unit tests"
      }
    ]
  },
  capitols: {
    title: 'capitols',
    questions: [{
      question: 'what is the capital of New Yort',
      answer: 'New York City'
    }
    ]
  },
  math: {
    title: 'math',
    questions: [
      {
        question: 'What is the derivative of x',
        answer: '1'
      }]
  },
  science: {
    title: 'science',
    questions: [{
      question: 'What is newtons first law',
      answer: 'every action has a reaction'
    }]
  }
};

const Separator = () => (
  <View style={styles2.separator} />
);

export default function App() {
  const [currentCard, setCurrentCard] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* {Object.keys(cards).forEach((x,y)=> <Text>x</Text>   )}    */}
      Current Card is {currentCard}

      {Object.keys(decks).map((x, y) =>
        <View key={x}>
          <Text>{x}  </Text>
          <Button onPress={() => { setCurrentCard(x) }} title={x}> </Button>
        </View>)}

      <Card visibleTabs={visibleTabs} />
      <AddQuestion visibleTabs={visibleTabs} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

