import React, {useState, useEffect} from 'react';
import {Modal, View, Text, TextInput, Button} from 'react-native';
import styles from './EditContactModalStyles';
import {Contact} from '../../models/contact';

interface EditContactModalProps {
  visible: boolean;
  contact: Contact | null;
  onClose: () => void;
  onSave: (contact: Contact) => void;
}

const EditContactModal: React.FC<EditContactModalProps> = ({
  visible,
  contact,
  onClose,
  onSave,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (contact) {
      setFirstName(contact.first_name);
      setLastName(contact.last_name);
      setEmail(contact.email);
    }
  }, [contact]);

  const handleSave = () => {
    if (contact) {
      onSave({
        ...contact,
        first_name: firstName,
        last_name: lastName,
        email: email,
      });
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Edit Contact</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            value={firstName}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            value={lastName}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" color="red" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default EditContactModal;