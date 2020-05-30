import React from 'react'
import {SearchBar} from 'react-native-elements'
import {Dimensions} from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth /100

export default class Search extends React.Component {
    state = {
      search: '',
    };
  
    updateSearch = search => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
  
      return (
        <SearchBar
          placeholder="Tìm trong ghim của bạn"
          onChangeText={this.updateSearch}
          value={search}
          lightTheme
          platform='android'
        />
      );
    }
  }