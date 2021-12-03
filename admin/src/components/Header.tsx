import { Container, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/admin">Home</Navbar.Brand>
        <Navbar.Brand href="/admin/events">Eventos</Navbar.Brand>
        <Navbar.Brand href="/admin/slots">Slots</Navbar.Brand>
        <Navbar.Brand href="/admin/sceneries">Cenários</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
