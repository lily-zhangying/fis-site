#API

## Configure

~~~bash
	# create fis config file
	$ vim path/to/project/fis-conf.js
~~~

~~~javascript

	fis.config.merge({    //merge user settings
	//using namespace, it can be omitted.
	namespace : 'photo',
	//configure directory and release specification.
	roadmap : {
	    ext : {
	        //all the less files will be compiled into css files.
	        less : 'css'
	    },
	    domain : {
	        //add domain to all js files.
	        '*.js' : 'http://img.baidu.com'
	    },
	    path : [    //configure directory specification.
	        {
	            //all the files in "/test/" directory
	            reg : /^\/test\//i,
	            //will not be released
	            release : false
	        },
	        {
	            //all the js & css files in "/widget/" directory
	            reg : /^\/widget\/.*\.(js|css)$/i,
	            //is modular file
	            isMod : true,
	            //release to "path/to/output/static/photo/..."
	            release : '/static/${namespace}$&'
	        },
	        {
	            //all the tpl files in "/widget/" directory
	            reg : /^\/widget\/(.*\.tpl)$/i,
	            //is modular file
	            isMod : true,
	            //resource locator is "widget/photo/..."
	            url : 'widget/${namespace}/$1',
	            //release to "path/to/output/template/widget/photo/..."
	            release : '/template/widget/${namespace}/$1'
	        },
	        {
	            //all the files in "/plugin/" directory
	            //will be released to "path/to/output/plugin/..."
	            reg : /^\/plugin\//i
	        },
	        {
	            //other tpl files
	            reg : /^\/.+\.tpl$/i,
	            //release to "path/to/output/template/photo/..."
	            release : '/template/${namespace}$&'
	        },
	        {
	            //photo-map.json
	            reg : /^\/photo-map\.json$/i,
	            //release to "path/to/output/config/photo-map.json"
	            release : '/config$&'
	        },
	        {
	            //any other files
	            reg : /^.*$/,
	            //release to "path/to/output/static/photo/..."
	            release : '/static/${namespace}$&'
	        }
	    ]
	},
	deploy : {
	    'rd-test' : { //a deploy example
	        //remote receiver
	        receiver : 'http://zhangyunlong.fe.baidu.com/receiver.php',
	        //post all the released files to the reciever
	        //and save them to "/home/zhangyunlong/public_html/"
	        to : '/home/zhangyunlong/public_html/'
	    }
	},
	modules : { //using plugins
	    parser : {
	        //parse less file with "fis-parser-less" plugin
	        //fis-parser-less is not built-in
	        //install it by "npm install -g fis-parser-less"
	        less : 'less'
	    }
	},
	settings : { //plugin settings
	    optimizer : {
	        //configure uglify-js plugin
	        //@see https://npmjs.org/package/uglify-js
	        'uglify-js' : {
	            booleans : true,
	            if_return : false,
	        }
	    }
	}
	});
~~~

##Usage
	fis <command>

##Commands
*	release     build and deploy your project
*	install     install components and demos
*	server      launch a php-cgi server

##Options      
*	-h, --help     output usage information
*	-v, --version  output the version number
*	--no-color     disable colored output