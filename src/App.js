import React from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
    state = {
        friends
    }

    removeFriend = id => {
        const friends = this.state.friends.filter(friend => friend.id !== id);
        this.setState({ friends });
    }
    render() {
        return (
            < Wrapper >
                {this.state.friends.map(friend => (

                    <Card
                        removeFriend={this.removeFriend}
                        id={friend.id}
                        key={friend.id}
                        image={friend.image}
                        phrase={friend.phrase} />

                ))}
            </Wrapper >
        )
    }
}

export default App;