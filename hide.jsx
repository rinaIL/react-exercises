class HideBox extends React.Component {
    constructor(props) {
        super(props);
        // Bind
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // Initialize
        this.state = { hide: false };
    }

    toggleVisibility() {
        this.setState({ hide: !this.state.hide });
    }

    render() {
        let boxClass = "toggle-box";
        if (this.state.hide) {
            boxClass += " hide";
        }
        return (
            <div className="hide-box">
                <button onClick={this.toggleVisibility}>Toggle</button>
                <div className={boxClass}></div>
            </div>
        );
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <HideBox />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));





        // Set a value (Asynchronously)
        // this.setState({ count: this.state.count + 1 });



        // Not recommended
        // ++this.state.count;
        // this.setState({});



        // Use async updater
        // this.setState(prev => ({ count: prev.count + 1 }));


        // Why use async updater?
        // Do this:
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: this.state.count + 1 });
        //
        // Now do this:
        // this.setState(prev => ({ count: prev.count + 1 }));
        // this.setState(prev => ({ count: prev.count + 1 }));
        // this.setState(prev => ({ count: prev.count + 1 }));


        // Set a value (with a callback)
        // this.setState({ count: this.state.count + 1 }, this.validateCount);
        // validateCount() {
        //     if (this.state.count > this.props.max) {
        //         this.setState({ count: 0 });
        //     }
        // }

        // Set a value (with a callback)
        // this.setState({ count: this.state.count + 1 }, this.updateServer);
        // updateServer() {
        //     /// Call server using AJAX
        // }
