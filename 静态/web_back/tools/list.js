var list = {
    //显示页面事件
    show1: function (options) {
        $.ajax({
            url: CA_SEARCH,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res)
                }
            }
        })
    },
    //新增文章类别
    z_add: function (options) {
        $.ajax({
            url: CA_ADD,
            type: "POST",
            data: {
                name: $("#name").val(),
                slug: $("#slug").val()
            },
            //或者用表单直接获取  $("form").serialize(),这样可以获取表单内的全部元素，参数名为name的设定值
            success: function (res) {
                if (res.code === 200) {
                    options.success()
                }
            }
        })
    },

    //编辑文章类别
    re_bian: function (options) {
        $.ajax({
            type: "POST",
            url: CA_EDIT,
            data: {
                id: $("#hidden").val(),  //获取的是隐藏框中的值，是当前的id
                name: $("#name").val(),
                slug: $("#slug").val(),

            },
            success: function (res) {
                if (res.code === 200) {
                    options.success(res)
                }

            }
        })
    },

    //删除功能   整好了
    del_shan: function (options) {
        // var id = $(".shan").data("id")
        $.ajax({
            type: "POST",
            url: CA_DELETE,
            data: {
                id: options.data.id
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success(res)
                }

            }
        })
    }

}




