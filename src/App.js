import React, { useState, useEffect } from "react";
import { String } from "./components/String";
import { Heading } from "./components/Heading";
import { Search } from "./components/Search";
import { Add } from "./components/Add";
import { Info } from "./components/Info";
import "./App.css";

const PERSONS_PER_PAGE = 10;

function fetchPersonsSmall() {
  return fetch(
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
  ).then((response) => response.json());
}
function fetchPersonsBig() {
  return fetch(
    "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
  ).then((response) => response.json());
}

export function App(props) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);
  const [sortOptions, setSortOptions] = useState(null);
  const [search, setSearch] = useState(null);
  const [add, setAdd] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (props.choice === "ChoiceSmall") {
      fetchPersonsSmall()
        .then(setData)
        .catch(() => setData("Err"));
    }
    if (props.choice === "ChoiceBig")
      fetchPersonsBig()
        .then(setData)
        .catch(() => setData("Err"));
  }, []);

  if (data === null) {
    return "Loading...";
  }
  if (data === "Err") {
    return "Что-то пошло не так, поробуйте перезагрузить страницу";
  }
  const totalPages = Math.ceil(data.length / PERSONS_PER_PAGE);

  const filteredData = data;
  function filteredData_() {
    let newArr = filteredData.filter(
      (x) =>
        x.email.toLocaleLowerCase().includes(search) ||
        x.id.toString().includes(search) ||
        x.firstName.toLocaleLowerCase().includes(search) ||
        x.lastName.toLocaleLowerCase().includes(search) ||
        x.phone.includes(search)
    );
    setData(newArr);
  }
  const sortedData =
    sortOptions === null
      ? filteredData
      : [...filteredData].sort((a, b) => {
          const order = sortOptions.order === "asc" ? 1 : -1;
          return (
            (a[sortOptions.property] < b[sortOptions.property] ? -1 : 1) * order
          );
        });
  const persons = sortedData.slice(
    PERSONS_PER_PAGE * page,
    PERSONS_PER_PAGE * (page + 1)
  );

  function changeForvord() {
    setPage((p) => p + 1);
  }
  function changeBack() {
    setPage((p) => p - 1);
  }
  const properties = ["id", "firstName", "lastName", "email", "phone"];

  return (
    <div className="App">
      <Search
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        Click={() => filteredData_()}
      />
      <Add
        valueId={add.id}
        onChangeId={(event) =>
          setAdd({ ...add, [event.target.name]: event.target.value })
        }
        valueFirstName={add.firstName}
        onChangeFirstName={(event) =>
          setAdd({ ...add, [event.target.name]: event.target.value })
        }
        valueLastName={add.lastName}
        onChangeLastName={(event) =>
          setAdd({ ...add, [event.target.name]: event.target.value })
        }
        valueEmail={add.email}
        onChangeEmail={(event) =>
          setAdd({ ...add, [event.target.name]: event.target.value })
        }
        valuePhone={add.phone}
        onChangePhone={(event) =>
          setAdd({ ...add, [event.target.name]: event.target.value })
        }
        onChange={() => setData([add, ...data])}
        disabled={
          add.id === "" ||
          add.firstName === "" ||
          add.lastName === "" ||
          add.email === "" ||
          add.phone === ""
        }
      />
      <div className="string_block head">
        {properties.map((id) => (
          <Heading
            classNameString={"string heading row"}
            classNameLabel={"string"}
            id={id}
            setSortOptions={setSortOptions}
          />
        ))}
      </div>
      {persons.map((x) => (
        <String
          classNameStringBlock={"string_block"}
          classNameString={"string"}
          id={x.id}
          firstName={x.firstName}
          lastName={x.lastName}
          email={x.email}
          phone={x.phone}
          onClick={() => setInfo(x)}
        />
      ))}
      {info !== null && (
        <Info
          firstName={info.firstName}
          lastName={info.lastName}
          description={info.description}
          streetAddress={info.address.streetAddress}
          city={info.address.city}
          state={info.address.state}
          zip={info.address.zip}
        />
      )}
      <div className="pagination">
        {page > 0 && (
          <button className="button" onClick={() => changeBack()}>
            Назад
          </button>
        )}
        {page < totalPages - 1 && (
          <button className="button" onClick={() => changeForvord()}>
            Вперед
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
