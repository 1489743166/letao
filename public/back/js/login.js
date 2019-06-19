$(function(){
    //1进行表单校验
    //校验要求 1用户名不能为空 长度为2-6位 2密码不能为空，长度为6-12位
    //配置的字段和input中的name关联
    $("#form").bootstrapValidator({
        //配置校验图标
        feedbackIcons:{
        valid:'glyphicon glyphicon-ok',//校验成功
        invalid:'glyphicon glyphicon-remove',//校验失败
        validating:'glyphicon glyphicon-refresh'// 
        },
        //配置字段
        fields:{
            username:{
            //配置校验规则:
            validators:{
                //非空
                notEmpty:{
                    message:"用户名不能为空"
                },
                stringLength:{
                    min:2,
                    max:6,
                    message:"用户名长度必须在2-6位"
                    
                },
                //配置回调提示的规则
                callback:{
                    message:"用户名不存在"
                }

            }
            },
            password:{
            validators:{
                notEmpty:{
                    message:"密码不能为空"
                },
                stringLength:{
                    min:6,
                    max:12,
                    message:"密码长度必须6-12位"
                },
                callback:{
                    message:'密码错误'
                }
            }
            }
        }
    });
    //登陆功能  表单插件会在提交表单时进行j校验
    //1校验成功默认就提交表单 会发生页面提交，我们需要注册表单校验成功事件，阻止默认的提交，通过ajax进行提交  2.检验成功
    //注册表单校验成功事件
    $("form").on('success.form.bv',function(e){
        e.preventDefault();//阻止默认的表单提交
        console.log('表单提交被阻止');
        //通过ajaxjji进行提交
        $.ajax({
            type:"post",
            url : "/employee/employeeLogin",  
            data : $('#form').serialize(),
            dataType:"json",
            success :function(info){
                console.log(info)
            if(info.success){

                location.href="index.html";
            }
            if(info.error===1000){
               // alert('当前用户名不存在')
                $('#form').data('bootstrapValidator').updateStatus("username",'INVALID','callback')
            }
            if(info.error===1001){
                //alert('密码错误')
                $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback')
            }
            }

        })

    })
    //重置功能bug解决
    $('[type="reset"]').click(function(){
        //调用插件方法进行重置校验状态
        $('#form').data("bootstrapValidator").resetForm(true);
    })
});