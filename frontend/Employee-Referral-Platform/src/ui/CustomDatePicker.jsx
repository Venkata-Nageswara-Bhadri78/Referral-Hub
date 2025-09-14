// CustomDatePicker.jsx
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker({ expireDate, setExpireDate }) {
  // Convert string to Date object if expireDate exists
  const selectedDate = expireDate ? new Date(expireDate) : null;

  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={(date) => {
        if (date) {
          // Store as YYYY-MM-DD string in state
          const formattedDate = date.toISOString().split("T")[0];
          setExpireDate(formattedDate);
        } else {
          setExpireDate("");
        }
      }}
      dateFormat="yyyy-MM-dd"
      placeholderText="Select a date"
      className="border rounded-md p-2 w-full"
    />
  );
}
