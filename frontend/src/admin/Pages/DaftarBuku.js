import React, { useEffect, useState, useContext } from "react";
import '../Pages/Style/calendar.css'
import axios from "axios";
import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

function checkIfNextDay(nextDay) {
  var tommorow = new Date();
  tommorow.setDate(tommorow.getDate() + 1);
  var tommorowDate = formatDate(tommorow);
  console.log(nextDay, tommorowDate);
  if (nextDay === tommorowDate) {
    return true;
  } else {
    return false;
  }
}

function formatDate(date, checkNextDay = false) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  var convertedDate = [year, month, day].join("-");
  if (checkNextDay === true) {
    if (checkIfNextDay(convertedDate)) {
      return (
        <span
          style={{
            color: "green",
          }}
        >
          Tommorow
        </span>
      );
    }
  }
  return convertedDate;
}

function DaftarBuku() {
  const [eventsData, setEventsData] = useState();
  const [categories, setCategory] = useState();
  const [newEventSubmitted, setNewEventSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/book/getAllBook", { withCredentials: true })
      .then((res) => {
        if (res.data != null) {
          setNewEventSubmitted(false);
          setEventsData(res.data);
        }
      });

      axios
      .get("http://localhost:8000/kategori/getAllKategori", { withCredentials: true })
      .then((res) => {
        if (res.data != null) {
          setCategory(res.data);
        }
      });
  }, [newEventSubmitted]);

  const addNewEvent = (eventData) => {
    axios
      .post(
        "http://localhost:8000/book/add",
        eventData,
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data === "success") {
          setNewEventSubmitted(true);
        }
      });
  };

  const CalendarWrap = (props) => {
    return (
      <div className="calendarWrap">
        <div className="calendarHeader">
          <h1>Book</h1>
        </div>
        <div className="calendarColumns">{props.children}</div>
      </div>
    );
  };

  const NewEvent = () => {
    const [newEventData, setNewEventData] = useState({
      judul: "",
      penulis:"",
      KategoriID: 1,
      harga: 0,
      foto: ""
    });

    return (
      <div className="newEventWrap">
        <h3>Add new book</h3>
        <div className="newEventRowWrap">
          <div className="newEventGroup">
            <div className="newEventDate">
              <button className="newEventDateButton">
                <TitleRoundedIcon />
              </button>
              <div className="newEventDateContainer">
                <label className="newEventDateLabel">Title</label>
                <input
                  type="text"
                  className="newEventDateInput"
                  value={newEventData.title}
                  onChange={(e) => {
                    setNewEventData({
                      ...newEventData,
                      judul: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div className="newEventDate">
              <button className="newEventDateButton">
                <TitleRoundedIcon />
              </button>
              <div className="newEventDateContainer">
                <label className="newEventDateLabel">Penulis</label>
                <input
                  type="text"
                  className="newEventDateInput"
                  value={newEventData.penulis}
                  onChange={(e) => {
                    setNewEventData({
                      ...newEventData,
                      penulis: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="newEventDate">
              <button className="newEventDateButton">
                <TitleRoundedIcon />
              </button>
              <div className="newEventDateContainer">
                <label className="newEventDateLabel">Kategori</label>
                <select id="cars" className="newEventDateInput" onChange={(e) => {
                    setNewEventData({
                      ...newEventData,
                      KategoriID: e.target.value,
                    });
                  }}>
                  {categories?.map(item =>{
                    return <option value={item.id}>{item.namaKat}</option>
                  })}
                </select>
              </div>
            </div>
            <div className="newEventDate">
              <button className="newEventDateButton">
                <TitleRoundedIcon />
              </button>
              <div className="newEventDateContainer">
                <label className="newEventDateLabel">Harga</label>
                <input
                  type="number"
                  className="newEventDateInput"
                  value={newEventData.harga}
                  onChange={(e) => {
                    setNewEventData({
                      ...newEventData,
                      harga: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="newEventGroup">
          <button
            className="addOrder"
            onClick={() => {
              addNewEvent(newEventData);
              setNewEventData({
                foto: ""
              });
            }}
          >
            <AddCircleOutlineRoundedIcon />
            <span className="addOrderText">Create</span>
          </button>
        </div>
      </div>
    );
  };

  const EventsTable = () => {
    const [filterOrders, setFilterOrders] = useState("Current");

    const sortedEventsData = eventsData?.sort((a, b) => {
      return new Date(b.deadlineDate) - new Date(a.deadlineDate);
    });
    const upToDateEventsData = [];
    const oldDateEventsData = [];

    sortedEventsData?.forEach((value) => {
      const dateToCompare = new Date();
      dateToCompare.setHours(0, 0, 0, 0);
      const actualDate = new Date(value.deadlineDate);
      if (actualDate >= dateToCompare) {
        upToDateEventsData.push(value);
      } else {
        oldDateEventsData.push(value);
      }
    });

    return (
      <div className="eventsTableWrap">
        <div className="orderNav calendarNav">
        </div>
        <table className="eventsTable">
          <thead>
            <tr className="eventsTableTdTh">
              <th></th>
              <th>Cover</th>
              <th>Judul</th>
              <th>Writer</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {eventsData?.map((el) => {
                return (
                  <tr className="eventsTableTdTr" key={el.id}>
                    <td className="eventsTableIcon">
                      <CheckCircleOutlineRoundedIcon />
                    </td>
                    <td> <img src={el.foto} alt="Image"/> </td>
                    <td>{el.judul}</td>
                    <td>
                      {el.penulis}
                    </td>
                    <td> {el.namaKat}</td>
                    <td>{el.harga.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                    </td>
                  </tr>
                );
              })
              .reverse()}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bodyWrap">
      <CalendarWrap>
        <NewEvent />
        <EventsTable />
      </CalendarWrap>
    </div>
  );
}

export default DaftarBuku;