import React from 'react';
import { Input } from 'antd';

class Search extends React.Component{

  onSearch = (event) =>{
    this.props.onSearch(event.target.value);
  };

  render(){
    return(
      <Input.Search placeholder="search by name, email or role.." onSearch={this.onSearch} enterButton />
    );
  }

}
export default Search;















