import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import ContactList from './components/contactList/ContactList';
import Header from './components/header/Header';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ContactList />
    </SafeAreaView>
  );
  // return <Text>sdgdfg</Text>;
}

export default App;
