import React from 'react';
import PropTypes from 'prop-types';
import '../css/styletodo.css';
import { App, Top, BlockList } from '../components/todolist';

export function Detail({},context) {
    return (
        <App>
            <Top title='收件箱' />
            <div className='warp' style={{ background: '#fff' }}>
                <div onClick={()=>{
                    context.router.history.push('flex')
                    }} className='detailTitle'>我是标题档</div>
                <div className='detailConten'>
                    <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                        </p>
                </div>
            </div>
        </App>
    )
}
Detail.contextTypes = {
    router: PropTypes.object
};


