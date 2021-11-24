$(function () {

    var $win = $(window),
        t,
        s,
        sproutVid = {
            settings: {
                vidURL: window.location.href,
                contWidth: '',
                spVidHolder: $('.sprout-vid-holder'),
                spVidContainer: $('.svp-container'),
                spVidSrc: '',
                svhLoader: '<div class="svh-loader"><img src="videoplayer/images/sp-vid-loader.gif" alt="ajax-loader image"/></div>',
                playerID: '',
                playerType: '',
                res: '',
                playlistID: '',
                delta: 200,
                resizeID: ''

            },

            init: function () {
                t = this;
                s = t.settings;

                if (s.spVidHolder.length > 0) {
                    t.setUpPlayer();
                }
            },

            setUpPlayer: function () {
                $('.svh-loader').remove();
                s.contWidth = s.spVidHolder.width();
                s.spVidSrc = $('.svp-container').attr('data-src');

                s.res = s.spVidSrc.split('/');
                s.playlistID = s.res[1];
                s.playerID = s.res[0];
                s.playerType = s.spVidContainer.attr('data-playertype');

                var vidPlayerSingle = '<iframe class="sproutvideo-player" src="https://videos.sproutvideo.com/embed/' + s.spVidSrc + '?type=sd" width="630" height="462" frameborder="0" allowfullscreen></iframe>',
                    vidPlayerVert = '<iframe class="sproutvideo-playlist" src="https://videos.sproutvideo.com/playlist/' + s.playerID + '/' + s.playlistID + '?type=sd&layout=0&selectedcolor=000000&highlightcolor=f0eded&textcolor=55565a&dividercolor=f0eded" frameborder="0" allowfullscreen></iframe>',
                    vidPlayerHorz = '<iframe class="sproutvideo-playlist" src="https://videos.sproutvideo.com/playlist/' + s.playerID + '/' + s.playlistID + '?type=sd&layout=1&selectedcolor=000000&highlightcolor=f0eded&textcolor=55565a&dividercolor=f0eded" frameborder="0" allowfullscreen width="100%" height="100%"></iframe>';

                if (s.playerType === 'playlist') {
                    if (s.contWidth > 749) {
                        s.spVidHolder.addClass('vid-horz');
                        s.spVidHolder.append(vidPlayerVert);
                    } else {
                        s.spVidHolder.removeClass('vid-horz');
                        s.spVidHolder.append(vidPlayerHorz);
                    }
                } else if (s.playerType === 'single') {
                    s.spVidHolder.append(vidPlayerSingle);
                }
            },

            resizePlayer: function () {
                clearTimeout(s.resizeID);
                if (s.playerType === 'playlist') {
                    s.contWidth = s.spVidHolder.width();
                    if (s.contWidth < 749 && s.spVidHolder.hasClass('vid-horz')) {
                        s.spVidHolder.find('iframe').remove();
                        s.spVidHolder.append(s.svhLoader);
                        s.resizeID = setTimeout(t.resizeEnd, s.delta);
                    } else if (s.contWidth >= 750 && !s.spVidHolder.hasClass('vid-horz')) {
                        s.spVidHolder.find('iframe').remove();
                        s.spVidHolder.append(s.svhLoader);
                        s.resizeID = setTimeout(t.resizeEnd, s.delta);
                    }
                }
            },

            resizeEnd: function () {
                if (s.playerType === 'playlist') {
                    s.spVidHolder.removeAttr('style');
                    t.setUpPlayer();
                }
            }
        };

    $win.on('load', function () {
        sproutVid.init();
    });

    $win.on('resize', function () {
        sproutVid.resizePlayer();
    });
});