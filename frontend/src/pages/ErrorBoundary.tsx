import { Component, ReactNode } from 'react';
import { FiHome } from 'react-icons/fi';
import { ButtonIcon, ButtonText, LinkButton } from "components/button/Button";
import { Header, MutedText } from "components/typography/Typography";
import { InformationalLayout } from "layouts/InformationalLayout";

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<any, ErrorBoundaryState> {
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
      <InformationalLayout>
        <Header>Houston, we have a problem...</Header>
        <div className="mt-8 pr-1.5">
          <MutedText>
            Nossos sistemas indicam uma falha no computador de bordo. Recarregue a página ou tente novamente mais tarde.
          </MutedText>
        </div>
        <div className="mt-12">
          <LinkButton href='/'>
            <ButtonIcon>
              <FiHome size={20} />
            </ButtonIcon>
            <ButtonText>Voltar ao início</ButtonText>
          </LinkButton>
        </div>
      </InformationalLayout>
    )
  }
}
