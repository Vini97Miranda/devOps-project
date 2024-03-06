import React, { ChangeEvent,useState /*,useEffect*/ } from "react";
import DatePicker from "react-datepicker";
//import DateTimePicker from 'react-datetime-picker'
import "react-datepicker/dist/react-datepicker.css";
import './css/style.css'

function SubmitStu() {
    
    const [subject, setSubject] = useState("---","---");
    const [stuClass, setstuClass] = useState("---","---");
    const [textarea, setTextarea] = useState("Sample text");
    const [fileList, setFileList] = useState([]);
    const files = fileList ? [...fileList] : [];
    const [rmButton,setrmButton] = useState(null);
    
    const handleSubj = (event) => {
        setSubject(event.target.value);
    }
    const handleTextarea = (event) => {
        setTextarea(event.target.value);
    }
    const handlestuClass = (event) => {
        setstuClass(event.target.value);
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
    const handleSubmit = (event) => {
        event.preventDefault();
        /*

        // Data before hashing
        // console.log(document.getElementById('username').value,document.getElementById('password').value);
        
        const user = sha256(document.getElementById('username').value).toString();
        
        // Data post hashing
        // console.log(user, password);

        const data = {
            username: user,
        };

        */      
    };


    return (
        <html>
        <body className="align">
        <div className="grid">
            <form method="POST" className="lf form" onSubmit={handleSubmit}>
            <i class="icon fa-solid fa-file-pen"></i>
                <h3 class="inputInstru">Choose a class</h3>
                <select class="inputInstru" value={stuClass} onChange={handlestuClass} required>
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
                <h3 class="inputInstru">Any request</h3>
                <textarea value={textarea} onChange={handleTextarea} required/>
                <h3 class="inputInstru">Submit your assignement</h3>
                <input type="file" onChange={handleFileChange} multiple />
                    <ul>
                        {files.map((file, i) => (
                        <li key={i}>
                            {file.name} - {file.size/1000} Ko 
                        </li>
                        ))}
                    </ul>
                    {rmButton}
                    <div className="form_field">
                    <button className="submitButton" type="submit">SUBMIT TO STUDENTS</button>
                </div>
            </form>
        </div>
        </body>
        </html>
    );
}

export default SubmitStu;