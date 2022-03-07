$('select').on('change', function () {
    let optionText = $(this).find('option').filter(':selected').text();
    $('.card').each(function(){
        if(optionText === 'Vehicle Type'){
            $('.card').show();
        }else if ($(this).find('.type').text() !== optionText){
            $(this).hide();
        }else{
            $(this).show();
        }
    })
});
