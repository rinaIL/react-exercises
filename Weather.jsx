class Rainy extends React.Component {
    render (){
        return (
            <div>
                 <h1> rainy </h1>
                 <h3>:(</h3>
            </div>
           
        )
    } 
}

class Sunny extends React.Component {
    render (){
        return (
            <div>
                 <h1> sunny </h1>
            </div>
           
        )
    } 
}



class Weather extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
            
        return this.props.today=="rainy"? <Sunny/> : <Rainy/>
    
    }
}


class App extends React.Component { 


        render() {
            
            return (
            <div >
                    <Weather today="sunny" />
                    
            </div>  
            );
        
        }
    
    }
    
    ReactDOM.render(<div><App/></div>, document.getElementById('app'));