resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

var docEl = document.documentElement,
recalc = function() {
    //设置根字体大小
    docEl.style.fontSize = 20 * (docEl.clientWidth / 320) + 'px'
};
//绑定浏览器缩放与加载时间
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);

// animation: bird-slow 400ms steps(1,start)/step(3) infinite;
//  @-webkit-keyframes bird-slow{
//     0% {
//         background-position: -0px 0px
//     }
//     100% {
//         background-position: -273px 0px
//     }
// } 
// animation中的step()
// 1、只有第一个参数的时候keyframes中的最后一个不计入动画。
// 2、有第二个参数：
// 第二个参数是start时，keyframes中的第一个不计入动画；
// 第二个参数是end时，keyframes中的最后一个不计入动画,动画分成一步，动画执行时以结尾端点为开始。

var Hello = React.createClass({

	getInitialState : function(){
  	return {
    	fontSize : '44px',
      color : 'red'
    }
  },
  
  handlers : function(event){
  	event.stopPropagation();
    event.preventDefault();
    var tipE = React.findDOMNode(this.refs.tip);
    
    this.setState({
    	inputVal : event.target.value
    });
  },
  render: function() {
    return <div onClici="{this.handlers}" ref="tip" style={this.state}>Hello {this.props.title} {this.props.name}</div>;
  },
  componentWillMount : function(){
  
  },
  componentDidMount : function(){
  	window.setTimeout(function(){
    	this.setState({
      	color : "green"
      })
    }.bind(this),1000)
  }
});

ReactDOM.render(
  <Hello name="World" title="Mr"/>,
  document.getElementById('container')
);