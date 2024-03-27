import React from 'react';
import './css/assignmentPage.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  const month = monthNames[new Date().getMonth()];


function AssignmentsPage() {
  const assignments = [
    { id: 1, name: 'Operation System', code: 'CA4', start: 'Thursday, 22 February 2024', due: 'Thursday, 22 March 2024' },
    { id: 2, name: 'Mathematics', code: 'CA3', start: 'Friday, 22 February 2024', due: 'Monday, 22 March 2024' },
    { id: 3, name: 'Data Structure', code: 'CA2', start: 'Saturday, 22 February 2024', due: 'Tuesday, 22 March 2024' },
    { id: 4, name: 'Algorithm', code: 'CA1', start: 'Sunday, 22 February 2024', due: 'Wednesday, 22 March 2024' },
    { id: 5, name: 'Software Engineering', code: 'CA5', start: 'Monday, 22 February 2024', due: 'Thursday, 22 March 2024'},
    { id: 6, name: 'Operation System', code: 'CA4', start: 'Thursday, 22 February 2024', due: 'Thursday, 22 March 2024' },
    
  ];

  return (
    <div className="assignments-container">
      <head>
        {}
      </head>
      <body>

        <div className="big-header">
          <h1>Upcoming Assignments</h1>
        </div>
        <div className="assignment-header">
          <h1 >{month}</h1>
        </div>
        {assignments.map((assignment, index) => (
          <div key={assignment.id} className="assignment-item" style={{ borderLeftColor: someFunctionToDetermineColor(index) }}>
            <h2>{assignment.name +" - " + assignment.code}</h2>
            <div className="dates">
              <div className="date-block start-date">
                <strong>Start date</strong>
                <p>{assignment.start}</p>
              </div>
              <div className="date-block due-date">
                <strong>Due date</strong>
                <p>{assignment.due}</p>
              </div>
            </div>
          </div>
        ))}
      </body>
    </div>
  );
}

function someFunctionToDetermineColor(index) {
  const colors = ['green', 'blue', 'purple', 'pink']; 
  return colors[index % colors.length];
}

export default AssignmentsPage;
    
