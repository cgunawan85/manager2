import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();
	}

	renderRow(employee) {
		return <ListItem employee={employee.item} />;
	}

	render() {
		return (
			<FlatList
				data={this.props.employees}
				renderItem={this.renderRow}
				keyExtractor={(employee) => employee.uid.toString()}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid }; // { shift: 'Monday', name: 's', uid: '12312k3jl' }
	});
	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
