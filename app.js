const container = document.getElementById('react-container');

class ReactContainer extends React.Component{
  
      render(){
          return React.createElement("div",null,"Hey Kalvians",
          React.createElement("div",null,"Let's rock and roll with classes")
          );
      }
    
  }
  ReactDOM.render(React.createElement(ReactContainer),container);