function order(func) {
    console.log("Order Placed");
    func();
}
function prepare(func) {
    console.log("Food prepared");
    func();
}
function deliver() {
    console.log("Food delivered");
}

order(()=> {
    prepare(()=>{
        deliver()
    })
});