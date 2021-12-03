import { Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/admin">
        <img
          alt=""
          src="https://assets.br.ivao.aero/logos/tag_white.svg"
          height="45"
        />
      </Navbar.Brand>
      <Navbar.Brand href="/admin/events">Eventos</Navbar.Brand>
      <Navbar.Brand href="/admin/slots">Slots</Navbar.Brand>
      <Navbar.Brand href="/admin/sceneries">Cenários</Navbar.Brand>
      <Navbar.Brand href="/admin/users">Usuários</Navbar.Brand>
    </Navbar>
  );
};
