import React, {useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import ContactList from './components/contactList/ContactList';
import useFetch from './hook/useFetch';

function App(): React.JSX.Element {
  const {data, loading, fetchData} = useFetch(
    'https://reqres.in/api/users?page=2',
  );

  useEffect(() => {
    fetchData();
  }, []);

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
      <View style={{flex: 1}}>{!loading && <ContactList data={data} />}</View>
    </SafeAreaView>
  );
}

export default App;
