
import { Component } from "react";
import Button from "./Button";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Dashboard rendering error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="mx-auto max-w-xl rounded-xl bg-white p-8 text-center shadow"
        >
          <h2 className="mb-2 text-xl font-bold text-red-600">
            Something went wrong
          </h2>

          <p className="mb-5 text-gray-600">
            The dashboard could not be displayed.
          </p>

          <Button
            onClick={() => window.location.reload()}
          >
            Reload Application
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
