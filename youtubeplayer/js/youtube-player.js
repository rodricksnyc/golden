$(function () {
    var $window = $(window),
        player,
        iframe;

    function getWindowWidth() {
        $('body, html').css('overflow', 'hidden');
        w = $window.width();
        $('body, html').css('overflow', 'visible');
    }
    getWindowWidth();

    $(document).on('click', '.agronomy-card .btn-default', function (e) {
        if ($(this).hasClass('youtube')) {
            e.preventDefault();
            var videoID = $(this).attr('data-youtube-id');
            $.ajax({
                type: 'get',
                url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoID + '&key=AIzaSyCMUnt4PfjjGouuqOv_4-_FLCMX7a7WqiM',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: true,
                success: function (data) {
                    var videoDesc = data.items[0].snippet.description,
                        videoTitle = data.items[0].snippet.title;

                    $('.video-title').text(videoTitle);
                    if (videoDesc !== 'null') {
                        $('.video-description').text(videoDesc);
                    } else {
                        $('.video-description').text('');
                    }
                    $('.youtube-video-container').show();
                    $('.youtube-video-inner').show();

                    player = new YT.Player('player', {
                        height: '720',
                        width: '480',
                        videoId: videoID,
                        playerVars: {
                            rel: 0,
                            showinfo: 0,
                            ecver: 2,
                            modestbranding: 1
                        },
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                }
            });
        }
    });

    // init player
    $('body').on('click', '.youtube-thumb', function () {
        var $this = $(this),
            $videoContainerParent = $this.parent().parent().siblings('.youtube-video-container'),
            $videoInner = $('.youtube-video-inner', $videoContainerParent),
            videoID = $this.parent().attr('data-id'),
            videoTitle = $this.parent().attr('data-title'),
            videoDesc = $this.parent().attr('data-description'),
            videoURL = $this.parent().attr('data-video'),
            videoPoster = $this.parent().attr('data-poster');

        $('.video-title', $videoContainerParent).text(videoTitle);
        if (videoDesc !== 'null') {
            $('.video-description', $videoContainerParent).text(videoDesc);
        } else {
            $('.video-description', $videoContainerParent).text('');
        }
        $('.youtube-video', $videoContainerParent).attr('data-title', videoTitle);
        $('.youtube-video', $videoContainerParent).attr('data-id', videoID);

        
    });

    function onPlayerReady(event) {
        var player = event.target,
            iframe = $('#player');
        setupListener();
    }

    function onPlayerStateChange(event) {
        var playerStatus = event.data;

        if (playerStatus === 0) {
            //ended
            //closeVideo();
        }
    }

    function closeVideo() {
        player.stopVideo();
        player.destroy();
        $('.youtube-video-container').hide();
        $('.youtube-video-inner').hide();
    }

    function setupListener() {
        playVideo();
    }

    function playVideo() {
        player.playVideo();
    }

    $('span.close').click(function () {
        closeVideo();
    });

    $(window).resize(function () {
        getWindowWidth();
    });

});