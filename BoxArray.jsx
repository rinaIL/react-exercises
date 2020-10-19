


class App extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        const colors = this.props.colors.map( x=> <div key={`item${x}`} > </div>
        );
        return (
           <div>     
               {colors}
           </div>
        );
    
    }

}
const colors =["red", "blue", "green"]
ReactDOM.render(<List colors= {colors} />, document.getElementById('app'));