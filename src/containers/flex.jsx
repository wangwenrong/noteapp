import React from 'react';
import '../css/flexStyle.css';

function Flex({ newClass = '', children }) {
    if ({ newClass } = 'alignItems') {
        newClass = '' + 'alignItems' //垂直居中
    }
    if ({ newClass } = 'justifyContent') {
        newClass = '' + 'justifyContent' //水平居中
    }
    if ({ newClass } = 'contenCneter') {
        newClass = '' + 'contenCneter'  //垂直水平居中
    }
    if ({ newClass } = 'flexOne') {
        newClass = '' + 'flexOne' //平均分配为1
    }
    return (
        <div className={'flex ' + newClass}>{children}</div>
    )
}
export function FlexDiv() {
    return (
        <Flex newClass='contenCneter'>
            <p>你好啊</p>
            <p>我不太好呢</p>
            <p>是吗？</p>
            <p>是啊。。。</p>
        </Flex>
    )
}