import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-cream px-6 text-center">
          <p className="font-display text-2xl text-ink">
            Algo derramou no forno. Recarregue a página para continuar.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}