import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import EditAddContactModal from './EditAddContactModal';
import {Contact} from '../../models/contact';

const mockOnClose = jest.fn();
const mockOnSave = jest.fn();

describe('EditAddContactModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (contact?: Contact) => {
    return render(
      <EditAddContactModal
        visible={true}
        contact={contact}
        onClose={mockOnClose}
        onSave={mockOnSave}
      />,
    );
  };

  it('should render correctly', () => {
    const {getByPlaceholderText, getByText} = renderComponent();

    expect(getByPlaceholderText('First Name')).toBeTruthy();
    expect(getByPlaceholderText('Last Name')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByText('Save')).toBeTruthy();
    expect(getByText('Cancel')).toBeTruthy();
  });

  it('should display error messages for empty required fields', async () => {
    const {getByText, getByPlaceholderText} = renderComponent();

    fireEvent.changeText(getByPlaceholderText('First Name'), '');
    fireEvent.changeText(getByPlaceholderText('Last Name'), '');

    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(getByText('First name is required')).toBeTruthy();
      expect(getByText('Last name is required')).toBeTruthy();
    });
  });

  it('should call onSave with correct data when form is valid', async () => {
    const contact: Contact = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      avatar: 'https://via.placeholder.com/150',
    };
    const {getByText, getByPlaceholderText} = renderComponent(contact);

    fireEvent.changeText(getByPlaceholderText('First Name'), 'Jane');
    fireEvent.changeText(getByPlaceholderText('Last Name'), 'Doe');
    fireEvent.changeText(getByPlaceholderText('Email'), 'jane.doe@example.com');

    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(mockOnSave).toHaveBeenCalledWith({
        id: contact.id,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane.doe@example.com',
        avatar: contact.avatar,
      });
    });
  });

  it('should call onClose when cancel button is pressed', () => {
    const {getByText} = renderComponent();

    fireEvent.press(getByText('Cancel'));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
