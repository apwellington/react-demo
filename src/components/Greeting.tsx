const getSum = (a:number, b:number) => a + b;
export function Greeting({name, age=20, isMale}:{name:string, age?:number, isMale:boolean}) {
    const fName = name.toUpperCase();
    const person = {'name': fName, 'age': age};

    return (
        <>
            {isMale
                ? <h2>Hello {person.name}</h2>
                : <h3>Hello {person.name}</h3>
            }

            <p>It is {new Date().toLocaleTimeString()}</p>
            <code>{JSON.stringify(person)}</code>
            <p>Sum of 10 and 20 is {getSum(10, 20)}</p>
        </>
    );
}