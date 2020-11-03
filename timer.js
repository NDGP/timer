const timer = (alarms) => {
  for (let num in alarms){
    let beepTime = Number(alarms[num])

      if (Number.isInteger(beepTime) === false){continue}
      if (beepTime < 0){continue}

  let time = beepTime * 1000
  setTimeout(() => {
    process.stdout.write('\x07')
    },time)
  }
}

var alarms = process.argv.slice(2);
timer(alarms)
