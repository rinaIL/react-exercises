
class Navigation extends React.Component
{
    render() {
        return ( 
            <div>
               <nav>
                   <ul>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">WORK</a></li>
                        <li><a href="#">THE TEAM</a></li>
                   </ul>
                   <div className="logo">
                        <a href="#"><i class="fas fa-blender-phone"></i></a>
                  </div>
               </nav>

            </div>     
            );
    }
}

class Content extends React.Component
{

    render() {
        return ( 
           
               <img className="content" src="./src/opacity.png"/>
                  
            );
    }
}





class Services extends React.Component 
{



    render() {
        return ( 
            <div>
                <div>
                    <Navigation/>
                </div>
                <div className ="services">
                    <Content/>
                    <Content/>
                    <Content/>
                </div>     
            </div>
       
            );
    }


}

  ReactDOM.render(<div><Services/></div>, document.getElementById('app'));