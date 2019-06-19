// //开启进度条
// NProgress.start();

// setTimeout(function(){
//     NProgress.done();
// },1000)
//实现第一个aiax开启的时候开启进度条
//在所有ajax请求都完成的时候，结束进度条
//ajax全局
//ajaxComplete 当ajax完成的时候触发 （不管成功还是失败）
//ajaxError                失败调用
//ajaxSuccess              成功时候调用
//ajaxSend                 发送的时候调用
//ajaxStart   在第一个ajax发送时，调用
//ajaxStop   当所有ajax请求完成的时候，调用
 $(document).ajaxStart(function(){
     //开启进度条
     NProgress.start();
 })
$(document).ajaxStop(function(){
    setTimeout(function(){
        NProgress.done();
    },500)
})
