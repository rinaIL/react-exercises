class Form extends React.Component {
    constructor(props) {
        super(props);
        // Bind
        this.onSubmit = this.onSubmit.bind(this);
        // Initialize
        this.state = { message: null };
    }

    onSubmit(event) {
        event.preventDefault();

        let messages = [];
        if (this.nameInput.value.length < 2) {
            messages.push(<div className="error">You must enter a name</div>);
        }
        if (this.ageInput.value.length === 0) {
            messages.push(<div className="error">You must enter an age</div>);
        }
        else {
            const age = parseInt(this.ageInput.value);
            if (Number.isNaN(age)) {
                messages.push(<div className="error">Invalid age string</div>);
            }
            else if (age < 18) {
                messages.push(<div className="error">Too young</div>);
            }
            else if (age > 32) {
                messages.push(<div className="error">Too old</div>);
            }
        }
        this.setState(() => ({ message: ((messages.length === 0) ? null : messages) }));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.message}
                <input type="text" ref={domObj => this.nameInput = domObj} placeholder="Name"/>
                <br/>
                <input type="text" ref={domObj => this.ageInput = domObj} placeholder="Age" />
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

ReactDOM.render(<Form />, document.getElementById('app'));
