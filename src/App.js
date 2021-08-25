import './app.scss';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataListRepos: [],
    };
  }

  async handleGetListRepos(){
    await this.getListRepos();
  }

  async getListRepos(){
    let result = await fetch('https://api.github.com/users/andry26sistiawan/repos?per_page=100', {
      method: 'GET',
      headers: {},
    }); 
    let resultJson = await result.json();
    this.setState({
      dataListRepos : resultJson
    });

  }

  render(){
    return(
      <div className="main-page">
        <div className="header">
          <button className="btn-getListRepos" onClick={()=>{this.getListRepos()}}>
            <p>Get My Repositories </p>
          </button>

        </div>
        
      </div>
    )
  }
}

export default App;
