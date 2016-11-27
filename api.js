var key = "AIzaSyAasguuBnZnsjId5BZAtNvAdIVzxTDUNf8";

var YouTube = {
    getLastVideos: function () {
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/videos",
            data: {
                part: 'snippet',
                key: key,
                chart: 'mostPopular',
                maxResults: 10
            },
            success: function( result ) {
                dfd.resolve(result)
            }
        });
        return dfd.promise();
    }
};
