import React from "react";
import { render, fireEvent, findByText } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

test("finding navbar", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const navBar = getByTestId("Navbar");
  expect(navBar).toBeInTheDocument();
});

test("checking home", (done) => {
  const { findByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  findByTestId("home").then((home) => {
    expect(home).toBeInTheDocument();
    done();
  });
});

test("change page", (done) => {
  const { findByTestId, getByText, debug, getByTestId, findByText } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  const leftClick = { button: 0 };
  fireEvent.click(getByText("Traps"), leftClick);

  findByTestId("type").then((data) => {
    expect(data).toBeInTheDocument();
    done();
  });
});

test("test jumlah card", (done) => {
  const { findAllByTestId } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  findAllByTestId("cards").then((data) => {
    expect(data).toHaveLength(100);
    done();
  });
});

test("jumlah card setelah change page", (done) => {
  const { findByTestId, getByText, findAllByTestId } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  const leftClick = { button: 0 };
  fireEvent.click(getByText("Traps"), leftClick);

  findAllByTestId("cards").then((data) => {
    expect(data).toHaveLength(100);
    done();
  });
});
