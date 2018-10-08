import OriginJsonp from 'jsonp'

export const commonParams = {
    g_tk: 5381,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    _: 1538125149051
}

export function jsonp (url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    return new Promise((resolve, reject) => {
        OriginJsonp(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

export function param (data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += '&' + k + '=' + encodeURIComponent(value)
    }
    return url ? url.substring(1) : ''
}

export const SINGER_OPTIONS = {
    param: 'callback'
}

export const ERR_OK = 0

export const RECOMMEND_URL = "/recommend"

export const SING_URL = "https://u.y.qq.com/cgi-bin/musicu.fcg"
