import React from 'react';

export class InputText extends React.Component {
    constructor(props) {
        super(props);
        if(!localStorage.content){
            localStorage.content=JSON.stringify([]);
        }
    }
    render() {
        return (
            <div className='popup'>
                <div className='InputTex'>
                    <textarea type="text" placeholder='请输入...'></textarea>
                    <div className='inputIcon'>
                        <div className='iconItem'>确认</div>
                    </div>
                </div>
            </div>
        )
    }

    add = (content)=>{
        //获取所有数据转换成数组
        let allContent=JSON.parse(localStorage.content);
        //添加内容
        allContent.push({content:content,createTime:new Date().getTime()});
        //所有数据存入localStorage
        localStorage.content=JSON.stringify(allContent);
        
    }

}