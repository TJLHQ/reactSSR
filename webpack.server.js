const path=require("path");
//不让node引入的文件打包进文件里面来;
const nodeExternals=require("webpack-node-externals");
const merge=require("webpack-merge")
const config=require("./webpack.base")
const serverConfig={
    // 告诉webpack打包的文件是服务器端的文件
    target:'node',
    mode:'development',
    // 入口
    entry:'./src/server/index.js',
    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname,'build')
    },
    externals: [nodeExternals()],
    module:{
        rules:[
            {
                test:/\.css?$/,
                use:['isomorphic-style-loader',{
                    loader:'css-loader',
                    options:{
                        importLoaders:1,
                        modules:true,
                        localIdentName:'[name]_[local]_[hash:base64:5]'
                    }
                }]
            }]
    }
}
module.exports=merge(config,serverConfig)