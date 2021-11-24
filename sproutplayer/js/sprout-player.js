$(function () {
    //	debugger;
    var $window = $(window);

    function getWindowWidth() {
        $('body, html').css('overflow', 'hidden');
        w = $window.width();
        $('body, html').css('overflow', 'visible');
    }
    getWindowWidth();

    var formatTime = function (seconds) {
        minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
    }


    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function comp(a, b) {
        return new Date(a.result.date).getTime() - new Date(b.result.date).getTime();
    }

    $('.sprout-container').each(function () {
        var $videoContainer = $(this),
			vidTag = $videoContainer.attr('data-tag');

        $.ajax({
            type: 'get',
            url: "https://" + window.location.host + '/sproutplayer/default.aspx/GetVideos',
            data: {
                'tagName': '"' + vidTag + '"'
            },
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: true,
            success: function (data) {
                var v = JSON.parse(data.d),
					videoString = parseInt(getParameterByName('videoID'));

                v.videos.sort(function (a, b) {
                    return new Date(b.updated_at) - new Date(a.updated_at);
                });

                if (videoString != null && videoString != undefined && !isNaN(videoString)) {
                    var videoTitle = v.videos[videoString].title,
						videoDesc = v.videos[videoString].description,
						videoID = v.videos[videoString].id,
						videoSrc = v.videos[videoString].assets.videos['720p'],
						posterFrames = v.videos[videoString].assets.poster_frames,
						posterFrame = posterFrames[posterFrames.length - 1];
                } else {
                    var videoTitle = v.videos[0].title,
						videoDesc = v.videos[0].description,
						videoID = v.videos[0].id,
						videoSrc = v.videos[0].assets.videos['720p'],
						posterFrames = v.videos[0].assets.poster_frames,
						posterFrame = posterFrames[posterFrames.length - 1];
                }

                $('.sprout-poster img', $videoContainer).attr('src', posterFrame);
                $('.sprout-title', $videoContainer).text(videoTitle);
                if (vidTag == "crop-protection-page" || vidTag == "crop-lab-page" || vidTag == "avicta-completec-module" ||
					vidTag == "mary-dell-chilton" || vidTag == "agriedge-excelsior-page" || vidTag == "vibrance-module-page" || vidTag == "ethanol-producer-page") {
                    $('.sprout-video', $videoContainer).attr('data-title', videoTitle);
                    $('#sprout-title-description').remove();
                    $('#sproutvideo').removeClass('col-sm-8 col-md-9');
                    $('#sproutvideo').addClass('col-sm-12 col-md-12');
                    $('source', $videoContainer).attr('src', videoSrc);
                    $('video', $videoContainer).trigger("load");
                }
                else if (vidTag == "quilt-xcel-module" || vidTag == "trivapro-module-page") {
                    $('.sprout-video', $videoContainer).attr('data-title', videoTitle);
                    $('.sprout-title', $videoContainer).text(videoTitle).hide();
                    $('.sprout-description', $videoContainer).text(videoDesc).hide();
                    $('source', $videoContainer).attr('src', videoSrc);
                    $('video', $videoContainer).trigger("load");
                }

                else if (vidTag == "agrisure-artesian-page") {
                    $('.sprout-video', $videoContainer).attr('data-title', videoTitle);
                    $('.sprout-title', $videoContainer).text(videoTitle);
                    $('.sprout-title').css("padding-left", "12px");
                    $('.sprout-description', $videoContainer).text(videoDesc).hide();
                    $('source', $videoContainer).attr('src', videoSrc);
                    $('video', $videoContainer).trigger("load");
                }
                else {
                    $('.sprout-title', $videoContainer).text(videoTitle);
                    if (videoDesc !== null) {
                        $('.sprout-description', $videoContainer).html(videoDesc);
                    } else {
                        $('.sprout-description', $videoContainer).text('');
                    }
                    $('.sprout-video', $videoContainer).attr('data-id', videoID);
                    $('.sprout-video', $videoContainer).attr('data-title', videoTitle);
                    $('source', $videoContainer).attr('src', videoSrc);
                    $('video', $videoContainer).trigger("load");
                }

                if (v.total > 1) {
                    // Multiple videos
                    $videoContainer.addClass('multi');
                    var videoHeight = $('.sprout-video', $videoContainer).height(),
						thumbContWidth = v.total * 160,
						thumbCont = $('<div id="sprout-thumb-container" />'),
						thumbCount = v.videos.length,
						thumbOuter = $('<div class="sprout-thumb-outer" />');

                    if (w <= 992) {
                        var thumbInner = $('<div style="width:' + thumbContWidth + 'px;" class="sprout-thumb-inner" />');
                    }
                    else if (vidTag == "agriedge-excelsior-page") {
                        var thumbInner = $('<div style="height:286px;" class="sprout-thumb-inner" />');
                    }
                    else if (vidTag == "enogen-grower-page") {

                        var thumbInner = $('<div style=height:333px;" class="sprout-thumb-inner" />');
                    }
                    else if (vidTag == "ethanol-producer-page") {

                        var thumbInner = $('<div style=height:217px;" class="sprout-thumb-inner" />');
                    }
                    else if (vidTag == "trivapro-module-page") {

                        var thumbInner = $('<div style=height:361px;" class="sprout-thumb-inner" />');
                    }
                    else {
                        var thumbInner = $('<div style="height:' + videoHeight + 'px;" class="sprout-thumb-inner" />');
                    }

                    thumbOuter.append(thumbInner);
                    thumbCont.append(thumbOuter);

                    $.each(v.videos, function (key, val) {
                        $('.sprout-thumb-inner', thumbCont).append('<div class="sprout-thumb" data-id="' + val.id + '" data-title="' + val.title + '" data-description="' + val.description + '" data-video="' + val.assets.videos['720p'] + '" data-poster="' + val.assets.poster_frames[val.assets.poster_frames.length - 1] + '"><img src="' + val.assets.poster_frames[val.assets.poster_frames.length - 1] + '" /><div class="sprout-details"><p>' + val.title + '</p></div></div>');
                    });

                    $('.sprout-video', $videoContainer).after(thumbCont);

                    if (videoString != null && videoString != undefined && !isNaN(videoString)) {
                        $('.sprout-thumb:eq(' + videoString + ')').addClass('active');
                    } else {
                        $('.sprout-thumb').first().addClass('active');
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            }
        });
    });

    $('.sprout-video').click(function () {
        var video = $('video', this).get(0),
			videoHeight = $('.sprout-poster', this).height(),
			videoID = $(this).attr('data-id'),
			videoTitle = $(this).attr('data-title');

        $(this).height(videoHeight);

        if (video.paused) {
            $('.sprout-poster', this).hide();
            video.play();
        } else {
            video.pause();
        }

        video.onplay = function () {
            dataLayer.push({
                event: 'gaEvent',
                gaEventCategory: 'Video',
                gaEventAction: 'Play',
                gaEventLabel: videoTitle
            });
        }

        video.onpause = function () {
            var vidTime = video.currentTime,
				vidDuration = video.duration;

            dataLayer.push({
                event: 'gaEvent',
                gaEventCategory: 'Video',
                gaEventAction: 'Pause - ' + formatTime(vidTime) + ' / ' + formatTime(vidDuration),
                gaEventLabel: videoTitle
            });
        }

        video.onended = function () {
            dataLayer.push({
                event: 'gaEvent',
                gaEventCategory: 'Video',
                gaEventAction: 'Finished',
                gaEventLabel: videoTitle
            });
        }
    });

    $('body').on('click', '.sprout-thumb', function () {
        var $this = $(this),
			$videoContainer = $this.closest('.sprout-container'),
			videoID = $this.attr('data-id'),
			videoTitle = $this.attr('data-title'),
			videoDesc = $this.attr('data-description'),
			videoURL = $this.attr('data-video'),
			videoPoster = $this.attr('data-poster');

        dataLayer.push({
            event: 'gaEvent',
            gaEventCategory: 'Video',
            gaEventAction: 'Loaded',
            gaEventLabel: videoTitle
        });

        $('.sprout-thumb').removeClass('active');
        $(this).addClass('active');

        $('.sprout-poster img', $videoContainer).attr('src', videoPoster);
        $('.sprout-poster', $videoContainer).show();
        $('.sprout-title', $videoContainer).text(videoTitle);
        if (videoDesc !== 'null') {
            $('.sprout-description', $videoContainer).html(videoDesc);
        } else {
            $('.sprout-description', $videoContainer).text('');
        }
        $('.sprout-video', $videoContainer).attr('data-title', videoTitle);
        $('.sprout-video', $videoContainer).attr('data-id', videoID);
        $('source', $videoContainer).attr('src', videoURL);
        $('video', $videoContainer).trigger("load");
    });

    $(window).resize(function () {
        getWindowWidth();

        $('.sprout-container').each(function () {
            var videoHeight = $('.sprout-video', this).height(),
				thumbContWidth = $('.sprout-thumb', this).length * 160;

            if (w <= 992) {
                $('.sprout-thumb-inner', this).width(thumbContWidth);
                $('.sprout-thumb-inner', this).height('');
            } else {
                $('.sprout-thumb-inner', this).width('');
                $('.sprout-thumb-inner', this).height(videoHeight);
            }
        });
    });

});