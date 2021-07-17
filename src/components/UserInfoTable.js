import React from "react";
import { Table, Button, message } from "antd";
// import { getUser } from "../utils/apiCallHandler";
// import {EditTwoTone, DeleteTwoTone} from '@ant-design/icons';

class UserInfoTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Role",
        dataIndex: "role",
      },
      {
        title: "Action",
        dataIndex: "action",
      },
    ];

    // this.data = [];

    this.state = {
    //   filteredData:[],
      selectedRowKeys: [], // Check here to configure the default column
    //   loading: false,
    };
  }

  // async componentDidMount() {
  //   let data = await getUser();
  //   for(let i = 0; i < data.length; i++){
  //     this.data.push({
  //       key:i,
  //       ...data[i],
  //       action: <>
  //                 <EditTwoTone  style={{marginRight:"10px"}} />   
  //                 <DeleteTwoTone twoToneColor="red" onClick={()=>this.handleDelete(data[i].id)}/>
  //               </>
  //     })
  //   }
  //   this.setState({
  //     filteredData:this.data,
  //     loading: true,
  //   },()=>console.log(this.state.filteredData));
  // }

  handleDelete = (id) => {
    // this.data.splice(id,1);
    // this.setState({
    //   filteredData:this.data
    // })
    this.props.deleteOne();
    message.info('All selected users deleted successfully!');
    // console.log(this.props.data);
    // console.log(id);
  };

  handleDeleteSelected = (selectedRowKeys) => {
    //console.log(selectedRowKeys);
    this.props.deleteSelected(selectedRowKeys);
    this.setState({
      selectedRowKeys:[],
    })
    message.info('All selected users deleted successfully!');
  }

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: "odd",
          text: "Select Odd Row",
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: "even",
          text: "Select Even Row",
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
        <>
          <Table
            rowSelection={rowSelection}
            columns={this.columns}
            // dataSource={this.state.filteredData}
            dataSource={this.props.data}
          />

          <Button className='btn-delete' onClick={()=>this.handleDeleteSelected(selectedRowKeys)}>Delete Selected</Button>
        </>
      
    );
  }
}
export default UserInfoTable;
