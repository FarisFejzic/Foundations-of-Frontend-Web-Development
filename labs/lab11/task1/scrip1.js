$(document).ready(function(){
    $.ajax({
        url: 'languages.json',
        dataType: 'json',
        success: function(data){
            var table = '<table>';
            table += '<thead><tr><th>Code</th><th>Name</th></tr></thead>';
            table += '<tbody>';
            $.each(data, function(index, item){
                table += '<tr>';
                table += '<td>' + item.code + '</td>';
                table += '<td>' + item.name + '</td>';
                table += '</tr>';
            });
            table += '</tbody></table>';
            
            var tableContainer = document.getElementById('tableContainer');
            tableContainer.innerHTML = table;
        }
    });
  });