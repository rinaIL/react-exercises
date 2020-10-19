class ChoseColor extends React.Component {
    constructor(props) {
        super(props);
        // Bind
        this.toggleVisibilityBlue = this.toggleVisibility.bind(this, 'blue');
        this.toggleVisibilityRed = this.toggleVisibility.bind(this, 'red');
        this.toggleVisibilityGreen = this.toggleVisibility.bind(this, 'green');
        // Initialize
        this.state = {blue: false, red: false, green: false};
    }

    toggleVisibility(stateName, event) {
        this.setState(prev => ({ [stateName]: !prev[stateName] }),
            () => { console.log(this.state) });
    }

    render() {
        return (
            <div>
                <h1>Which color do you want</h1>
                <h3>disable the one you don't want</h3>
                <button className={"colorBtn" + (this.state.blue ? ' on' : '')} onClick={this.toggleVisibilityBlue} >blue</button>
                <button className={"colorBtn" + (this.state.red ? ' on' : '')} onClick={this.toggleVisibilityRed}  >red</button>
                <button className={"colorBtn" + (this.state.green ? ' on' : '')} onClick={this.toggleVisibilityGreen}>green</button>
            </div>
        );
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <ChoseColor />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
