import React from 'react';
import {getJobs} from './../../networking/API'
import { StyleSheet, Text, SafeAreaView, FlatList, View, Image, TouchableHighlight } from 'react-native';

const img = require('./../../assets/logo-h-vjobs.png');

export default class JobList extends React.Component {

  constructor(props){
    super(props);
    this.state = {jobs : []}
  }

  static navigationOptions = {
      title: 'VJobs'
  }

  componentDidMount () {
    getJobs()
      .then(jobs => this.setState({jobs}))
      .catch(error => console.log(error))
  }

  renderHeader(){
    return(
      <Image
        style={
          {margin:16, alignSelf:'center'}
        }
        source={img}/>
    )
  }

  renderList() {
    const separetorStyle = {
      flexGrow: 1, height: 5, backgroundColor:'#fff'
    }

    return (
      <FlatList data={this.state.jobs} 
      style={{
        flex:1, backgroundColor:'white'}}
        renderItem={ ({item}) => this.renderItem(item)}
        ListHeaderComponent= {() => this.renderHeader()}
        ItemSeparatorComponent = {() => <View separetorStyle={separetorStyle} />}
        keyExtractor={(item) => `${item.id}`}
        />
    )
  }

  renderItem(vaga){
    return (
    <TouchableHighlight
        onPress={() => this.props.navigation.navigate('JobDetails', {job: vaga})}
    >
        <Text style= {{
            paddingHorizontal: 16,
            paddingVertical: 8,
            minHeight: 48,
            fontWeight: 'bold',
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: '#ccc'
        }}>{vaga.name}</Text>
      </TouchableHighlight>
    )
  }


  render() {
    return (
        <SafeAreaView style={styles.container}>
          {this.renderList()}
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
