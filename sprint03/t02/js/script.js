class Timer{
    constructor(title, delay, stopCount){
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }
    start(){
        console.log(`Timer ${this.title} started (delay= ${this.delay}, stopCount=${this.stopCount})`);
    }
    tick(){
        var title1 = this.title;
        var stop_counter = this.stopCount;
        setInterval(function(){
            if(stop_counter > 0){
                console.log(`Timer ${title1} Tick! | cycles left ${--stop_counter}`);
            }
        }, this.delay);
    }
    stop(){
        console.log(`Timer ${this.title} stopped`);
    }
}    
function runTimer(id, delay, counter){
    let timer = new Timer(id, delay, counter);
    timer.start();
    timer.tick();
    var inter2 = setInterval(function(){
        if(counter == timer.stopCount){
            timer.stop();
            counter  = 0;
        }
    },delay*counter);
}
runTimer("Bleep", 1000, 10);