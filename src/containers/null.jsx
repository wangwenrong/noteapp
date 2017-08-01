import React from 'react';
import { App, Top } from '../components/todolist';

export function NullDetail() {
    return (
        <App>
            <Top title='收件箱' />
            <div className='warp'>
            </div>
        </App>
    )
}