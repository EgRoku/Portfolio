$(document).ready(function() {
    $('#bt1').click(function() {
        $('#fr1').attr('action',
                       'mailto:jimenezjj5150@gmail.com?subject=' +
                       $('#tb1').val() + '&body=' + $('#tb2').val());
        $('#fr1').submit();
    });
});