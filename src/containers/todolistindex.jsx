import React from 'react';
import PropTypes from 'prop-types';
import '../css/styletodo.css';
import { App, Top, Ptitle, BlockList, BlockListItem, Nav, Swipe } from '../components/todolist';


export class Todolist extends React.Component {
    constructor(props) {
        super(props);
        if (!localStorage.content) {
            localStorage.content = JSON.stringify([]);
        }
        if(!localStorage.maxId){
            localStorage.maxId=='0';
            this.maxId=0;
        }else{
            this.maxId=+localStorage.maxId;
        }
        this.input = {
            content: '',
            date: ''
        }
        this.state = {
            popup: false,
            list: JSON.parse(localStorage.content)
        }
    }
    render() {
        let history = this.context.router.history;

        return (
            <App>
                <Top title='收件箱' />
                <div className='warp'>
                    {/* <Ptitle title='今天' day='周五' /> */}
                    <BlockList>
                        {this.state.list.map((item, index) => {
                            let time = new Date(item.finishTime);
                            return (
                                <Swipe delete={()=>{this.delete(item.id)}} to={() => {
                                    history.push('/detail')
                                }} title={item.content} day={time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()} >
                                </Swipe>
                            )
                        })}
                        
                       
                            {/* {this.state.list.map((item, index) => {
                                let time = new Date(item.finishTime);
                                return (
                                    <BlockListItem to={() => {
                                        history.push('/detail')
                                    }} title={item.content} day={time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()} />
                                )
                            })} */}

                        
                    </BlockList>
                    <div onClick={this.showPopup} className='nav'>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="0.5rem" height="0.5rem" viewBox="0 0 512 512" xmlSpace="preserve">
                            <polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 " />
                        </svg>
                    </div>
                </div>
                <div className={'popup ' + (this.state.popup ? 'active' : '')}>
                    <div className='InputTex'>
                        <textarea type="text" ref={(input) => { this.input.content = input }} placeholder='请输入...'></textarea>
                        <div className='inputIcon'>
                            <div className='iconItem'>
                                待办时间：<input type="date" ref={(input) => { this.input.date = input }} />
                            </div>
                        </div>
                        <div onClick={this.add} className='buttonOk'>确认</div>
                    </div>
                </div>
            </App>
        )
    }
    showPopup = () => {
        this.setState({ popup: true });
    }
    add = () => {
        let content = this.input.content.value;
        let date = this.input.date.value;
        //获取所有数据转换成数组
        let allContent = JSON.parse(localStorage.content);
        this.maxId++;
        localStorage.maxId=this.maxId;
        //添加内容
        allContent.push({id:this.maxId, content: content, createTime: new Date().getTime(), finishTime: new Date(date).getTime() });
        //所有数据存入localStorage
        localStorage.content = JSON.stringify(allContent);

        this.loading();
        this.setState({ popup: false });
        this.input.content.value = '';
        this.input.date.value = ''

    }
    delete = (id) => {
        //获取所有数据转换成数组
        let allContent = JSON.parse(localStorage.content);
        let addr = allContent.findIndex((item)=>item.id==id);
        allContent.splice(addr,1)
        //所有数据存入localStorage
        localStorage.content = JSON.stringify(allContent);

        this.loading();

    }
    

    loading = () => {
        this.setState({ list: JSON.parse(localStorage.content) });
    }
}

Todolist.contextTypes = {
    router: PropTypes.object
};

function getFormatDate(time) {
    let srcTime = new Date(time);
    let curTime = new Date();
}

