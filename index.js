var TIMEOUT_IN_SECS = 5 * 60
var TEMPLATE = '<h1><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'

// adds HTML tag to current page
var timerContainer = document.createElement('div')
timerContainer.setAttribute("style", "position: fixed;height: 100 px;width: 160px;background-color: #F5F5F5;\
                            border:3px solid #BADA55;text-align: center;border-radius: 40px;z-index: 1000;")
var bodyTag = document.body
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
timerContainer.innerHTML = TEMPLATE

function getTimestampInSecs() {
  var timestampInMilliseconds = new Date().getTime()
  return Math.round(timestampInMilliseconds / 1000)
}

function padZero(number) {
  return ("00" + String(number)).slice(-2);
}

var timestampOnStart = getTimestampInSecs()

function displayTimer() {
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)
  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;
  document.getElementById('timer-minutes').innerHTML = padZero(minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)
}
setInterval(displayTimer, 300);

var motivationMsg = [
  "Количество удачных событий на вашем пути, зависит от вашего желания действовать.",
  "Никогда не рассказывай людям о своих планах. Просто бери и делай. Пусть они удивляются от результатов, а не от болтовни.",
  "Дисциплина — это решение делать то, чего очень не хочется делать, чтобы достичь того, чего очень хочется достичь.",
  "Поначалу вы формируете привычки, а затем привычки формируют вас.",
  "Если ты не решишься на это сегодня, завтра будет таким же, как и вчера."
];

function alertMsg() {
  alert(motivationMsg[Math.floor(Math.random() * motivationMsg.length)]);
  setTimeout(alertMsg, 30000);
};

setTimeout(alertMsg, 300000);