import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import {ListItem, Avatar, Badge} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import styles from './ContactListStyles';
import {Contact} from '../../models/contact';
import {AppDispatch} from '../../store/store';
import {useDispatch} from 'react-redux';
import {deleteContact, editContact} from '../../features/contactSlice';
import EditAddContactModal from '../modal/EditAddContactModal';

interface Props {
  data: Contact[];
}

const ContactList = ({data}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);

  const handleDelete = (id: number) => {
    // Optionally show a confirmation dialog before deleting
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            dispatch(deleteContact(id));

            // dispatch(fetchContacts('https://reqres.in/api/users?page=2'));
          },
        },
      ],
    );
  };

  const openEditModal = (contact: Contact) => {
    setCurrentContact(contact);
    setModalVisible(true);
  };

  const handleSave = (contact: Contact) => {
    dispatch(editContact(contact));
    setModalVisible(false);
  };
  return (
    <View style={{flex: 1}}>
      <SwipeListView
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: {item: Contact}) => (
          <ListItem bottomDivider>
            <View style={styles.outerBorderContainer}>
              <View style={styles.avatarContainer}>
                <Avatar
                  source={{uri: item.avatar}}
                  size="medium"
                  rounded
                  containerStyle={styles.avatar}
                />
              </View>
              <Badge
                status={
                  item.status === 'online'
                    ? 'success'
                    : item.status === 'busy'
                    ? 'warning'
                    : 'error'
                }
                containerStyle={styles.statusIndicator}
              />
            </View>
            <ListItem.Content>
              <ListItem.Title>
                {item.first_name}&nbsp;
                {item.last_name}
              </ListItem.Title>
              <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
        renderHiddenItem={({item}) => (
          <View style={styles.rowBack}>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnLeft]}
              onPress={() => openEditModal(item)}>
              <Text style={styles.backTextWhite}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={() => handleDelete(item.id as number)}>
              <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={0}
        rightOpenValue={-150}
      />
      {currentContact && (
        <EditAddContactModal
          visible={modalVisible}
          contact={currentContact}
          onClose={() => setModalVisible(false)}
          onSave={handleSave}
        />
      )}
    </View>
  );
};

export default ContactList;
