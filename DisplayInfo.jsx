class DisplayInfo extends React.Component {
   
    
    constructor(props) {
        super(props);
    }
    render() {

        return (
           `${this.props.name} works in ${this.props.company}`
        );
    
    }
}

class DetailsForm extends React.Component  {
    constructor(props){
        super(props);
        this.state = {formData: {
            name: '',
            company: ''
        }}
    }

   onInputName(event) {
        this.state.formData.name = event.target.value;
        this.setState(this.state.formData);
    }

    onInputCompany(event) {
        this.state.formData.company = event.target.value;
        this.setState(this.state.formData);
    }
    
    render() {

        return (
           <div>     
             <input onInput={event => this.onInputName(event) }></input>
             <input onInput={event => this.onInputCompany(event)}></input>
             <h1><DisplayInfo name={this.state.name} company = {this.state.company}/></h1>
           </div>
        );
    
    }
}



class App extends React.Component { 

    render() {

        return (
           <div>     
            <DetailsForm/>            
           </div>
        );
    
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));