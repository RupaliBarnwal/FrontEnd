
import { useEffect, useState } from "react";
import LiveText from "./LiveText";


export default function FetchApi() {
    const [apidata, setapidata] = useState("");
    useEffect(() => {
      fetchData()
    },[]);
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsondata = await data.json();
      console.log(jsondata);
      jsondata.map((data) => {
        console.log(data.name);
      });
    };
  
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
  
        <LiveText />
      </div>
    );
  }