
var videos = [];
var favorites_localStorage = JSON.parse(localStorage.getItem('favorites'));
var favorites;
if (favorites_localStorage) {
    favorites = favorites_localStorage;
    renderVideos(favorites, 'favorites');
} else {
    favorites = [];
}

/*var razmMas = videos.items.length;*/
/*console.log(videos.length);*/

$.when (YouTube.getLastVideos()).then (function (rezult) {
    videos = rezult.items;
    renderVideos(videos, 'last');
    console.log(videos.length);
    console.log(videos);
    $('#last').on('click', '.watch',function () {
        $('#openVideoModal').modal('show');
        var index = $(this).parent().data('index');
        var video = videos[index];
        var title = video.snippet.title;
        var id = video.id;
        $('.modal-title').html(title);
        var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>'
        $('.modal-body').html(iframe);
    });
    $('#favorites').on('click', '.watch',function () {
        $('#openVideoModal').modal('show');
        var index = $(this).parent().data('index');
        var video = favorites[index];
        var title = video.snippet.title;
        var id = video.id;
        $('.modal-title').html(title);
        var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>'
        $('.modal-body').html(iframe);
    });
    $('#last').on('click', '.addFavorites' , function () {
        var index = $(this).parent().data('index');
        var video = videos[index];
        favorites.push(video);
        renderVideos(favorites , 'favorites');
        var favorites_string = JSON.stringify(favorites);
        localStorage.setItem('favorites', favorites_string);

    })

    });


function renderVideos(videos, id) {
    $('#' + id + ' .row').html('');
    videos.forEach(function (data, index) {
        var video='<div class="col-sm-6 col-md-4">'+
            '<div class="thumbnail">'+
            '<img src=" ' + data.snippet.thumbnails.high.url + ' " alt="...">'+
            '<div class="caption">'+
            '<h3>' + data.snippet.title + '</h3>'+
            '<p>' + data.snippet.description + '</p>'+
            '<p style="color: green"><b><i>' + data.snippet.publishedAt + '</i></b></p>'+
            '<p style="color: red"><b>' + data.snippet.channelTitle + '</b></p>'+
            '<p data-index="' + index + '">' +
                '<batton class="btn btn-primary watch" role="button">Show</batton>' +
                '<batton class="btn btn-default addFavorites" role="button">AddFavorites</batton>' +
            '</p>'+
            '</div>'+
            '</div>'+
            '</div>'
        $('#' + id + ' .row').append(video);

    });

}

