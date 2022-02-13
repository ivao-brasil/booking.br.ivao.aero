import { Component, ReactNode, ErrorInfo } from 'react';
import axios from 'axios';
import { FiHome } from 'react-icons/fi';
import { ActionButton } from "components/button/Button";
import { InformationalLayout } from "layouts/InformationalLayout";
import { LottieFile } from 'components/LottieFile';
import { AuthContext } from 'context/AuthContext';

interface ErrorPageState {
  hasError: boolean
}

export class ErrorPage extends Component<any, ErrorPageState> {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>

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

  componentDidCatch(error: Error, _: ErrorInfo) {
    if (axios.isAxiosError(error)) {
      // TODO: Check the expired token via HTTP 403 error.
      // The backend is returning HTTP 500 with the string 'Expired token' as message
      if (error.message === "Expired token") {
        this.context.refreshToken();
      }
    }
  }

  componentDidMount() {
    window.addEventListener("unhandledrejection", this.unhandledPromiseCallback);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.unhandledPromiseCallback);
  }

  onErrorReset = () => {
    // Force tree rendering
    window.location.href = "/";
  }

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <InformationalLayout
        header='Houston, we have a problem...'
        description='Nossos sistemas indicam uma falha no computador de bordo. Recarregue a página ou tente novamente mais tarde.'
        image={<LottieFile src="https://assets1.lottiefiles.com/packages/lf20_zf9mqyhk.json" />}>
        <ActionButton icon={<FiHome size={20} />} content='Voltar ao início' onClick={this.onErrorReset} />
      </InformationalLayout>
    )
  }
}
