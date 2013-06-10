fis.config.merge({
    roadmap : {
        ext : {
            md : 'html'
        },
        path : [
            {
                reg : 'comp/**.js',
                isMod : true
            }
        ]
    },
    modules : {
        parser : {
            md : 'marked'
        }
    },
    settings : {
        postprocessor : {
            jswrapper : {
                type : 'amd'
            }
        }
    }
});