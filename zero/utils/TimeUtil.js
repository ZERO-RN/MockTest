/**
 * 将秒转换成00:00:00的形式
 */
const TimerUtil = {
    formatSec: (sec) => {

        let hours;
        let mins;

        mins = parseInt(sec / 60);

        sec = sec % 60;

        hours = parseInt(mins / 60);

        mins = mins % 60;

        if (hours === 0) {
            return `${add0(mins)}:${add0(sec)}`;
        } else {
            return `${add0(hours)}:${add0(mins)}:${add0(sec)}`;
        }
    }
};
/**
 * 补0
 * @param num
 * @returns {*}
 */
const add0 = (num) => {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num
    }
}


/**
 * Created by zerowolf Date: 2018/6/14 Time: 上午11:42
 * @param compareTime   格式为'yyyy-MM-dd'
 * @return {boolean}    适用于优惠券的有效日期 , 当前日期大于等于优惠券有效起始日期则说明优惠券可用 , true
 */
const currentTimeIsBigger = (compareTime) => {
    // date1 = date1 ? date1.format('YYYY-MM-DD') : '1970-01-01';
    // date2 = date2 ? date2.format('YYYY-MM-DD') : '2099-12-31';
    const res = Date.parse(formatCurrentTime()) - Date.parse(compareTime);
    // return res;

    if (res >= 0) {
        return true;
    } else {
        return false
    }
};

/**
 *将当前时间转换成自定义的格式
 * @param format 默认'YYYY-MM-dd'
 * @returns {*}
 */
const formatCurrentTime = (format) => {
    if (!format) {
        format = 'YYYY-MM-dd';
    }
    let newDate = new Date();
    var date = {
        "M+": newDate.getMonth() + 1,
        "d+": newDate.getDate(),
        "h+": newDate.getHours(),
        "m+": newDate.getMinutes(),
        "s+": newDate.getSeconds(),
        "q+": Math.floor((newDate.getMonth() + 3) / 3),
        "S+": newDate.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for(var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}

export {
    formatCurrentTime,
    currentTimeIsBigger
}

export default TimerUtil;


/*

Date.prototype.format = function(format) {
    console.log(this);
    console.log(Date.now());
    console.log(new Date());
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}*/
