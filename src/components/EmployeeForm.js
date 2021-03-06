import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
	render() {
		return (
			<View>
				<CardSection>
					<Input 
					labelText="Name"
					placeholder="Jane"
					onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
					value={this.props.name}
					/>
				</CardSection>

				<CardSection>
					<Input 
					labelText="Phone"
					placeholder="555-5555"
					onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
					value={this.props.phone}
					/>
				</CardSection>

				<CardSection style={styles.rowContainer}>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
						style={{ width: 150, flex: null }}
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20,
	},
	rowContainer: {
		height: 64,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 16,
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
