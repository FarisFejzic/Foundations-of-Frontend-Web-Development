$(document).ready(function() {
    $.ajax({
        url: 'reservations.json',  // Ensure this path is correct
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var select = $('#select1');
            $.each(data, function(index, item) {
                var option = $('<option></option>').attr('value', item.name).text(item.name);
                select.append(option);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Failed to load reservations.json:', textStatus, errorThrown);
        }
    });
});
