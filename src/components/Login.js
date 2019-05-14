import React,{Component} from 'react';

 class Login extends Component{
  render(){
    return(
      <article>
        <h1>로그인</h1>
        <form action="" method="post" onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(e.target.id.value, e.target.pwd.value);
        }.bind(this)}>
        <p>
        <input type="text" name="id" placeholder="id"></input>
        </p>
        <p>
        <input type="password" name="pwd" placeholder="password"></input>
        </p>
        <p>
        <input type="submit" value="로그인"></input>
        </p>
        </form>
      </article>
    );
  }
}

export default Login;