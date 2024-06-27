import { StyleSheet, View, Text } from 'react-native';

import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './EpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
    let content;
    if(expenses.length > 0){
        content = <ExpensesList expenses={expenses} />
    }else{
        content = <View style={styles.centered}><Text style={styles.fallbackText}>{fallbackText}</Text></View>
    }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
     { content }
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  },
  fallbackText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});