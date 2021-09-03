import { useState } from "react";

import { calculate } from "../lib/calculate";

function CalculateForm() {
  const [payment, setPayment] = useState("");
  const [pi, setPi] = useState("");
  const [ps, setPs] = useState("");
  const [bonus, setBonus] = useState("");
  const [ratio, setRatio] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState("");

  const handlePayment = (event) => {
    setPayment(event.target.value);
  };

  const handlePi = (event) => {
    setPi(event.target.value);
  };

  const handlePs = (event) => {
    setPs(event.target.value);
  };

  const handleBonus = (event) => {
    setBonus(event.target.value);
  };

  const handleRatio = (event) => {
    setRatio(event.target.value);
  };

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setResult(calculate(payment, pi, ps, bonus, ratio, year));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          월 저축:{" "}
          <input type="number" value={payment} onChange={handlePayment} /> 만원
        </label>
      </div>
      <div>
        <label>
          PI: <input type="number" value={pi} onChange={handlePi} /> 만원
        </label>
      </div>
      <div>
        PS: <input type="number" value={ps} onChange={handlePs} /> 만원
      </div>
      <div>
        명절 상여금:{" "}
        <input type="number" value={bonus} onChange={handleBonus} /> 만원
      </div>
      <div>
        이율: <input type="number" value={ratio} onChange={handleRatio} /> %
      </div>
      <div>
        <input type="number" value={year} onChange={handleYear} /> 년 뒤
      </div>
      <button type="submit">계산</button>
      <div>결과: {result} 원</div>
    </form>
  );
}

export default CalculateForm;
