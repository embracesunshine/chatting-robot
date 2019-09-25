function init () {
    bindEvent();
}
function bindEvent () {
    $('#inp').keyup(function (e) {
        if(e.keyCode == 13) {
            $('#submit').trigger('click');
        }
        // console.log(e);
    });
    $('#submit').click(function (e) {
        var val = $('#inp').val();
        if(val) {
            addDom('mine', val);
            getData(val);
            $('#inp').val('');
        }
    })
}

// 文字添加到页面
function addDom (who, val) {
    $('<div class="' + who + '">\
    <div class="avitor"></div>\
    <div class="text">' + val +'</div>\
    </div>').appendTo('.content-box');
    $('.content-box').scrollTop($('.content-box')[0].scrollHeight - $('.content-box')[0].clientHeight)
}

// 获取机器人的回复
function getData (val) {
    $.ajax({
        url: 'http://api.duyiedu.com/api/chat/sendMsg',
        data: {
            msg: val,
            appkey: 'dongmeiqi_1547441744650'

        },
        dataType: 'json',
        success: function (res) {
            console.log(res);
            addDom('robot', res.data.text);
        }
    })
}





init();