import React from 'react';
import Search from './Search';
import UserInfoTable from './UserInfoTable';
import { getUser } from "../utils/apiCallHandler";
import {EditTwoTone, DeleteTwoTone} from '@ant-design/icons';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.data = [];

        this.state = {
        filteredData:[],
        loading: false,
        isDelete:false,
        };
    }

    async componentDidMount() {
        let data = await getUser();
        for(let i = 0; i < data.length; i++){
          this.data.push({
            key:i,
            ...data[i],
            action: <>
                      <EditTwoTone  style={{marginRight:"10px"}} />   
                      <DeleteTwoTone twoToneColor="red" onClick={()=>this.handleDelete(data[i].id)}/>
                    </>
          })
        }
        this.setState({
          filteredData:this.data,
          loading: true,
        },()=>console.log("Before Deletion",this.state.filteredData));
    }

    handleDelete = (id) => {
        this.data.splice(id,1);
        this.setState({
            filteredData:this.data,
        });
    };

    handleDeleteSelected = (selectedRowKeys) => {
        for(let i = 0; i < selectedRowKeys.length; i++){
            this.data.splice(selectedRowKeys[i],1);
        }
        let d =this.data;
        for(let i = 0; i<this.data.length; i++){
            this.data.push({
                key:i,
                ...d[i],
            });
        }
        this.setState({
            filteredData:[...this.data],
            isDelete:true,
        },()=>console.log("After Deletion",this.state.filteredData));
    }

    render(){
        return(            
        <div className='container'>
            <div className='search'>
            <Search data={this.state.filteredData}/>
            </div>
            <div className='table'>
            {this.state.isDelete || this.state.loading ? (
                <UserInfoTable data={this.state.filteredData} deleteSelected={this.handleDeleteSelected}/>
            ) : ('') }
            </div>
        </div>
            
        )
    }
}

export default Home;
