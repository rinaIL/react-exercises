class App extends React.Component { 
    constructor(props){
        super(props);
        this.state = {formValue: ""};
        
    }
    onSubmit(e) {
       console.log(this.textInput.value);

       e.preventDefault();
       console.log(e.target.value) ;
       this.setState({formValue: this.textInput.value});
    }

    render() {
        
        return (
        <div>
                <form onSubmit={e => this.onSubmit(e)}>
                    <input ref={(input) => {this.textInput = input;}}/>
                    <button onClick={() => {
                        console.log(this.textInput.value)
                    }}>Hello</button> 
                    <h3> {this.state.formValue} </h3>   
                </form>                           
        </div>  
        );
    
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));