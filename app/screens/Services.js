'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';
import Pic from '../components/Pic';
import Card from '../components/Card';
import styles from './styles';
//import {services} from '../inappData/services';
import {
  View,
  FlatList,
  Text,
  Dimensions
} from 'react-native';
import {getServices,getStaff} from '../actions/populateActions';
class Services extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      services: null
    };
  }
  // 
  componentDidMount(){
       this.setState({
      services: this.props.services

    })
    // setInterval(()=>{
    //   this.props.dispatch(getStaff());
    //   this.props.dispatch(getServices());
    //   this.setState({
    //   services: this.props.services

    // })
    // },1000)
  }  
  servicePress = () =>{

  }

  render() {

  	const { width,height } = Dimensions.get('window');
    
    console.warn(this.state.services);
    //console.warn(this.props.services);
    return(
      		

      		<Container>

      	{/*TOP HEADER*/}
      		
      		<Card backgroundColor="teal" alignItems="center" justifyContent="center" width={width} height={50}>
      			<Text style={[styles.header,{fontSize: 20}]}>Choose your desired service.</Text>
      		</Card>
      	{/**/}
      		{/*RENDER SERVICES*/}
      		<FlatList
      			data={this.state.services}
      			renderItem={({item})=> {
      				return(
                <Card  alignItems="center" justifyContent="center">
      						<Button onPress={()=> this.props.navigation.navigate('Modal',{service: item})} marginTop={10} backgroundColor="#FFFFFF" borderWidth={1} borderColor="teal" borderRadius={5} alignItems="center" justifyContent="center" width={width-50} height={60}>
                       <Text style={[styles.header],{color: 'teal',fontSize: 20,}}>{item.title} -- PHP {item.price}</Text>   
                  </Button>
                </Card>
      					);
      			}}
      			keyExtractor={(item)=> item.title}
      		/>
      			{/*END RENDER*/}

      		</Container>

    );
  }
}




var mapStateToProps = (state) => {
  return {
    services: state.services.services,
    errorpop: state.services.pop_error,
  }
}

module.exports = connect(mapStateToProps)(Services);