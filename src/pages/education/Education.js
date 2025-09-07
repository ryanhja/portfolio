import React from "react";

const Education = () => {
  return (
    <div className="container education">
      <h1>EDUCATIONS</h1>
      <div className="education-list">
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <p>2021-2023</p>
          <p>Master’s Degree in Computer Modeling and Engineering</p>
          <p>EMIT Fianarantsoa, Madagascar</p>
          <p>
            Relevant Courses: Probability and Statistics, Artificial
            Intelligence Fundamentals, Machine Learning, Deep Learning,
            Multi-Agent Systems, Data Analysis, Data Warehousing, Decision
            Support Systems.
          </p>
        </div>
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <p>2017-2020</p>
          <p>
            Bachelor’s Degree in Internet and Intranet Application Development
          </p>
          <p>EMIT Fianarantsoa, Madagascar</p>
          <p>
            Relevant Courses: Data Structures and Algorithms, Object-Oriented
            Programming, Applied Mathematics for Computing, Web Application
            Development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
