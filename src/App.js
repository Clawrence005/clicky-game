import React from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from './components/Title';
import Header from './components/Header';
import Footer from './components/Footer';
import items from "./items.json";

class App extends React.Component {
    state = {
        items,
        wasClicked: [],
        score: 0,
        highScore: 0
    }
    //fisher-yates shuffle algorithm
    //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    shuffleCards = (arr) => {
        var j, x, i;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    handleClick = id => {
        console.log("clicked " + id)
        let newScore = this.state.score;
        newScore++;
        this.setState({ score: newScore });
        if (this.state.wasClicked.includes(id)) {
            console.log("clicked this already ", id);
            if (this.state.score >= this.state.highScore) {
                this.setState({ highScore: this.state.score });
                alert("You got a new high score. Please try Again");
            } else {
                alert("You lost. Please try Again");

            }
            this.setState({ score: 0 });
            this.setState({ wasClicked: [] });
        }
        let newClickArray = this.state.wasClicked;
        newClickArray.push(id);
        this.setState({ wasClicked: newClickArray });
        this.shuffleCards(this.state.items);
    }

    // expected output: true
    render() {
        return (
            < Wrapper >
                {/* <Title title={item.title} /> */}
                <Header />
                <Title>The Clicky Game</Title>
                <p>Score: {this.state.score}</p>
                <p>High Score: {this.state.highScore}</p>
                {
                    this.state.items.map(item => (
                        <Card
                            handleClick={this.handleClick}
                            id={item.id}
                            key={item.id}
                            image={item.image}
                            phrase={item.phrase} />
                    ))
                }
                <Footer />
            </Wrapper>
        );
    }
}

export default App;