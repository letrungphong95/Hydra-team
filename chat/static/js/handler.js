$(function(){
    $('#btn_msg').click(function(e){
        var tbody = $('#messages');
        e.preventDefault();
        $.ajax({
            type:'POST',
            url:'/test/',
            data:{
                text:$('#input_msg').val(),
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
            },
            success:function(data){
                tbody.append('<li class="me2" style="color:red">' +data['user_text']+ '</li>');
                tbody.append('<li class="bot2" style="color:blue">' +data['bot_text']+ '</li>');
                $('#messages').animate({
                    scrollTop: $('#messages')[0].scrollHeight
                }, 0);
                $('#input_msg').val = '';
                $('#input_msg').val('').focus();
            }
        }); 
    });
});
