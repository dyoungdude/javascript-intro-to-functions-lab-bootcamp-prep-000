function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log('HELLO')
    function spy(spyOn){
      spyOn(logShout)
      return spyOn.toLowerCase()
    }
  return string.toUpperCase()
}

function logWhisper(string){
  console.log('hello')
    function spy(spyOn){
      spyOn(logWhisper)
      return spyOn.toUpperCase()
    }
  return string.toLowerCase()
}

function sayHiToGrandma(string){
  if(sayHiToGrandma === 'hello') {
    console.log("I can't hear you!")
  }
  else if(sayHiToGrandma === 'HELLO'){
    console.log('YES INDEED!')
  }
  else(sayHiToGrandma === 'I love you, Grandma.') {
    console.log('I love you, too.')
  }
}
