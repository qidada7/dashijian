//对用户操作的请求功能进行存储

var user = {
    //登录事件
    login: function (options) {
        $.ajax({
            type: "POST",
            url: LOG_IN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success()
                }
                else {
                    options.fail()
                }
            }
        })
    },



    //返回登录事件

    logout: function (options) {
        $.ajax({
            type: "POST",
            url: LOG_OUT,
            success: function (res) {
                if (res.code === 200) {
                    options.success()
                } else {
                    options.fail()
                }
            }
        })
    },

    //更换头像：
    getuser: function (options) {
        $.ajax({
            url: GET_USER,
            success: function (res) {
                if (res.code == 200) {
                    options.success(res)
                }

            }
        })


    },
    wen_shu: function (options) { }


}