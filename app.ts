class HelloWorld
{
    constructor(public displayText : string) {}

    greet()
    {
        return this.displayText;    
    }
}

let helloWorld = new HelloWorld("HelloWorld");
console.log(helloWorld.greet());
