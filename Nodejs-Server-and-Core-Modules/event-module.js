const EmitterEvent = require('events')
const emitter = new EmitterEvent()

emitter.on('bellRing', (period)=>{
    console.log(`we need to run after 2 sec because ${period}`);
})

setTimeout(() => {
    emitter.emit('bellRing', 'second period done')
}, 2000);