import React, { ChangeEvent,useState /*,useEffect*/ } from "react";
import DatePicker from "react-datepicker";
//import DateTimePicker from 'react-datetime-picker'
import "react-datepicker/dist/react-datepicker.css";
import './css/style.css'


function AddEvent() {
    
    const [subject, setSubject] = useState("---","---");
    const [stuClass, setstuClass] = useState("---","---");
    const [textarea, setTextarea] = useState("Sample text");
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [time, setTime] = useState("12:00");
    const [fileList, setFileList] = useState([]);
    const files = fileList ? [...fileList] : [];
    const [rmButton,setrmButton] = useState(null);
    const TimeInput = ({time}) => (
        <input
          value={time}
          onChange={(e) => handleTime(e.target.value)}
          style={{ border: "solid 1px pink" }}
        />
      );
    
    const handleSubj = (event) => {
        setSubject(event.target.value);
    }
    const handleTextarea = (event) => {
        setTextarea(event.target.value);
    }
    const handlestuClass = (event) => {
        setstuClass(event.target.value);
    }
    const handleTime = (event) => {
        setTime(event.target.value);
    }
    const removeFiles = (e) => {
        setFileList([])
        setrmButton(null)
    }
    const handleFileChange = (e) => {
        setrmButton(<button class="inputInstru" onClick={removeFiles} >Remove files</button>);
        setFileList(e.target.files);
    }
    /*
    const handleUploadClick = () => {
        if (!fileList) {
        return;
        }

        // 👇 Create new FormData object and append files
        const data = new FormData();
        files.forEach((file, i) => {
        data.append(`file-${i}`, file, file.name);
        });

        // 👇 Uploading the files using the fetch API to the server
        fetch('https://httpbin.org/post ', {
        method: 'POST',
        body: data,
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
  };
*/
    const handleSubmit = async (event) => {
        event.preventDefault();
        const classe = document.getElementById("class_select").value;
        const dates = startDate.toDateString() + " to " + endDate.toDateString();
        const time = document.getElementById("time").value;
        const data = {
            classes: classe,
            date_start: startDate,
            date_end: endDate,
            time: time.toString(),
        };
        const response = await fetch('http://localhost:8000/add_event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };


    return (
        <html>
        <body className="align">
        <div className="grid">
            <form method="POST" className="lf form" onSubmit={handleSubmit}>
            <i class="icon fa-solid fa-file-pen"></i>
                <h3 class="inputInstru">Choose a class</h3>
                <select id= "class_select"class="inputInstru" value={stuClass} onChange={handlestuClass} required>
                    <option hidden>---</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                </select>
                <h3 class="inputInstru">Choose a course</h3>
                <select class="inputInstru" value={subject} onChange={handleSubj} required>
                    <option hidden>---</option>
                    <option value="IT">IT</option>
                    <option value="Maths">Maths</option>
                    <option value="Sleep">Sleep</option>
                </select>
                <h3 class="inputInstru">Description of the assignement</h3>
                <textarea value={textarea} onChange={handleTextarea} required/>
                <h3 class="inputInstru">Additional instructions</h3>
                <input type="file" onChange={handleFileChange} multiple />
                    <ul>
                        {files.map((file, i) => (
                        <li key={i}>
                            {file.name} - {file.size/1000} Ko 
                        </li>
                        ))}
                    </ul>
                    {rmButton}
                <h3 class="inputInstru">Dates of the task</h3>
                <DatePicker
                    //showIcon
                    toggleCalendarOnIconClick
                    //showTimeInput
                    customTimeInput={<TimeInput />}
                    selected={startDate}
                    monthsShown={1}
                    isClearable={true}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    holidays={[
                        { date: "2024-08-15", holidayName: "India's Independence Day" },
                        { date: "2024-12-31", holidayName: "New Year's Eve" },
                        { date: "2024-12-25", holidayName: "Christmas" },
                        { date: "2024-01-01", holidayName: "New Year's Day" },
                        { date: "2024-11-23", holidayName: "Thanksgiving Day" },
                        { date: "2024-12-25", holidayName: "Fake holiday" },
                        { date: "2024-03-17", holidayName: "St-Patrick" },
                    ]}
                    placeholderText="Input dates for the assignement" required/>
                <h3 class="inputInstru">Type a deadline time</h3>
                <input id = "time" class="inputInstru" type="time"></input>
                <div className="form_field">
                    <button className="submitButton" type="submit">SUBMIT TO STUDENTS</button>
                </div>
            </form>
        </div>
        </body>
        </html>
    );
}

export default AddEvent;