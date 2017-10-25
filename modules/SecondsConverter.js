function secondsConvert(seconds) {
    var result = '';
    var hours = Math.floor(seconds / 3600);
    if (hours) {
        result += hours + ' godz. ';
        seconds -= hours * 3600;
    }
    var minutes = Math.floor(seconds / 60);
    if (minutes) {
        result += minutes + ' min. ';
        seconds -= minutes * 60;
    }
    if (seconds) {
        result += seconds + ' sek.';
    }
    return result.trim();
}

exports.convert = secondsConvert;