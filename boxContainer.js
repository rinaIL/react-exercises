
    class Box extends React.Component 
    {
        constructor(props){
            super(props);
        }
        render() {
            return ( 
                <div className ={this.props.className}>
                   {this.props.children}
                 </div>            
                );
        }


    }
class BoxContainer extends React.Component {
    constructor(props){
        super(props);
    }
        render() {
            return ( 
                <div className ="container">
                   <Box className="box1">
                       <Box className="box2">
                           <Box className="box3">
                               <Box className="box4"/>
                               <Box className="box4"/>
                           </Box>
                       </Box>
                   </Box>
                 </div>            
                )
        }


    }



ReactDOM.render(<BoxContainer/>, document.getElementById('app'));