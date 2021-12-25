import { Component, ReactNode } from 'react';
import { FiHome } from 'react-icons/fi';
import { LinkButton } from "components/button/Button";
import { InformationalLayout } from "layouts/InformationalLayout";

interface ErrorPageState {
  hasError: boolean
}

export class ErrorPage extends Component<any, ErrorPageState> {
  private unhandledPromiseCallback = (_: any) => {
    this.setState({ hasError: true });
  };

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: any) {
    return { hasError: true };
  }

  componentDidMount() {
    window.addEventListener("unhandledrejection", this.unhandledPromiseCallback);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.unhandledPromiseCallback);
  }

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <InformationalLayout
        header='Houston, we have a problem...'
        description='Nossos sistemas indicam uma falha no computador de bordo. Recarregue a página ou tente novamente mais tarde.'>

        <LinkButton icon={<FiHome size={20} />} content='Voltar ao início' href='/' />
      </InformationalLayout>
    )
  }
}
