import React,{Component} from 'react';
import Header from './components/Header'
import Toc from './components/Toc'
import Login from './components/Login'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode : 'main'
    }
  }

  getShow(){
    if(this.state.mode === 'login'){
      var contents = <Login onSubmit={function(){
        this.setState({mode:'main'})
      }.bind(this)}></Login>
    }else if(this.state.mode === 'main'){
      contents =  <div><Header></Header><Toc></Toc></div>
    }
    return contents;
  }

  render(){
  return (
    <div>
   {this.getShow()}
   </div>
  );
}
}

export default App;