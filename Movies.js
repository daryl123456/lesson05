import React from 'react';
import {View, Text, Image} from 'react-native';

const movie = {title: 'Doctor Sleep', year: '2019'};
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.title + '\n' + this.props.year}</Text>
        <Image source={this.props.poster} />
      </View>
    );
  }
}

const MovieList = () => {
  return MOVIES_DATA.map((title) => (
    <Movie title={title.title} year={title.year} poster={title.poster} />
  ));
};
export {MovieList};
