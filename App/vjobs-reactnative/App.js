import JobList from './components/JobList/JobList';
import JobDetails from './components/JobDetails/JobDetails'
import {createStackNavigator} from 'react-navigation';

export default createStackNavigator(
  {JobList: JobList , JobDetails: JobDetails}, 
  {initialRouteName:'JobList'}
)
