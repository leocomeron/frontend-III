import React from "react";

/* Importando recurso de Toast */
import { toast } from "react-toastify";

/* Creo el ErrorBoundary */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    /* Estados del componente */
    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }

  componentDidCatch(hasError, errorInfo) {
    toast.warn("Hay un problema en la aplicación FIJATE QUE PASSA", {
      theme: "dark",
    });

    /* Atualizo estados del componente. */
    this.setState({
      hasError: hasError,
      errorInfo: errorInfo,
    });
  }

  render() {
    /* Si hay algun error... */
    if (this.state.hasError) {
      return (
        <div>
          <h2>Ops...ocurrio algun error!!!</h2>

          <details style={{ whiteSpace: "pre-wrap" }}>
            <h4>Mas detalles sobre esta situación: (Stack Trace):</h4>
            {this.state.hasError.toString()}
            <br />
            <br />
            {/* En que componente se produjo el error... */}
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    /* Si no hay error, renderizar los componentes hijos del ErrorBoundary... */
    return this.props.children;
  }
}

export default ErrorBoundary;
