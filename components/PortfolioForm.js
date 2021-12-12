import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";

const PortfolioForm = ({ onSubmit, initialData = {} }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: initialData,
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    register("startDate");
    register("endDate");
  }, [register]);

  useEffect(() => {
    const { startDate, endDate } = initialData;
    if (startDate) {
      setStartDate(new Date(startDate));
    }
    if (endDate) {
      setEndDate(new Date(endDate));
    }
  }, [initialData]);
 
  const handleDataChange = (dateType, setDate) => (date) => {
    setValue(dateType, date);
    setDate(date);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="nume">Nume si Prenum</label>
        <input
          {...register("nume")}
          type="text"
          className="form-control"
          id="nume"
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">Problema</label>
        <input
          {...register("problema")}
          type="text"
          className="form-control"
          id="problema"
        />
      </div>

      <div className="form-group">
        <label htmlFor="city">Pavilion</label>
        <input
          {...register("pavilion")}
          type="text"
          className="form-control"
          id="pavilion"
        />
      </div>

      <div className="form-group">
        <label htmlFor="street">Etaj</label>
        <input
          {...register("etaj")}
          type="text"
          className="form-control"
          id="etaj"
        />
      </div>

      <div className="form-group">
        <label htmlFor="street">Nr. Camera</label>
        <input
          {...register("camera")}
          type="text"
          className="form-control"
          id="camera"
        />
      </div>

      <div className="form-group">
        <label htmlFor="descriere">Description</label>
        <textarea
          {...register("descriere")}
          rows="5"
          type="text"
          className="form-control"
          id="descriere"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Data sesizare problema</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            // onSelect={handleDateSelect} //when day is clicked
            onChange={handleDataChange("startDate", setStartDate)} //only when value has changed
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="endDate">Data rezolvare problema</label>
        <div>
          <DatePicker
            disabled={!endDate}
            showYearDropdown
            selected={endDate}
            // onSelect={handleDateSelect} //when day is clicked
            onChange={handleDataChange("endDate", setEndDate)} //only when value has changed
          />
        </div>
      </div>
      <div className="form-group">
        {endDate && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDataChange("endDate", setEndDate)(null)}
          >
            No End Date
          </button>
        )}
        {!endDate && (
          <button
            type="button"
            className="btn btn-success"
            onClick={() =>
              handleDataChange(
                "endDate",
                setEndDate
              )(new Date(new Date().setHours(0, 0, 0, 0)))
            }
          >
            Set End Date
          </button>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default PortfolioForm;
