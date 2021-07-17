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



















// import React from "react";
// import { Input, AutoComplete } from "antd";

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options: [],
//     };
//   }

//   getRandomInt = (max, min = 0) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
//   };

//   searchResult = (query) =>
//     new Array(this.getRandomInt(5))
//       .join(".")
//       .split(".")
//       .map((_, idx) => {
//         const category = `${query}${idx}`;
//         return {
//           value: category,
//           label: (
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               <span>
//                 Found {query} on{" "}
//                 <a
//                   href={`https://s.taobao.com/search?q=${query}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {category}
//                 </a>
//               </span>
//               <span>{this.getRandomInt(200, 100)} results</span>
//             </div>
//           ),
//         };
//       });

//   handleSearch = (value) => {
//     let option = value ? this.searchResult(value) : [];
//     this.setState({ options: option });
//   };

//   handleSearch = (value) => {
//     let option = value ? this.searchResult(value) : [];
//     this.setState({ options: option });
//   };

//   onSelect = (value) => {
//     console.log("onSelect", value);
//   };

//   render() {
//     return (
//       <AutoComplete
//         dropdownMatchSelectWidth={252}
//         style={{
//           width: 300,
//         }}
//         options={this.state.options}
//         onSelect={this.onSelect}
//         onSearch={this.handleSearch}
//       >
//         <Input.Search size="large" placeholder="input here" enterButton />
//       </AutoComplete>
//     );
//   }
// }

// export default Search;
// // function getRandomInt(max, min = 0) {
// //   return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
// // }

// // const searchResult = (query) =>
// //   new Array(getRandomInt(5))
// //     .join('.')
// //     .split('.')
// //     .map((_, idx) => {
// //       const category = `${query}${idx}`;
// //       return {
// //         value: category,
// //         label: (
// //           <div
// //             style={{
// //               display: 'flex',
// //               justifyContent: 'space-between',
// //             }}
// //           >
// //             <span>
// //               Found {query} on{' '}
// //               <a
// //                 href={`https://s.taobao.com/search?q=${query}`}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 {category}
// //               </a>
// //             </span>
// //             <span>{getRandomInt(200, 100)} results</span>
// //           </div>
// //         ),
// //       };
// //     });

// // const Complete = () => {
// //   const [options, setOptions] = useState([]);

// //   const handleSearch = (value) => {
// //     setOptions(value ? searchResult(value) : []);
// //   };

// //   const onSelect = (value) => {
// //     console.log('onSelect', value);
// //   };

// //   return (
// //     <AutoComplete
// //       dropdownMatchSelectWidth={252}
// //       style={{
// //         width: 300,
// //       }}
// //       options={options}
// //       onSelect={onSelect}
// //       onSearch={handleSearch}
// //     >
// //       <Input.Search size="large" placeholder="input here" enterButton />
// //     </AutoComplete>
// //   );
// // };
