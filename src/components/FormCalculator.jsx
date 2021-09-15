import React from 'react'
import "./components.css"
import information from "../assets/information.png"


const Form = (props) => {

  const handleInputChange = (e) => {
    props.setDatos({
        ...props.datos,
        [e.target.name] : e.target.value
    });
  };

  const selectChange =(e) => props.setOptionSearchNote(e.target.value)


    const handleSubmit = e => {
      e.preventDefault();
    };
 

  return (
    <div className="container">
      <div className="wrapper">
        <h2>{props.title}</h2>
        <form action="#" className="form" onSubmit={handleSubmit}>
          <div className="divInfo">
            <label htmlFor="">{props.firstInput}</label>
            <img src={information} alt="information" className="information" />
          </div>
          <h3>898989</h3>
          <input type="range"  name="rangeOne" min={props.minAge} max={props.maxAge} step={props.stepAge}  onChange={ handleInputChange}/>
          <div className="divInfo">
            <label htmlFor="">{props.secondInput}</label>
            <img src={information} alt="information" className="information" />
          </div>
          <select id="optionSearch" name="options" value={props.optionSearchNote} onChange={selectChange}>
              <option value="firstOption">{props.firstOption}</option>
              <option value="secondOption">{props.secondOption}</option>
            </select>         
          <div className="divInfo">
            <label htmlFor="">{props.thirdInput}</label>
            <img src={information} alt="information" className="information" />
          </div>
          <h3>15</h3>
          <input type="range" min={props.min} max={props.max} step={props.step}   name="rangeTwo" onChange={ handleInputChange}/>
        </form>
      </div>
      <div className="results">
        <div className="result">
          <p>{props.firstParagraph}</p>
          <h2>{props.valueOne}</h2>
          <img src="" alt="" />
          <p>{props.secondParagraph}</p>
        </div>
        <div className="result">
          <p>{props.thirdParagraph}</p>
          <h2>{props.valuetwo}</h2>
          <p>{props.fourParagraph}</p>
        </div>
        <div className="result">
          <p>{props.fiveParagraph}</p>
          <h2>{props.valueThree}</h2>
        </div>
        <div className="result">
          <p>{props.sevenParagraph}</p>
          <h2>{props.valueFour}</h2>
        </div>

      </div>
    </div>
  );
};

export default Form;