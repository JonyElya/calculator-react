import React, { useState, useCallback } from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import { concatNum, Operations } from "./mathOperation";
import "./style/main.css";

const btn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
const operations = ["-", "+", "*", "/"];

const Calc = () => {
  const [numbers, setNumbers] = useState("0");
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState(null);
  const [operation, setOperation] = useState(null);

  const addNumber = useCallback(
    (n) => {
      let result;
      if (operation === null) {
        result = concatNum(num1, n);
        setNum1(result);
      } else {
        result = concatNum(num2, n);
        setNum2(result);
      }
      setNumbers(result);
    },
    [num1, num2, operation]
  );

  const spotOperation = useCallback(
    (o) => {
      if (operation === null) {
        setOperation(o);
        return;
      }
      if (num2 !== null) {
        const res = Operations(parseFloat(num1), parseFloat(num2), operation);
        setOperation(o);
        setNum1(res.toString());
        setNum2(null);
        setNumbers(res.toString());
      }
    },
    [num1, num2, operation]
  );

  const equality = useCallback(() => {
    if (num2 === null) return;
    const result = Operations(parseFloat(num1), parseFloat(num2), operation);
    setNumbers(result);
  }, [num1, num2, operation]);

  const clean = useCallback(() => {
    setNumbers("0");
    setNum1("0");
    setNum2(null);
    setOperation(null);
  }, []);
  return (
    <Container>
      <h1>Calculator</h1>
      <Row className="justify-content-center ">
        <Col xs="auto" className="main_display">
          <Form.Control
            type="text"
            name="numbers"
            className="text-right"
            readOnly="readonly"
            value={numbers}
            size="lg"
          />

          <div className="buttons_number">
            {btn.map((e) => (
              <Button
                variant="secondary"
                size="lg"
                onClick={() => addNumber(e)}
              >
                {e}
              </Button>
            ))}
          </div>
          <div>
            {operations.map((e) => (
              <Button variant="dark" size="lg" onClick={() => spotOperation(e)}>
                {e}
              </Button>
            ))}
          </div>
          <div className="buttons_group">
            <Button variant="info" onClick={equality} className="button">
              =
            </Button>

            <Button variant="danger" onClick={clean} className="button">
              C
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Calc;
