$(function(){
  function formatTime(date) {
    const formatNumber = n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    var s1 = '2019-10-04';
    s1 = new Date(s1.replace(/-/g, "/"));
    var days = date.getTime() - s1.getTime();
    var time = parseInt(days / (1000 * 60 * 60 * 24));

    return {day, hour, minute, second, time}
  }

  function timer() {
    clearInterval(flag)
    var flag = setInterval(() => {
      const {day, hour, minute, second, time} = formatTime(new Date())
      $('#days').text(day)
      $('#hours').text(hour)
      $('#minutes').text(minute)
      $('#seconds').text(second)
      $('#time').text(time)
    }, 1000)
  }
    // function timer(settings){
    //     var config = {
    //         endDate: '2050-12-31 10:00',
    //         timeZone: 'Europe/Dublin',
    //         hours: $('#hours'),
    //         minutes: $('#minutes'),
    //         seconds: $('#seconds'),
    //         newSubMessage: 'and should be back online in a few minutes...'
    //     };
    //     function prependZero(number){
    //         return number < 10 ? '0' + number : number;
    //     }
    //     $.extend(true, config, settings || {});
    //     var currentTime = moment();
    //     var endDate = moment.tz(config.endDate, config.timeZone);
    //     var diffTime = endDate.valueOf() - currentTime.valueOf();
    //     var duration = moment.duration(diffTime, 'milliseconds');
    //     var days = duration.days();
    //     var interval = 1000;
    //     var subMessage = $('.sub-message');
    //     var clock = $('.clock');
    //     if(diffTime < 0){
    //         endEvent(subMessage, config.newSubMessage, clock);
    //         return;
    //     }
    //     if(days > 0){
    //         $('#days').text(prependZero(days));
    //         $('.days').css('display', 'inline-block');
    //     }
    //     var intervalID = setInterval(function(){
    //         duration = moment.duration(duration - interval, 'milliseconds');
    //         var hours = duration.hours(),
    //             minutes = duration.minutes(),
    //             seconds = duration.seconds();
    //         days = duration.days();
    //         if(hours  <= 0 && minutes <= 0 && seconds  <= 0 && days <= 0){
    //             clearInterval(intervalID);
    //             endEvent(subMessage, config.newSubMessage, clock);
    //             window.location.reload();
    //         }
    //         if(days === 0){
    //             $('.days').hide();
    //         }
    //         $('#days').text(prependZero(days));
    //         config.hours.text(prependZero(hours));
    //         config.minutes.text(prependZero(minutes));
    //         config.seconds.text(prependZero(seconds));
    //     }, interval);
    // }
    // function endEvent($el, newText, hideEl){
    //     $el.text(newText);
    //     hideEl.hide();
    // }
    timer();
});
