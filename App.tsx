import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import ContactList from './components/contactList/ContactList';
// import Header from './components/header/Header';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: 60,
          backgroundColor: '#ffffff',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 16,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          elevation: 2,
        }}>
        <Text>Menu</Text>
        <Text>Contact</Text>
        <Text>Search</Text>
      </View>
      <View style={{flex: 1}}>
        {/* <Header /> */}
        <ContactList />
      </View>
    </SafeAreaView>
  );
}

export default App;
