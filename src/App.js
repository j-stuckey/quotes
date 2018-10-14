import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.newQuote = React.createRef();

		this.state = {
			quotes: [
				{ quote: "You're doing fine!", author: 'Me' },
				{
					quote: 'Why?',
					author: 'Who knows'
				},
				{
					quote: '1',
					author: 'Who knows'
				},
				{
					quote: '2',
					author: 'Who knows'
				},
				{
					quote: '3',
					author: 'Who knows'
				}
			],
			i: 0,
			display: false
		};
	}

	shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}

	handleClick() {
		this.setState({
			...this.state,
			i: this.state.i + 1
		});
	}

	startApp() {
		this.setState({
			...this.state,
			display: !this.state.display
		});
	}

	render() {
		let numberOfQuotes = this.state.quotes.length;
		let index = this.state.i % numberOfQuotes;

		const { quotes } = this.state;

		if (!this.state.display) {
			return (
				<div className={styles.div}>
					<button
						onClick={() => this.startApp()}
						className={styles.startButton}
					>
						<h1>My Favorite Quotes</h1>
					</button>
				</div>
			);
		}

		return (
			<div className={styles.div}>
				<button
					className={styles.button}
					onClick={() => this.handleClick()}
				>
					<h1>{quotes[index].quote} </h1>
					<h2>- {quotes[index].author}</h2>
				</button>
			</div>
		);
	}
}

export default App;
