import { Component, ReactNode, ErrorInfo } from 'react';
import axios from 'axios';
import { FiHome } from 'react-icons/fi';
import { ActionButton } from 'components/button/Button';
import { InformationalLayout } from 'layouts/InformationalLayout';
import { AuthContext } from 'context/AuthContext';
import { withTranslation, WithTranslation } from 'react-i18next';
import notFound from './not-found.svg';

interface ErrorPageState {
  hasError: boolean
}

interface ErrorPageProps extends WithTranslation {
  t: (key: string) => string
}

class ErrorPageClass extends Component<ErrorPageProps, ErrorPageState> {
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
      if (error.message === "Expired token" || error.response?.status === 401 || error.response?.status === 403) {
        this.context.refreshToken();
        this.setState({ hasError: false });
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
        header={this.props.t('errors.general.title')}
        description={this.props.t('errors.general.subtitle')}
        image={<img className="w-[27.3rem]" alt="globe" src={notFound} width={437} height={480} />}
      >
        <ActionButton icon={<FiHome size={20} />} content={this.props.t('generics.backToBeginning')} onClick={this.onErrorReset} />
      </InformationalLayout>
    )
  }
}

export const ErrorPage = withTranslation()(ErrorPageClass);

