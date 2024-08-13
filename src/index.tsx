import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const FallbackComponent: React.FC<{
  error: Error;
  resetErrorBoundary: () => void;
}> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Đã xảy ra lỗi:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Thử lại</button>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
