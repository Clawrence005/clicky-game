import React from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from './components/Title';
import items from "./items.json";

class App extends React.Component {
    state = {
        items
    }

    removeItem = id => {
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({ items });
    }
    render() {
        return (
            < Wrapper >
                {/* <Title title={item.title} /> */}
                <Title>The Clicky Game
                </Title>
                {this.state.items.map(item => (
                    <Card
                        removeItem={this.removeItem}
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        phrase={item.phrase} />

                ))}
            </Wrapper >
        )
    }
}

export default App;