import { useState, useEffect } from "react";
// import "./App.scss";
import "./styles.scss";

type Salary = number;

interface Person1 {
  year: number;
  fullName: string;
  isNew: boolean;
  hobbies: string[];
  salary: Salary;
}

export const GeneralInformation = () => {
  const person: Person1 = {
    year: 1991,
    fullName: "Filip Kuca",
    isNew: false,
    hobbies: ["Programming", "Boardgames", "RPG"],
    salary: 111111,
  };

  const { year, fullName, isNew, hobbies, salary } = person;

  return (
    <section>
      <div className="year">{year}</div>
      <div className="fullName">{fullName}</div>
      <div className="isNew">{isNew ? "yes" : "no"}</div>
      <div className="hobbies">
        <ul>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>
      <div className="salary">{salary}</div>
    </section>
  );
};

// Union
type Boss = "boss";
type WorkerRole = Boss | "employee" | "supervisor";
type APIState = "fetching" | "loading" | "error" | "success";
// Type
type Price = number;
// type Being = {
//   name: string;
//   lastName: string;
// }
type Customer = {
  gender: string;
  cashAmount: number;
};
// type CustomerBeing = Customer & Being;
type CustomerBeing = Customer & {
  name: string;
  lastName: string;
};

// Interface
interface Person {
  name: string;
  gender: string;
  age?: number;
}

// interface Salary {
//   salary: number;
// }

interface Shopkeeper extends Person {
  salary: number;
}

interface Animal {
  name: string;
  race: string;
}

interface Animal {
  canFly: boolean;
  canSwim: boolean;
}

// interface Animal {
//   name: string;
//   race: string;
//   canFly: boolean;
//   canSwim: boolean;
// }

export const OldGeneralInformation = () => {
  const productCost: Price = 12.99;
  const customer: CustomerBeing = {
    gender: "female",
    cashAmount: 999,
    name: "Greta",
    lastName: "Surala",
  };
  const person: Person = {
    name: "Tom",
    gender: "male",
    age: 29,
  };
  const shopkeeper: Shopkeeper = {
    name: "Tom",
    gender: "male",
    age: 29,
    salary: 1999,
  };
  const dog: Animal = {
    name: "Azor",
    race: "dog",
    canFly: false,
    canSwim: true,
  };
  console.log({
    productCost,
    customer,
    person,
    shopkeeper,
  });
};

export const ExampleComponent = () => {
  const year: number = 1991;
  const pi: number = 3.14;

  const name: string = "Filip";
  let message: string = "Hello, ";

  const isNew: boolean = false; // true

  let emptyValue: null = null;
  let notDefined1: undefined = undefined;
  // let notDefined2;

  // const person: object = {
  //   name: "Kacper",
  //   age: 32,
  // };

  const hobbies: string[] = ["RPG", "Programming", "Boardgames"];
  const secondaryData: [string, number] = ["Kacper", 32];

  enum Numbers {
    Zero,
    One,
    Two,
  }

  const favouriteNumber: Numbers = Numbers.One;

  enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue",
  }

  const favouriteColor: Color = Color.Red;

  let data: any = 42;
  data = "Hello, World!";
  // data = false;

  // const throwError = (messageToDisplay: string): never => {
  //   throw new Error(messageToDisplay);
  // };

  const logMessage = (messageToDisplay: string): void => {
    console.log(messageToDisplay);
    // throwError(data);
  };

  const onClick = (): void => {
    logMessage(data);
  };

  let userInput: unknown;
  let userName: string;

  userInput = "Hello";

  if (typeof userInput === "string") {
    userName = userInput;
    console.log(userName);
  }

  const someValue = "12312";

  const whatTypeHasSomeValue = (valueToDisplay: string) => {
    if (valueToDisplay === "1") {
      return "1";
    }

    if (valueToDisplay !== "1") {
      return 1;
    }

    return null;
  };

  whatTypeHasSomeValue(someValue);

  return (
    <section>
      <button onClick={onClick}>Display log</button>
      <div>{year}</div>
      <div>{pi}</div>
      <div>
        {message}
        {name}.
      </div>
      <div>Is new in IT: {isNew ? "yes" : "no"}</div>
      <div>
        <ul>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>
      <div>
        His second name is {secondaryData[0]} and he is {secondaryData[1]} years
        old.
      </div>
      <div>
        {favouriteColor} {favouriteNumber}
      </div>
    </section>
  );
};

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={onClick}>Increment button</button>
    </div>
  );
};

export const AddProductButton = () => {
  const onClick = () => {
    console.log("Hello, World!");
  };

  return <button onClick={onClick}>Add product</button>;
};

export const ProductsList = () => {
  const [products, setProducts] = useState(["Product 1", "Product 2"]);

  useEffect(() => {
    setTimeout(() => {
      console.log("Mounting...");
      const newProducts = ["Product 1", "Product 3", "Product 4", "Product 5"];
      setProducts(newProducts);
    }, 3000);
  });

  return (
    <div>
      <h2>My cart</h2>
      <ul>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <GeneralInformation />
      {/* <ExampleComponent /> */}
      {/* <AddProductButton /> */}
      {/* <ProductsList /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;

