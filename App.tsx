import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ContactList from './components/contactList/ContactList';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {AppDispatch, RootState} from './store/store';
import {fetchContacts} from './features/contactSlice';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './AppStyles';
// import useFetch from './hook/useFetch';

function AppContent(): React.JSX.Element {
  // const {data, loading, fetchData} = useFetch(
  //   'https://reqres.in/api/users?page=2',
  // );

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const dispatch = useDispatch<AppDispatch>();
  const {data, loading} = useSelector((state: RootState) => state.contacts);

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchContacts('https://reqres.in/api/users?page=2'));
  }, [dispatch]);

  const handleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const filteredData = data.filter(
    contact =>
      contact.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.last_name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Icon name="menufold" size={24} color="#000" />
        <Text style={styles.contactText}>Contact</Text>
        <TouchableOpacity onPress={handleSearch}>
          <Icon name="search1" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {searchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name"
          value={searchText}
          onChangeText={handleSearchChange}
        />
      )}
      {/* <View style={{flex: 1}}>{!loading && <ContactList data={data} />}</View> */}

      <View style={{flex: 1}}>
        {!loading && <ContactList data={filteredData} />}
      </View>
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
