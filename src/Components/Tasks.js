import React, { Component } from 'react';
import './Task.css';
import './Login.css';

class Tasks extends Component {
        constructor(props){
            super(props);
            this.state ={
                TaskItems: [],
                isloaded: false,

            }
        }
        getTaskItems(){
            fetch('https://staging-core-optimy.com/api/v1/task/list')
                .then(res => res.json())
                .then(json =>{
                    this.setState({
                        isloaded: true,
                        TaskItems: json,
                    })
                });
        }

    render(){
        var { isloaded  } = this.state;
        if(isloaded){
            return<div>Loading....</div>;
        }else{
  return (
    <div className = "card">
        <div className = "row mt-4 mr-3 ml-3">
        <img className="header-icon float-left" src="/kog_logo_flat@2x.png" alt=""/>
        <img className="header-icon float-right" src="/assets/icons/24/timi.png" alt=""/>
        </div>
        <div className="card mt-4 mr-3 ml-3">
      <div className="card-body">

      <button type="button" className="btn btn-secondary float-left mb-3">My Tasks</button><br/>
      <div className="form-group">
      <label >Today's progress</label><br/>
      <img className="progressbar" src="/assets/progressbar.png" alt=""/>
        </div>
        <div className ="form-group">
        <button className="badge badge-danger">Critical 2</button><br/>
        <img  src="/assets/icons/16/icons-16-emptyTask-critical.png" alt=""/>&nbsp;
        <label  >Inventory Count</label><br/>
        <img src="/assets/icons/16/icons-16-rightarrowSmall.png" alt=""/>&nbsp;
        <span className="critical">Due Today</span><br/>
        <div>
        <img  src="/assets/icons/16/icons-16-emptyTask-critical.png" alt=""/>&nbsp;
        <label >Set up event display</label><br/>
        <img src="/assets/icons/16/icons-16-rightarrowSmall.png" alt=""/>&nbsp;
        <span className="critical">Due 08:00</span>
        </div>
        <div class="all">
        <button type="button" className="btn btn-secondary mb-3">All 3</button><br/>

        <img  src="/assets//icons/16/icons-16-emptyTask-critical.png" alt=""/>&nbsp;
        <label >Inventory Count</label><br/>
        <img src="/assets/icons/16/icons-16-rightarrowSmall.png" alt=""/>&nbsp;
        <span className="critical">Due Today</span><br/>

        <img src="/assets/icons/16/icons-16-emptyTask.png" alt=""/>&nbsp;
        <label >Schedule p2p Training</label><br/>

        <img  src="/assets/icons/16/icons-16-emptyTask-critical.png" alt=""/>&nbsp;
        <label >Set up event display</label><br/>
        <img src="/assets/icons/16/icons-16-rightarrowSmall.png" alt=""/>&nbsp;
        <span className="critical">Due 18:00</span>
        </div>
        </div>
        </div>
    </div>
    <div className= "card-footer">
    <button type="button"> <img className="footer-icon " src="/assets/icons/24/home@2x.png" alt=""/></button>
    <button type="button">  <img className="footer-icon " src="/assets/icons/24/icons-24-chat@2x.png" alt=""/></button>
    <button type="button">  <img className="footer-icon " src="/assets/icons/24/icons-24-chat-blue copy@2x.png" alt=""/></button>
    <button type="button">  <img className="footer-icon " src="/assets/icons/24/icons-24-chat-blue copy 2@2x.png" alt=""/></button>
    <button type="button">  <img className="footer-icon " src="/assets/icons/36/Rectangle@2x.png" alt=""/></button>

    </div>
    </div>
    );
    }
}
    }

export default Tasks;