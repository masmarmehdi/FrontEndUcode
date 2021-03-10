function getFormattedDate(dateObject) {
    var day = dateObject.getDate(), month = dateObject.getMonth()+1, hours = dateObject.getHours(), minutes = dateObject.getMinutes();
    if (day < 10) {
        day = `0${dateObject.getDate()}`;
    }
    var week =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (hours < 10) {
        hours = `0${dateObject.getHours()}`;
    }
    if (minutes < 10) {
        minutes = `0${dateObject.getMinutes()}`;
    }
    var result = `${day}.${month}.${dateObject.getFullYear()} ${hours}.${minutes} ${week[dateObject.getDay()]}`;
    return result;
}
