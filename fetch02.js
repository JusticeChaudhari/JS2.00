async function fetch02(){
    const result = await fetch('https://dummy.restapiexample.com/api/v1/employees')
    const process =  await result.json();
    console.log(process);
}
fetch02();