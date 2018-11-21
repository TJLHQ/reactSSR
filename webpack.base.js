module.exports={
    module:{
        rules:[{
            test:/\.js?$/,
            loader:'babel-loader', //用loader编译
            exclude:'/node_modules',//排除
            options:{
                //stage-0根据最新的es来解析成es5，env根据环境来适配
                presets:['react','stage-0',['env',{
                    // 打包的时候会兼容所有主流浏览器的最后的二个版本
                    targets:{
                        browsers:['last 2 versions']
                    }
                }]]
            }
        }]
    }
}