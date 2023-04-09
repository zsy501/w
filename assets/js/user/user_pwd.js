$(function() {
    var form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ],
          samePwd:function(v) {
              if(v === $('[name=oldPwd').val()){
                return '不能相同'
              }
          },
          s:function(v) {
            if(v !== $('[name=newPwd').val()){
              return '没有跟上面相同'
            }
        }
    })

    $('.layui-form').on('submit',function(e) {
        e.preventDefault()
        $.ajax({
            method:'post',
            url:'/my/updatepwd',
            data:$(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                  return layui.layer.msg('更新密码失败！')
                }
                layui.layer.msg('更新密码成功！')
                // 重置表单
                $('.layui-form')[0].reset()
              }
        })
    })
})