import React, { useState } from "react";

export const TimeTracker = () => {

    const [activityList, setActivityList] = useState([{
        category: "EDA Work",
        description: "Full time job",
        from: "2020-09-04T8:00 ",
        till: "2020-09-04T13:00 ",
        diff: "8hr",
    }]);

    const addActivity = (e) => {
        e.preventDefault();
        const from = new Date(String(e.target[2].value)).getTime();
        const till = new Date(String(e.target[3].value)).getTime();
        const diffMin = Math.round((till - from)/(60*1000));
        const newActivity = {
            category: e.target[0].value,
            description: e.target[1].value,
            from: Date(from),
            till: Date(till),
            diff: `${diffMin}min`,
        }
        setActivityList(activityList.concat(newActivity));
    }

  return (
    <div className="timetracker">
      <div>
        <h3>Time Tracker</h3>
        <form onSubmit={addActivity}>
          <label htmlFor="category">Category</label>
          <select name="category">
            <option>EDA Work</option>
            <option>Personal Project</option>
            <option>Cooking</option>
            <option>Exercise</option>
            <option>Entertainment</option>
          </select>
          <label htmlFor="description">Description</label>
          <input name="description" type="text" />
          <div className="input_wrapper">
            <label htmlFor="from">
              From
              <input name="from" type="datetime-local" />
            </label>
            <label htmlFor="till">
              Till
              <input name="till" type="datetime-local"/>
            </label>
          </div>
          <button type="submit">Add Activity</button>
        </form>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>From</th>
                <th>Till</th>
                <th>Difference</th>
              </tr>
            </thead>
            <tbody>
                {
                    activityList.map(activity => (
                        <tr>
                            <td>{activity.category}</td>
                            <td>{activity.description}</td>
                            <td>{activity.from}</td>
                            <td>{activity.till}</td>
                            <td>{activity.diff}</td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
