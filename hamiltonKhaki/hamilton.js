//시계 작동 함수

// var time = new Date()
// var hour = time.getHours()
// var minute = time.getMinutes()
// var second = time.getSeconds()

// alert(hour + "시" + minute + "분" + second + "초")

var time = new Date()
var second = time.getSeconds() / 60 * 360
var minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 * 6 
var hour = time.getHours() / 12 * 360 + time.getMinutes() / 60 * 30

//여기서 중요한 점은, 초침이 움직인 만큼 분침이 추가로 움직이고, 같은 원리로 시침에도 추가되는 것.
//1초당 분침은 '현재 초'/10 만큼, 시침은 '현재 분'/2 도만큼 더 움직인다.
//10 = 6도 / 60 & 2 = 30도 / 60
//아래서부터는 키프레임을 통한 에니메이션 제작!

animation = [
    "@keyframes secondHand{from{transform: rotate(" +second+ "deg);}to{transform:rotate(" +(second + 360)+"deg);}} ",
    "@keyframes minuteHand{from{transform: rotate(" +minute+ "deg);}to{transform:rotate(" +(minute + 360)+"deg);}} ",
    "@keyframes hourHand{from{transform: rotate(" +hour+ "deg);}to{transform:rotate(" +(hour + 360)+"deg);}} "
].join("")

document.querySelector('#clockAnimate').innerHTML = animation


//현재 시간에 따른 나이트 모드 
//시간의 경우 객체 생성 및 객체 메소드를 통하여 구현

var nightModeTime = new Date()
nightModeHour = nightModeTime.getHours()

if (nightModeHour>19 || nightModeHour<7){

    var pathList = document.querySelectorAll('path')
    var i = 0
    while (i < pathList.length) {
        pathList[i].style.fill='black'
        pathList[i].style.stroke='white'
        i = i+1
    }
    
    var lineList = document.querySelectorAll('line')
    var i = 0
    while (i < lineList.length) {
        lineList[i].style.fill='black'
        lineList[i].style.stroke='white'
        i = i+1
    }
    
    var rectList = document.querySelectorAll('rect')
    var i = 0
    while (i < rectList.length) {
        rectList[i].style.fill='black'
        rectList[i].style.stroke='white'
        i = i+1
    }
    
    document.querySelector('circle').style.fill='black'
    document.querySelector('circle').style.stroke='white'
    document.querySelector('body').style.backgroundColor='black'
    
    var nightList = document.getElementsByClassName('nightGlow')
    var i = 0
    while (i<nightList.length) {
        nightList[i].style.fill='#BFFF00'
        i=i+1
    }

}
else {

}