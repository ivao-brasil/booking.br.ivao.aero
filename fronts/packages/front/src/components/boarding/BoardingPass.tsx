import QrCode from "qrcode.react";
import { FunctionComponent } from "react";
import bodyStyle from "./board-pass-body.module.css";
import headerStyle from "./boarding-pass-header.module.css";
import { ReactComponent as Plane } from "./plane.svg";

export enum BoardingPassType {
  DEPARTURE,
  ARIVAL,
}

interface BoardingPassProps {
  themeColor?: string;
  user: {
    firstName: string;
    lastName: string;
    vid: string;
  };
  origin: {
    name: string;
    iata: string;
  };
  destination: {
    name: string;
    iata: string;
  };
  callsign: string;
  slotDate: Date;
  gate: string;
  type: BoardingPassType;
}

const defaultThemeColor = "#0d2c99";

const formatDate = (date: Date) => {
  const months = [
    "JAN",
    "FEV",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OUT",
    "NOV",
    "DEC",
  ];

  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();

  return [
    day.toString().padStart(2, "0"),
    months[month],
    year.toString().substring(2),
  ].join(" ");
};

const formatHour = (date: Date) =>
  [date.getUTCHours(), date.getUTCMinutes()]
    .map((value) => value.toString().padStart(2, "0"))
    .join("");

const BoardingPassHeader: FunctionComponent<BoardingPassProps> = ({
  themeColor = defaultThemeColor,
}) => {
  return (
    <header
      style={{ backgroundColor: themeColor }}
      className={headerStyle.header}
    >
      <div>
        <span>Cartão de Embarque</span>
        <span>Boarding Pass</span>
      </div>
    </header>
  );
};

const BoardingPassLeftSide: FunctionComponent<BoardingPassProps> = ({
  themeColor = defaultThemeColor,
  user,
  callsign,
  origin,
  destination,
  gate,
  slotDate,
  children,
  type,
}) => {
  return (
    <div>
      <div className={bodyStyle.passengerInfo}>
        <span>
          <span>Nome/Name</span>
          <span>
            {user.lastName}, {user.firstName}
          </span>
        </span>

        <span>
          <span>Localizador</span>
          <span>{user.vid}</span>
        </span>
      </div>

      <div
        style={{ backgroundColor: themeColor }}
        className={bodyStyle.flightHeader}
      >
        <span>de/from</span>
        <span>voo/flight</span>
        <span>destino/arrival</span>
      </div>

      <div className={bodyStyle.flightInfo}>
        <div>
          {origin.name}/{origin.iata}
        </div>
        <div>{callsign}</div>
        <div>
          {destination.name}/{destination.iata}
        </div>
      </div>

      <div className={bodyStyle.footer}>
        <div>
          <div className={bodyStyle.dateInfo}>
            <div>
              <div>Data/Date</div>
              <div>{formatDate(slotDate)}</div>
            </div>
            <div>
              <div>Grupo/Group</div>
              <div>G1</div>
            </div>
          </div>

          <div className={bodyStyle.gateInfo}>
            <div>
              <div>posição/stand</div>
              <div>{gate}</div>
            </div>
            <div>
              <div>
                {type === BoardingPassType.DEPARTURE ? "EOBT(UTC)" : "ETA(UTC)"}
              </div>
              <div>{formatHour(slotDate)}</div>
            </div>
          </div>
        </div>

        <div className={bodyStyle.qrCodeInfo}>
          <div className={bodyStyle.info}>
            Para participar do evento você deve estar ciente e disposto a
            cumprir todas as orientações disponíveis no briefing de piloto
          </div>

          <QrCode value="https://br.ivao.aero" size={76} renderAs="svg" />
        </div>
      </div>
    </div>
  );
};

const BoardingPassRightSide: FunctionComponent<BoardingPassProps> = ({
  user,
  origin,
  callsign,
  destination,
  slotDate,
  type,
}) => {
  return (
    <div className={bodyStyle.sideContent}>
      <div className={bodyStyle.passengerInfoSideBar}>
        <div>nome/name</div>
        <div>
          {user.lastName}, {user.firstName}
        </div>
      </div>
      <div className={bodyStyle.flightInfoSidebar}>
        <div>{origin.iata}</div>
        <div>
          <div>
            <Plane />
          </div>
          <div>{callsign}</div>
        </div>
        <div>{destination.iata}</div>
      </div>
      <div className={bodyStyle.dateInfoSidebar}>
        <div>
          <div>Data/Date</div>
          <div>{formatDate(slotDate)}</div>
        </div>
        <div>
          <div>
            {type === BoardingPassType.DEPARTURE ? "EOBT(UTC)" : "ETA(UTC)"}
          </div>
          <div>{formatHour(slotDate)}</div>
        </div>
      </div>
      <div className={bodyStyle.seatInfo}>
        <div>
          <div>Grupo/Group</div>
          <div>G1</div>
        </div>
        <div>
          <div>Assento/Seat</div>
          <div>1A</div>
        </div>
      </div>
    </div>
  );
};

export const BoardingPass: FunctionComponent<BoardingPassProps> = (props) => {
  return (
    <section style={{ width: "100%" }}>
      <BoardingPassHeader {...props} />

      <main className={bodyStyle.body}>
        <BoardingPassLeftSide {...props} />
        <BoardingPassRightSide {...props} />
      </main>
    </section>
  );
};
