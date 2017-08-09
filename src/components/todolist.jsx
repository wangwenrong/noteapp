import React from 'react';
import PropTypes from 'prop-types';
import '../css/styletodo.css';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

export function App({ children }) {
    return (
        <div className='app'>
            {children}
        </div>
    )
}
export function Top({ title, back }, context) {
    let elementBack = null;
    if (back) {
        elementBack = <div className="back">{back}</div>
    }
    return (
        <div className="top">
            <div className="topInfo"><p>{title}</p></div>
            <div className="in">
                {elementBack}
                <div className="enrich"></div>
                <div className="right"></div>
            </div>
        </div>
    );
}
export function Ptitle({ title, day }) {
    return (
        <div className="titleFx">
            <p>{title},<span>{day}</span></p>
        </div>
    )
}
export function BlockList({ children }) {
    return (
        <div className='BlockList'>
            {children}
        </div>
    )
}
export function BlockListItem({ title, day, to }) {
    return (
        <li onClick={to} className='BlockListItem'>
            <p>{title}</p>
            <div className='enrich'></div>
            <span>{day}</span>
        </li>
    )
}
/**可移动操作 */
export class Swipe extends React.Component {
    constructor(props) {
        super(props)
        this.startX = 0,   //触摸原点
            this.state = {
                clientX: 0,  //滑动的x点
                optionWidth: 0,
                transition: false,
                show: false
                //offsetX:0
            }
    }
    render() {
        let offsetX = this.state.clientX - this.startX; //偏移差
        //禁止往右移动
        if (offsetX > 0) {
            offsetX = 0;
            this.startX = this.state.clientX;
        }
        // if (offsetX > 0) {
        //     offsetX = 0;
        // }
        // let styles = {
        //     root: SL.create({ height: '.88rem', borderBottom: '1px solid #e6e6e6', position: 'relative', overflow: 'hidden' }).merge(this.props.style),
        //     /**移动 */
        //     container: SL.create({ marginLeft: '.2rem', fontSize: '.26rem', background: '#fff', zIndex: 10, position: 'absolute', width: '100%', height: '100%', transform: `translate3d(${offsetX}px,0,0)` }),
        //     right: { marginRight: '.2rem' },
        //     option: { height: '100%', fontSize: '.32rem', overflow: 'hidden' },
        //     optionLabel: SL.create({ height: '100%', padding: '0 .3rem' })
        // }
        // if (this.state.transition) {
        //     styles.container.merge({ transition: '0.3s ease-out' });
        // }
        return (
            <div style={{ position: 'relative',height:'0.8rem',background:'#fff', display: this.state.show ? 'none' : '' }}>
                <div style={{ display: 'flex', height: '.8rem', background: '#fff', color: '#fff' }}>
                    <div style={{ flex: '1' }}></div>
                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', background: '#ddd', padding: '0 10px' }}>设为标记</div>
                    <div onClick={()=>{this.startX=0; this.setState({clientX:0},this.props.delete) }} style={{ display: 'flex', height: '100%', alignItems: 'center', background: 'red', padding: '0 10px' }}>删除</div>
                </div>
                <div
                    onTouchStart={(e) => {
                        this.startX = e.touches[0].clientX;
                        this.setState({ transition: false, clientX: this.startX });
                    }}
                    onTouchMove={(e) => {
                        this.setState({ clientX: e.touches[0].clientX });
                    }}
                    onTouchEnd={(e) => {
                        if (offsetX < -48) {
                            this.setState({ transition: true }, () => {
                                this.startX = 0;
                                this.setState({ clientX: -124 });
                            });
                        }
                        else {
                            this.setState({ transition: true }, () => {
                                this.startX = 0;
                                this.setState({ clientX: 0 });
                            });
                        }

                    }}
                    onClick={this.props.to}
                    style={{  display: 'flex',position: 'absolute', left: 0, right: 0, top: 0, height:'0.8rem', lineHeight: '0.8rem', padding: '0 0.3rem', background: '#fff', transform: 'translate3d(' + offsetX + 'px,0,0)', transition: this.state.transition ? 'transform 300ms' : null }}>
                        <p>{this.props.title}</p>
                        <div className='enrich'></div>
                        <span>{this.props.day}</span>
                    </div>
                {/* <div
                    onTouchStart={(e) => {
                        if (this.state.show) {
                            this.setState({ transition: true });
                            window.setTimeout(() => {
                                this.setState({ startX: this.state.clientX });
                                this.setState({ show: false });
                            }, 100)
                        } else {
                            this.setState({ transition: false, startX: e.touches[0].clientX, clientX: e.touches[0].clientX })
                        }
                    } }
                    onTouchMove={(e) => { this.setState({ clientX: e.touches[0].clientX }) } }
                    onTouchEnd={(e) => {
                        this.setState({ transition: true }); window.setTimeout(() => {
                            if (-offsetX > (this.state.optionWidth / 3)) {
                                this.setState({ startX: this.state.clientX + this.state.optionWidth });
                                this.setState({ show: true });
                            } else {
                                this.setState({ startX: this.state.clientX });
                                this.setState({ show: false });
                            }
                        }, 100)
                    } }
                    >
                    <div>{this.props.label}</div>
                    <Placeholder.Full/>
                    <div style={styles.right}><span>{this.props.rightLabel}</span></div>
                </div>
                <Placeholder.Full/>
                <div className={CN.czjz} ref='option' style={styles.option}>
                    <span className={CN.czjz} style={{...styles.optionLabel.o, background: '#8a8282'}}>标为一读</span>
                <span className={CN.czjz} style={{...styles.optionLabel.o, background: 'red'}}>删除</span>
                </div > */}
            </div >
        );
    }
    showBlock = () => {
        this.setState({ show: false })

    }
    componentWillMount() {
    }
    componentDidMount() {
        //this.setState({ optionWidth: this.refs.option.clientWidth });
    }
    handleClick() {
        if (this.props.href) {
            //console.log('执行了list点击');
            //hashHistory.push(this.props.href);
        }
        else if (this.props.onTap) {
            //this.props.onTap();
        }
    }
}
export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: false
        };
    }
    render() {
        return (
            <div className='nav'>
                <svg onClick={this.dianji} className={(this.state.rotate ? ' active' : '')} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="0.5rem" height="0.5rem" viewBox="0 0 512 512" xmlSpace="preserve">
                    <polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 " />
                </svg>
            </div>
        )
    }
    dianji = () => {
        this.setState({ rotate: !this.state.rotate });
    }
}

// export function Nav() {
//     let 旋转 = () => {
//         if ($('.navImg').hasClass('active')) {
//             $(this).removeClass('active');
//         } else {
//             $(this).addClass('active');
//         }
//     }
//     return (
//         <div className='nav'><img onClick={旋转} className='navImg' src="./images/nav.png" alt="" /></div>
//     )
// }