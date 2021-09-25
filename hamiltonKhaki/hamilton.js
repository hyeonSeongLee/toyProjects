var nightModeTime = new Date()
nightModeHour = nightModeTime.getHours()

if (nightModeHour>19 && nightModeHour<7){

}
else {

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