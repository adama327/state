import React from "react";



class App extends React.Component {

  state={
        FullName: "Adama Niang",
        Bio:"Learning in Gomycode",
        imgSrc:  <img src="79.jpeg" alt="" srcset="" />,
        Profession: "Full-Stack developper",
        Show: false,
        count: 0,
    }
    componentDidMount() {
        const intervalId = setInterval(() => {
          this.setState(prevState => {
            return {
              count: prevState.count + 1,
            };
          });
        }, 1000);
      }

    
    booleanh =()=> this.setState({Show:!this.state.Show})


    render (){
    
        if(this.state.Show===false){
            return(
                <>
                
                <div>
                   <div>{this.state.imgSrc}</div> 
                    <h2>Full Name:  {this.state.FullName}</h2>
                    <h2>Bio:  {this.state.Bio}</h2>
                    <h2>Profession: {this.state.Profession}</h2>
                </div>
                <h1>The component has been rendered for {this.state.count} seconds</h1>
                <button onClick={this.booleanh}>Hide</button>
    
                </>
              
              
               )
        }
        else{
            return(
                <>
                       <button onClick={this.booleanh}>Show</button>
                </>
 
            )
        }
    
    }
}



export default App;