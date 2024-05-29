import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
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
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    margin: 16,
    borderRadius: 4,
  },
  contactText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
