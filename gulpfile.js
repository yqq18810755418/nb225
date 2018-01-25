var gulp  = require('gulp');
var webserver = require('gulp-webserver');
var fs =require('fs');
var path =require('path');


gulp.task('min',function(){
	gulp.src('.')
	    .pipe(webserver({
	    	host:'localhost',
	    	port:8080,
	    	open:true,
	    	middleware:function(req,res,next){
	    		if(req.url==='/favicon.ico'){
	    			return
	    		}
	    		if(req.url==='/imgs'){
	    			res.writeHead(200,{
	    				'access-control-allow-origin':'*'
	    			})
	    			res.end(fs.readFileSync(path.join(__dirname,'Date/imgs.json')))
	    		}else{
	    			next()
	    		}
	    	}
	    }))
})

gulp.task('default',['min'])