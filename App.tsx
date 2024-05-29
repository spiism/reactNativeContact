import React, {useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import ContactList from './components/contactList/ContactList';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {AppDispatch, RootState} from './store/store';
import {fetchContacts} from './features/contactSlice';
// import useFetch from './hook/useFetch';

function AppContent(): React.JSX.Element {
  // const {data, loading, fetchData} = useFetch(
  //   'https://reqres.in/api/users?page=2',
  // );

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const dispatch = useDispatch<AppDispatch>();
  const {data, loading, error} = useSelector(
    (state: RootState) => state.contacts,
  );

  useEffect(() => {
    dispatch(fetchContacts('https://reqres.in/api/users?page=2'));
  }, [dispatch]);

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

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
