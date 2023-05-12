
async function dummy() {
  for (let i=0;i<300;i++) {
    const p1 =  new Promise((res) => setTimeout(() => res("p" + i), 3000));
    console.log(await p1);
  }
}

function main(args) {
    dummy();
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
