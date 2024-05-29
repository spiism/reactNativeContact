import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ListItem, Avatar, Badge} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import styles from './ContactListStyles';
import {Contact} from '../../models/contact';

interface Props {
  data: Contact[];
}

const ContactList = ({data}: Props) => {
  const handleDelete = (data: string) => {
    console.log('Delete contact:', data);
  };

  const handleEdit = (data: string) => {
    console.log('Edit contact:', data);
  };

  return (
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
            onPress={() => handleEdit(item.first_name)}>
            <Text style={styles.backTextWhite}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => handleDelete(item.first_name)}>
            <Text style={styles.backTextWhite}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
      leftOpenValue={0}
      rightOpenValue={-150}
    />
  );
};

export default ContactList;
