import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.newQuote = React.createRef();

		this.state = {
			quotes: [
				{
					quote: 'Learning never exhausts the mind.',
					author: 'Leonardo da Vinci'
				},
				{
					quote:
						'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.',
					author: 'William Blake'
				},
				{
					quote:
						'If you cannot do great things, do small things in a great way.',
					author: 'Napolean Hill'
				},
				{
					quote:
						"I have not failed. I've just found 10,000 ways that won't work.",
					author: 'Thomas Edison'
				},
				{
					quote:
						'Education is the most powerful weapon which you can use to change the world.',
					author: 'Nelson Mandela'
				},
				{
					quote:
						'The secret of getting ahead is getting started. The secret of getting started is breaking your complex, overwhelming tasks into small manageable tasks, and then starting on the first one.',
					author: 'Mark Twain'
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

	startApp(quotes) {
		this.setState({
			...this.state,
			display: !this.state.display,
			quotes: this.shuffle(quotes)
		});
	}

	render() {
		let numberOfQuotes = this.state.quotes.length;
		let index = this.state.i % numberOfQuotes;

		const { quotes } = this.state;

		// if the state display is false
		// displays a button that will start the cycle of quotes
		if (!this.state.display) {
			return (
				<div className={styles.div}>
					<button
						onClick={() => this.startApp(this.state.quotes)}
						className={styles.startButton}
					>
						<h1>My Favorite Quotes</h1>
					</button>
				</div>
			);
		}

		// if display is true then cycle through quotes on click
		else {
			return (
				<div className={styles.div}>
					<button
						className={styles.button}
						onClick={() => this.handleClick()}
					>
						<h1 className={styles.quote}>{quotes[index].quote} </h1>
						<h2 className={styles.author}>
							- {quotes[index].author}
						</h2>
					</button>
				</div>
			);
		}
	}
}

export default App;
