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

  parserData(data){
    console.log(data);
    
  }

  render(){
    return(
      <div className="main-page">
        <div className="header">
          <button className="btn-getListRepos" onClick={()=>{this.getListRepos()}}>
            <p>Get My Repositories </p>
          </button>

        </div>

        <div className="body">
          <div>
              {
                this.state.dataListRepos.map((data) =>{
                  return(
                    <button className="btn-listRepos" onClick={()=>{this.parserData(data)}} style={{backgroundColor: 'white' }}>
                      <p>{data.name}</p>
                    </button>
                  )         
                })
              }         
          </div>

          <div className="card-info" style={{borderWidth:1, borderRadius:8}}>
            <div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Name :  </span>
                <span style={{fontSize:18, color:'white'}}>ReactNativeClone</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Fullname : </span>
                <span style={{fontSize:18, color:'white'}}>andry26sistiawan/ReactNativeClone</span>
              </div> 
              <div>                
                <span style={{fontSize:18, color:'white'}}>Private : </span> 
                <span style={{fontSize:18, color:'white'}}>False</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Owner Login : </span>
                <span style={{fontSize:18, color:'white'}}>andry26sistiawan</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Owner ID : </span>
                <span style={{fontSize:18, color:'white'}}>59561635</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Owner Node Id : </span>
                <span style={{fontSize:18, color:'white'}}>MDQ6VXNlcjU5NTYxNjM1</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Owner Url : </span>
                <span style={{fontSize:18, color:'white'}}>https://api.github.com/users/andry26sistiawan</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Owner Type : </span>
                <span style={{fontSize:18, color:'white'}}>User</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Html Url : </span>
                <span style={{fontSize:18, color:'white'}}>https://github.com/andry26sistiawan/AndrySistiawan_Tokopandai</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Description : </span>
                <span style={{fontSize:18, color:'white'}}>null</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Created at : </span>
                <span style={{fontSize:18, color:'white'}}>2020-09-08T19:54:33Z</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Updated at : </span>
                <span style={{fontSize:18, color:'white'}}>2020-09-08T20:08:53Z</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Pushed at : </span>
                <span style={{fontSize:18, color:'white'}}>2020-09-08T20:08:51Z</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Git Url : </span>
                <span style={{fontSize:18, color:'white'}}>git://github.com/andry26sistiawan/AndrySistiawan_Tokopandai.git</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Watchers Count : </span>
                <span style={{fontSize:18, color:'white'}}>0</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Language : </span>
                <span style={{fontSize:18, color:'white'}}>JavaScript</span>
              </div>
              <div>               
                <span style={{fontSize:18, color:'white'}}>Default Branch : </span>
                <span style={{fontSize:18, color:'white'}}>Master</span>
              </div>

            </div>
          
          </div>

        </div>
        
      </div>
    )
  }
}

export default App;
