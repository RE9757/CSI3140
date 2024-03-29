$(document).ready(function() {
    $.getJSON('summary.json', function(data) {
        var html = '<table>';
        $.each(data, function(key, product) {
            html += '<tr>' +
                    '<td><img src="' + product.thumbnail + '" alt="' + product.title + 
                    '" style="cursor: pointer;" data-id="' + product.id + '"/></td>' +
                    '<td>' + product.title + '</td>' +
                    '<td>' + product.price + '</td>' +
                    '</tr>';
        });
        html += '</table>';
        $('#products').html(html);

        // 鼠标悬停显示大图
        $('img').hover(function() {
            var id = $(this).data('id');
            $.getJSON('images.json', function(data) {
                var imageInfo = data.find(item => item.id === id);
                if(imageInfo) {
                    $('img[data-id="' + id + '"]').attr('src', imageInfo.image);
                }
            });
        }, function() {
            var id = $(this).data('id');
            $.getJSON('summary.json', function(data) {
                var productInfo = data.find(item => item.id === id);
                if(productInfo) {
                    $('img[data-id="' + id + '"]').attr('src', productInfo.thumbnail);
                }
            });
        });

        // 点击显示描述
        $('img').click(function() {
            var id = $(this).data('id');
            $.getJSON('descriptions.json', function(data) {
                var descriptionInfo = data.find(item => item.id === id);
                if(descriptionInfo) {
                    $('#product-description').html(descriptionInfo.description);
                }
            });
        });
    });
});
