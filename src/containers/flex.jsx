import React from 'react';
import '../css/flexStyle.css';

function Flex({ alignItems = false, justifyContent = false, contenCneter = false, flexOne = false, children }) {
    let names = ' ';
    if (alignItems) {
        names = names + ' alignItems'//垂直居中
    }
    if (justifyContent) {
        names = names + ' justifyContent'//水平居中
    }
    if (contenCneter) {
        names = names + ' contenCneter'//垂直水平居中
    }
    if (flexOne) {
        names = names + ' flexOne'//平均分配为1
    }
    return (
        <div className={'flex' + names}>{children}</div>
    )
}
export function FlexDiv() {
    return (
        <Flex flexOne contenCneter>
            <div style={{background:'red'}}>111</div>
            <div style={{background:'green'}}>222</div>
            <div style={{background:'red'}}>3333</div>
        </Flex>
    )
}