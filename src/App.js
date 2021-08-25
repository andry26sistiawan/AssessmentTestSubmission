import './app.scss';
import { Component } from 'react';
import ItemCard from './components/ItemCard';
import Instruction from '../src/assets/instruction1.jpg'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataListRepos: [],
      dataListRepos: [],
      aktifButton :'',
      fullname : "",
      private : '',
      ownerLogin : "",
      ownerID : "",
      ownerNodeId : "",
      ownerUrl :"",
      ownerType :"",
      htmlUrl : "",
      description : "",
      createdAt : "",
      updatedAt :"",
      pushedAt: "",
      gitURL : "",
      watchersCount: "",
      language : "",
      defaultBranch :""
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
    this.setState({
      aktifButton : data.name,
      fullname : data.full_name,
      private : data.private.toString(),
      ownerLogin : data.owner.login,
      ownerID : data.owner.id,
      ownerNodeId : data.owner.node_id,
      ownerUrl : data.owner.url,
      ownerType : data.owner.type,
      htmlUrl : data.html_url,
      description : data.description,
      createdAt : data.created_at,
      updatedAt : data.updated_at,
      pushedAt : data.pushed_at,
      gitURL : data.git_url,
      watchersCount :data.watchers_count,
      language : data.language,
      defaultBranch : data.default_branch
    });
    
  }

  _cardInfoRender(){
    return(
      <div className="card-info" style={{borderWidth:1, borderRadius:8}}>
        <div>
            <div style={{}}>
              <ItemCard tittle="Fullname :" value = {this.state.fullname} />
              <ItemCard tittle="Private :" value = {this.state.private} />
              <ItemCard tittle="Owner Login :" value = {this.state.ownerLogin} />
              <ItemCard tittle="Owner ID :" value = {this.state.ownerID} />
              <ItemCard tittle="Owner Node Id :" value = {this.state.ownerNodeId} />
              <ItemCard tittle="Owner Url :" value = {this.state.ownerUrl} />
              <ItemCard tittle="Owner Type :" value = {this.state.ownerType} />
              <ItemCard tittle="Html Url :" value = {this.state.htmlUrl} />
              <ItemCard tittle="Description :" value = {this.state.description == null ? "Null" : this.state.description} />
              <ItemCard tittle="Created at :" value = {this.state.createdAt} />
              <ItemCard tittle="Updated at :" value = {this.state.updatedAt} />
              <ItemCard tittle="Pushed at :" value = {this.state.pushedAt} />
              <ItemCard tittle="Git Url :" value = {this.state.gitURL} />
              <ItemCard tittle="Watchers Count :" value = {this.state.watchersCount} />
              <ItemCard tittle="Language :" value = {this.state.language == null ? "Null" : this.state.language} />
              <ItemCard tittle="Default Branch :" value = {this.state.defaultBranch} />
            </div>
        </div>
          
      </div>
    )
  }

  _instruction(){
    return(
      <div className="info"> 
        <div style={{marginBottom:30}} >
            <p>Instructions</p>
            <p>1. Silahkan klick Button "Get My Repositories"</p>
            <p>2. Silahkan pilih Repositories yang diinginkan</p>
            <p>3. Pastikan terhubung internet</p>
          </div>
            <div>
              <img src={Instruction} style={{width:550, height:250}} />
            </div>
              
      </div>
    )
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
                    <button className="btn-listRepos" onClick={()=>{this.parserData(data)}} style={{backgroundColor: this.state.aktifButton === data.name ? '#11D100' : 'white' }}>
                      <p>{data.name}</p>
                    </button>
                  )         
                })
              }         
          </div>

          {
            this.state.dataListRepos.length === 0 ?
              this._instruction()
            :
              this._cardInfoRender()            
          }

 

        </div>
        
      </div>
    )
  }
}

export default App;
