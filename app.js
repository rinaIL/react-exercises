
const text = "Hello";
const linkStyle = {
    backgroundColor:'#EEE',
    border: '1px solid',
    textDecoration:'none'
};

    class Box4  extends React.Component                
    {
        constructor(props){
            super(props);
        }
        render() {
            return (
                <div className ="box4"> 
                    <a style = {linkStyle} href="#">{text}</a>
                </div>
            );
        }
    }

    class Box3  extends React.Component
    {
        constructor(props){
            super(props);
        }
        render() {
            return (
                <div className ="box3"> 
                    <Box4 type="box3"/>
                    <br/>
                    <Box4 type="box3"/>
                </div>
            );
        }
    }

    class Box2 extends React.Component
    {
        constructor(props){
            super(props);
        }
        render() {
            return (
                <div className ={this.props.type}>
                    <Box3 type="box3"/>
                 </div>
            );
        }
    }
   
    class Box1 extends React.Component 
    {
        constructor(props){
            super(props);
        }
        render() {
            return ( 
                <div className ={this.props.type}>
                    <Box2 type="box2"/>
                 </div>            
                );
        }


    }

      ReactDOM.render(<div><Box1 type="box1"/></div>, document.getElementById('app'));