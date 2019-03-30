import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyCHtZCnaS80mcuLYB9VnA7Xh4vA0b8SJpQ',
			authDomain: 'manager2-f0106.firebaseapp.com',
			databaseURL: 'https://manager2-f0106.firebaseio.com',
			projectId: 'manager2-f0106',
			storageBucket: 'manager2-f0106.appspot.com',
			messagingSenderId: '205701692306'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
