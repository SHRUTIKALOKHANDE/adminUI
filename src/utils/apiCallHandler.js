import { message } from 'antd';

const endPoint = `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`;
const getUser = async()=>{
    try{
        let response = await( await fetch(endPoint)).json();
        if(response){
            return response;
        }
    }catch(e){
        message.error("Something were went wrong. Please try again.",e);
    }
};

export{
    getUser,
}
