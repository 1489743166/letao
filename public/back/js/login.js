$(function(){
    //1进行表单校验
    //校验要求 1用户名不能为空 长度为2-6位 2密码不能为空，长度为6-12位
    //配置的字段和input中的name关联
    $("#form").bootstrapValidator({
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
                }
            }
            }
        }
    });
});