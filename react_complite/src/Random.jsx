function Random(){
    let Number =Math.random() * 10;
    
    return <h1 style={{'background':'#9925'}}>Random number is: {Math.round(Number)}</h1>
}
export default Random;