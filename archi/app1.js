


class BoxFactorial extends React.Component 
{
    constructor(){
        super();             
        this.count  = 0;
        this.say = this.say.bind(this);
    }
   factorialize(num) {
 
        if (num <= 0) 
             return 1;
         else {
             return (num * this.factorialize(num - 1));
         }
       }

    sayHello() {
        console.log("Hello" + this.count);
       
    }

    say() {
        var message = `Hello ${this.count}`;
        document.getElementById("toSay").innerHTML = message;
        this.count++;
    }

    render() {
        return ( 
            <div className ="boxFactorial">
               <h1>Factorial 5: {this.factorialize(5)}</h1>
               <button onClick={this.say}> Say Hello</button>
               <p id ="toSay"></p>
             </div>            
            );
    }


}

  ReactDOM.render(<div><BoxFactorial/></div>, document.getElementById('app'));