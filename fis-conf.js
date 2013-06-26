fis.config.merge({
    modules : {
        parser : {
            md : 'marked'
        }
    },
    roadmap : {
        ext : {
            md : 'html'
        },
        path : [
            {
                reg : 'map.json',
                release : '/config/map.json'
            },
            {
                reg : /^\/(widget\/.*\.tpl)/i,
                isMod : true,
                url : '$1',
                release : '/template/$1'
            },
            {
                reg : /^\/(widget\/.*\.(?:js|css))/i,
                isMod : true,
                release : '/static/$1'
            },
            {
                reg : '**.tpl',
                release : '/template$&'
            },
            {
                reg : '**.md',
                release : '/template$&'
            },
            {
                reg : '**.php'
            },
            {
                reg : 'plugin/**'
            },
            {
                reg : /^\/(.*)$/,
                release : '/static/$1'
            }
        ]
    },
    settings : {
        postprocessor : {
            jswrapper : {
                type : 'amd'
            }
        }
    },
    pack : {
        'pkg/aio.js' : [
            'lib/js/mod.js',
            'lib/js/**.js',
            '**.js'
        ],
        'pkg/aio.css' : [
            'lib/css/bootstrap.css',
            'lib/css/bootstrap-responsive.css',
            'lib/css/style.css',
            'lib/css/**.css',
            '**.css'
        ]
    },
    deploy : {
        rd : {
			receiver : 'http://zhangyunlong.fe.baidu.com/receiver.php',
            from : '/static',
            to : '/home/zhangyunlong/public_html/tmp/'
        }
    }
});