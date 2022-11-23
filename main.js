myCanvas.height=window.innerHeight;
myCanvas.width=200;

const ctx=myCanvas.getContext("2d");
const car=new Car(100, 100, 30, 50);

animate();

function animate(){
    myCanvas.height=window.innerHeight;
    car.update();
    car.draw(ctx);

    requestAnimationFrame(animate);
}