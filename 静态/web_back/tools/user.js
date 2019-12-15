//对用户操作的请求功能进行存储

var user = {
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
    }
}