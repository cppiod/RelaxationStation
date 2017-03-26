import React, { Component, PropTypes } from 'react'
import{
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native'

class NextQuoteButton extends Component{
	render(){
		return(
			<TouchableOpacity style={styles.nextButton} onPress={this.props.onPress}>
				<Text style={styles.nextButtonText}>Next Thought</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	nextButton: {
		borderWidth: 2,
		borderColor: '#ffffff',
		padding: 10,
		marginBottom: 20,
	},
	nextButtonText: {
		color: '#ffffff',
		fontSize: 18,
	}
})

NextQuoteButton.propTypes = {
	onPress: PropTypes.func.isRequired,
}

export default NextQuoteButton
