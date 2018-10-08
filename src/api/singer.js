import {jsonp, SINGER_OPTIONS} from './config'

export function getSingerList () {
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    const data = {
        'comm': {
            'ct': 24,
            'cv': 10000
        },
        'singerList': {
            'module': 'Music.SingerListServer',
            'method': 'get_singer_list',
            'param': {
                'area': -100,
                'sex': -100,
                'genre': -100,
                'index': -100,
                'sin': 0,
                'cur_page': 1
            }
        }
    }

    const param = {
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0,
        data: JSON.stringify(data)
    }
    return jsonp(url, param, SINGER_OPTIONS)
}
