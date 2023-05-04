import React, { useState } from "react";
import { validate } from "./Validation";


export default function Activity(props) {
    const [activityData, setactivityData] = useState({
        activityName: "",
        difficulty: "",
        duration: "",
        season: ""
    });

    const { errors, setErrors } = useState({
        activityName: "",
        difficulty: "",
        duration: "",
        season: ""
    });

    const handleChange = (e) => {
        setactivityData({
            ...activityData,
            [e.target.name]: e.target.value
        });
        // setErrors(validate({
        //     ...activityData,
        //     [e.target.name]: e.target.value
        // }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addActivity(activityData);
    };
    const handleDifficulty = (e) => {
        setactivityData({
            ...activityData,
            difficulty: e.target.value
        });
    };
    const handleSeason = (e) => {
        setactivityData({
            ...activityData,
            season: e.target.value
        });
    };

  return (
    <>
        <form>
            <label>
                Name:
                <input
                    type="text"
                    name="activityName"
                    value={activityData.name}
                    onChange={handleChange} 
                />
            </label>
            {/* <p>{errors.activityName}</p> */}
            <select onChange={handleDifficulty}>
                <option value="difficulty" disabled="disabled">difficulty</option>
                <option value="1">1 - Very Easy</option>
                <option value="2">2 - Easy</option>
                <option value="3">3 - Medium</option>
                <option value="4">4 - Hard</option>
                <option value="5">5 - Very Hard</option>
            </select>
            {/* <p>{errors.difficulty}</p> */}
            <label>
                Duration:
                <input
                    type="text"
                    name="duration"
                    value={activityData.duration}
                    onChange={handleChange}
                />
            </label>
            {/* <p>{errors.duration}</p> */}
            <select onChange={handleSeason}>
                <option value="season" disabled="disabled">Season</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
            </select>
            {/* <p>{errors.season}</p> */}
            <button type="submit" onClick={handleSubmit}>Create Activity</button>
            

        </form>
    </>
  );
}