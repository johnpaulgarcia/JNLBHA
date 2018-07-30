import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';
import Pic from '../components/Pic';
import Card from '../components/Card';
import styles from './styles';


import {
	Text,
	Dimensions
} from 'react-native';
import Main from './Main';


class WelcomeScreen extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {

	  	name: null,
	  	placeholder: 'What is your name?',

	  };
	}
	handleTextChange=(text)=>{
		this.setState({
			name: text,
		})
		
	};

	nameSubmit=()=>{
		if(this.state.name===null){
			this.setState({
				placeholder: 'Oops. We need a name',
			})
		}

		this.props.dispatch(addAlert('Holy'));

	};
	render(){
		
		const {navigate} = this.props.navigation;
		if(this.props.user_id){
			return(
					<Main />
				);
		}
		return(
			<Container>
				
				<Card flex={3} alignItems="center" justifyContent="center">
					<Text>Hello there. Tell us your name.</Text>
				{/*INPUT*/}
					<Input onChangeText={this.handleTextChange} value={this.state.name} width={Dimensions.get('window').width-50} height={50} color="#000000" borderWidth={1} borderRadius={8} borderColor="#246C34" placeholder={this.state.placeholder} textAlign="center"/>
					<Button onPress={this.nameSubmit} backgroundColor="#246C34" alignItems="center" justifyContent="center" width={Dimensions.get('window').width-50} marginTop={10} height={50} borderWidth={1} borderRadius={8} borderColor="#246C34">
						<Text style={[styles.header,{color: '#FFFFFF',fontSize: 20}]}>Customer Login</Text>
					</Button>
					<Button onPress={()=>navigate('StaffLogin')} backgroundColor="#246C34" alignItems="center" justifyContent="center" width={Dimensions.get('window').width-50} marginTop={10} height={50} borderWidth={1} borderRadius={8} borderColor="#246C34">
						<Text style={[styles.header,{color: '#FFFFFF',fontSize: 20}]}>Staff Login</Text>
					</Button>
					
				</Card>
				<Card flex={1}>
				</Card>
				
			</Container>
			);
	}
}



var mapStateToProps = (state) =>{
	return {
		text: state.text,
		name: state.name,
		user_id: state.auth.user_id,
	}
}


module.exports = connect(mapStateToProps)(WelcomeScreen);