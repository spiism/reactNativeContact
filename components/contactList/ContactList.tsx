// ContactList.tsx
import React from 'react';
import {View, ScrollView} from 'react-native';
import {ListItem, Avatar, Badge} from 'react-native-elements';
import styles from './ContactListStyles';

interface Contact {
  name: string;
  subtitle: string;
  avatar_url: string;
  status: 'online' | 'busy' | 'offline';
}

const contacts: Contact[] = [
  {
    name: 'Joe Belfiore',
    subtitle: 'In a world far away',
    avatar_url: 'https://randomuser.me/api/portraits/men/1.jpg',
    status: 'online',
  },
  {
    name: 'Bill Gates',
    subtitle: "What I'm doing here?",
    avatar_url: 'https://randomuser.me/api/portraits/men/2.jpg',
    status: 'online',
  },
  {
    name: 'Mark Zuckerberg',
    subtitle: 'Really Busy, WhatsApp only',
    avatar_url: 'https://randomuser.me/api/portraits/men/3.jpg',
    status: 'busy',
  },
  {
    name: 'Marissa Mayer',
    subtitle: 'In a rush to catch a plane',
    avatar_url: 'https://randomuser.me/api/portraits/women/1.jpg',
    status: 'offline',
  },
  {
    name: 'Sundar Pichai',
    subtitle: 'Do androids dream of electric sheep?',
    avatar_url: 'https://randomuser.me/api/portraits/men/4.jpg',
    status: 'online',
  },
  {
    name: 'Jeff Bezos',
    subtitle: 'Counting Zeroes : Prime time.',
    avatar_url: 'https://randomuser.me/api/portraits/men/5.jpg',
    status: 'busy',
  },
];

const ContactList: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {contacts.map((contact, index) => (
        <ListItem key={index} bottomDivider>
          <View style={styles.outerBorderContainer}>
            <View style={styles.avatarContainer}>
              <Avatar
                source={{uri: contact.avatar_url}}
                size="medium"
                rounded
                containerStyle={styles.avatar}
              />
            </View>
            <Badge
              status={
                contact.status === 'online'
                  ? 'success'
                  : contact.status === 'busy'
                  ? 'warning'
                  : 'error'
              }
              containerStyle={styles.statusIndicator}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title>{contact.name}</ListItem.Title>
            <ListItem.Subtitle>{contact.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default ContactList;
