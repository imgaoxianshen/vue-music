module.exports = {
    proxy: {
        '/recommend': {
            target: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1600102725&uin=690220607&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1538185995858',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^recommend': ''
            }
        }
    }
}