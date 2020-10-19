class Photo extends React.Component {

    constructor(props) {
   
      super(props);
   
    }
   
    render() {
      
      return (
        <div>
                <Photo image = {this.props.image}/>
            <img src={this.props.image}></img>
        </div>
   
      );
   
    }
   
   }

   class Title extends React.Component {

    constructor(props) {
   
      super(props);
   
    }
   
    render() {
      
      return (
        <div>
                <h3>{this.props.title}</h3>

        </div>  
      );
   
    }
   
   }

class Card extends React.Component {

    constructor(props) {
   
      super(props);
   
    }
   
    render() {
      
      return (
        <div className="card">
                <Photo image = {this.props.image}/>
                <Title text = {this.props.title}/>
                <SubTitle subText = {this.props.subTitle}/>
        </div>  
      );
   
    }
   
   }
   
    
   
   class App extends React.Component {
    constructor() {
        this.subTitles = [
            "Choose your destination, plan your trip. Pick the best place for your holiday",
            "Select the day, pick Your ticket. We give you the best price. We guaranted!",
            "Enjoy you holidays! Dont forget to take a beer and take a photo!"]
    }
  
   
    render() {
   
      return (
   
        <div>
   
        <Card  image ="left" title = "Ready to Travel"  subTitle={this.subTitles[0]}/>
        <Card image = "center" title = "Select the Date" subTitle={this.subTitles[0]}/>
        <Card image = "right" title = "Fells Like Home" subTitle={this.subTitles[0]}/>
   
        </div>
   
      );
   
    }
   
   }
   
   function render() {
   
    ReactDOM.render(
   
      <App />,
   
      document.getElementById("app")
   
    );
   
   }
   
    
   
   render();