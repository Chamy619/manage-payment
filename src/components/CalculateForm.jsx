import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";

import { calculate } from "../lib/calculate";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    position: "absolute",
    width: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function CalculateForm() {
  const [payment, setPayment] = useState("");
  const [pi, setPi] = useState("");
  const [ps, setPs] = useState("");
  const [bonus, setBonus] = useState("");
  const [ratio, setRatio] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2>결과</h2>
      <p>{result} 원</p>
      <Button
        onClick={handleClose}
        fullWidth
        className={classes.textField}
        variant="contained"
        color="primary"
      >
        확인
      </Button>
    </div>
  );

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
      <TextField
        className={classes.textField}
        fullWidth
        label="월 저축 (만원)"
        value={payment}
        onChange={handlePayment}
      />
      <TextField
        className={classes.textField}
        fullWidth
        label="PI (만원)"
        value={pi}
        onChange={handlePi}
      />
      <TextField
        className={classes.textField}
        fullWidth
        label="PS (만원)"
        value={ps}
        onChange={handlePs}
      />
      <TextField
        className={classes.textField}
        fullWidth
        label="명절 상여 (만원)"
        value={bonus}
        onChange={handleBonus}
      />
      <TextField
        className={classes.textField}
        fullWidth
        label="이율 (%)"
        value={ratio}
        onChange={handleRatio}
      />
      <TextField
        className={classes.textField}
        fullWidth
        label="투자 해 수 (년)"
        value={year}
        onChange={handleYear}
      />
      <Button
        onClick={handleOpen}
        fullWidth
        className={classes.textField}
        type="submit"
        variant="contained"
        color="primary"
      >
        계산
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {body}
      </Modal>
    </form>
  );
}

export default CalculateForm;
