// ContactListStyles.ts
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  outerBorderContainer: {
    width: 57,
    height: 57,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 1,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    height: '100%',
    borderRadius: 5,
    margin: 0,
    elevation: 3, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: {width: 0, height: 2}, // For iOS
    shadowOpacity: 0.8, // For iOS
    shadowRadius: 2, // For iOS
  },
  backRightBtnLeft: {
    backgroundColor: '#3498db',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#e74c3c',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
    padding: 10,
    fontWeight: 'bold',
  },
});

export default styles;
