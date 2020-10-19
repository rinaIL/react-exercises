
class Button extends React.Component{

}




class App extends React.Component { 


render() {
    
    return (
    <div >
            <Button onClick = {this.showHide} />
            <Center/>
    </div>  
    );

}

}

ReactDOM.render(<div><App type="box1"/></div>, document.getElementById('app'));