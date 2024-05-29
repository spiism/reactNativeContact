// // ContactList.tsx
// import React from 'react';
// import {View, ScrollView} from 'react-native';
// import {ListItem, Avatar, Badge} from 'react-native-elements';
// import styles from './ContactListStyles';

// interface Contact {
//   name: string;
//   subtitle: string;
//   avatar_url: string;
//   status: 'online' | 'busy' | 'offline';
// }

// const contacts: Contact[] = [
//   {
//     name: 'Joe Belfiore',
//     subtitle: 'In a world far away',
//     avatar_url: 'https://randomuser.me/api/portraits/men/1.jpg',
//     status: 'online',
//   },
//   {
//     name: 'Bill Gates',
//     subtitle: "What I'm doing here?",
//     avatar_url: 'https://randomuser.me/api/portraits/men/2.jpg',
//     status: 'online',
//   },
//   {
//     name: 'Mark Zuckerberg',
//     subtitle: 'Really Busy, WhatsApp only',
//     avatar_url: 'https://randomuser.me/api/portraits/men/3.jpg',
//     status: 'busy',
//   },
//   {
//     name: 'Marissa Mayer',
//     subtitle: 'In a rush to catch a plane',
//     avatar_url: 'https://randomuser.me/api/portraits/women/1.jpg',
//     status: 'offline',
//   },
//   {
//     name: 'Sundar Pichai',
//     subtitle: 'Do androids dream of electric sheep?',
//     avatar_url: 'https://randomuser.me/api/portraits/men/4.jpg',
//     status: 'online',
//   },
//   {
//     name: 'Jeff Bezos',
//     subtitle: 'Counting Zeroes : Prime time.',
//     avatar_url: 'https://randomuser.me/api/portraits/men/5.jpg',
//     status: 'busy',
//   },
// ];

// const ContactList: React.FC = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {contacts.map((contact, index) => (
//         <ListItem key={index} bottomDivider>
//           <View style={styles.outerBorderContainer}>
//             <View style={styles.avatarContainer}>
//               <Avatar
//                 source={{uri: contact.avatar_url}}
//                 size="medium"
//                 rounded
//                 containerStyle={styles.avatar}
//               />
//             </View>
//             <Badge
//               status={
//                 contact.status === 'online'
//                   ? 'success'
//                   : contact.status === 'busy'
//                   ? 'warning'
//                   : 'error'
//               }
//               containerStyle={styles.statusIndicator}
//             />
//           </View>
//           <ListItem.Content>
//             <ListItem.Title>{contact.name}</ListItem.Title>
//             <ListItem.Subtitle>{contact.subtitle}</ListItem.Subtitle>
//           </ListItem.Content>
//         </ListItem>
//       ))}
//     </ScrollView>
//   );
// };

// export default ContactList;

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ListItem, Avatar, Badge} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import styles from './ContactListStyles';

interface Contact {
  name: string;
  subtitle: string;
  avatar_url: string;
  status: 'online' | 'busy' | 'offline';
}

const initialContacts: Contact[] = [
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
  const handleDelete = (data: string) => {
    console.log('Delete contact:', data);
  };

  const handleEdit = (data: string) => {
    console.log('Edit contact:', data);
  };

  return (
    <SwipeListView
      data={initialContacts}
      keyExtractor={item => item.name}
      renderItem={data => (
        <ListItem bottomDivider>
          <View style={styles.outerBorderContainer}>
            <View style={styles.avatarContainer}>
              <Avatar
                source={{uri: data.item.avatar_url}}
                size="medium"
                rounded
                containerStyle={styles.avatar}
              />
            </View>
            <Badge
              status={
                data.item.status === 'online'
                  ? 'success'
                  : data.item.status === 'busy'
                  ? 'warning'
                  : 'error'
              }
              containerStyle={styles.statusIndicator}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title>{data.item.name}</ListItem.Title>
            <ListItem.Subtitle>{data.item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      )}
      renderHiddenItem={data => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={() => handleEdit(data.item.name)}>
            <Text style={styles.backTextWhite}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => handleDelete(data.item.name)}>
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
