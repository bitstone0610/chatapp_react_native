import { StyleSheet } from 'react-native';
import theme from '../../../app.theme';

export default StyleSheet.create({
  container: {
    paddingTop: theme.paddingH.pad15,
    paddingBottom: theme.paddingH.pad15,
    paddingRight: theme.paddingH.pad20,
    paddingLeft: theme.paddingH.pad20,
    borderRadius: theme.paddingH.pad30,
    backgroundColor: theme.colors.lightGrey,
  },
  textinput: {
    fontSize: theme.fontSize.p13,
  },
});
