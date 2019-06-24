$(function(){
    $('#btn_msg').click(function(e){
        var tbody = $('#messages');
        e.preventDefault();
        $.ajax({
            type:'POST',
            url:'/test/',
            data:{
                text:$('#m').val(),
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
            },
            // success:function(data){
            //     if (data['user_text'].replace(/\s+/g, '') != ''){
            //         tbody.append('<li class="me" style="color:red">'+data['user_text']+ '</li>');
            //         tbody.append('<li class="bot" style="color:blue">'+data['bot_text']+ '</li>');
            //         $('#messages').animate({
            //             scrollTop: $('#messages')[0].scrollHeight
            //         }, 0);
            //     }
            //     $('#m').val = '';
            //     $('#m').val('').focus();
            // }
            success:function(data){
                tbody.append('<li class="me" style="color:red">'+data['user_text']+ '</li>');
                tbody.append('<li class="bot" style="color:blue">'+data['bot_text']+ '</li>');
                $('#messages').animate({
                    scrollTop: $('#messages')[0].scrollHeight
                }, 0);
                $('#m').val = '';
                $('#m').val('').focus();
            }
        }); 
    });
});
