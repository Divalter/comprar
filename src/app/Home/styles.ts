import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d0d2d8',
    paddingTop: 62,
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    width: '100%',
    gap: 8,
    paddingHorizontal: 16,
    marginTop: 42,
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 32,
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap : 12,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EC',
    paddingBottom: 16,
  },
  clearButton: {
    marginLeft: 'auto',
  },
  clearText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2C46B1',
  },
  separetor: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEF0F5',
  },
  listContent: {
    paddingBottom: 62,
  },
  empty: {
    paddingTop: 24,
    fontSize: 14,
    color: '#808080',
    textAlign: 'center',
  },
})