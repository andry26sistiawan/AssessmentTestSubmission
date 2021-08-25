import './app.scss';
import { Component } from 'react';
import ItemCard from './components/ItemCard';

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
              <ItemCard tittle={"Fullname : "}  value={"andry26sistiawan/ReactNativeClone"}/>
              <ItemCard tittle={"Private : "}  value={"False"}/> 
              <ItemCard tittle={"Owner Login : "}  value={"andry26sistiawan"}/> 
              <ItemCard tittle={"Owner ID : "}  value={"59561635"}/> 
              <ItemCard tittle={"Owner Node Id : "}  value={"MDQ6VXNlcjU5NTYxNjM1"}/> 
              <ItemCard tittle={"Owner Url : "}  value={"https://api.github.com/users/andry26sistiawan"}/>
              <ItemCard tittle={"Owner Type : "}  value={"User"}/>
              <ItemCard tittle={"Html Url : "}  value={"https://github.com/andry26sistiawan/AndrySistiawan_Tokopandai"}/>  
              <ItemCard tittle={"Description : "}  value={"null"}/>
              <ItemCard tittle={"Created at : "}  value={"2020-09-08T19:54:33Z"}/>
              <ItemCard tittle={"Updated at : "}  value={"2020-09-08T20:08:53Z"}/>
              <ItemCard tittle={"Pushed at : "}  value={"2020-09-08T20:08:51Z"}/>
              <ItemCard tittle={"Git Url : "}  value={"git://github.com/andry26sistiawan/AndrySistiawan_Tokopandai.git"}/>
              <ItemCard tittle={"Watchers Count : "}  value={"0"}/>
              <ItemCard tittle={"Language : "}  value={"JavaScript"}/>
              <ItemCard tittle={"Default Branch : "}  value={"Master"}/>

            </div>
          
          </div>

        </div>
        
      </div>
    )
  }
}

export default App;
