import QrCode from "qrcode.react";
import {FunctionComponent, ReactNode} from "react";
import bodyStyle from "./board-pass-body.module.css";
import headerStyle from "./boarding-pass-header.module.css";
import {IoAirplaneOutline} from "react-icons/io5";
import {Slot, SlotType} from "../../types/Slot";

interface BoardingPassProps {
  slot: Slot,
  themeColor?: string;
  actions?: ReactNode;
  origin: {
    name: string;
    iata: string;
  };
  destination: {
    name: string;
    iata: string;
  };
}

const defaultThemeColor = "#0d2c99";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC"
});

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "UTC"
});

const BoardingPassHeader: FunctionComponent<BoardingPassProps> = ({
  themeColor = defaultThemeColor,
  actions
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
      <div>
        {actions}
      </div>
    </header>
  );
};

const BoardingPassLeftSide: FunctionComponent<BoardingPassProps> = ({
  themeColor = defaultThemeColor,
  slot,
  origin,
  destination
}) => {
  return (
    <div>
      <div className={bodyStyle.passengerInfo}>
        <span>
          <span>Nome/Name</span>
          <span>
            {slot.owner!.lastName}, {slot.owner!.firstName}
          </span>
        </span>

        <span>
          <span>Localizador</span>
          <span>{slot.owner!.vid}</span>
        </span>
      </div>

      <div
        style={{ backgroundColor: themeColor, color: themeColor }}
        className={bodyStyle.flightHeader}
      >
        <span>from</span>
        <span>flight</span>
        <span>arrival</span>
      </div>
      <div className={bodyStyle.flightInfo}>
        <div className="flex flex-col">
          <div className="font-action font-semibold">
            {origin.name}/{origin.iata}
          </div>
          <div className="font-header mt-auto">
            <div className="font-light text-[0.56rem] leading-3">Data</div>
            <div className="text-sm">{dateFormatter.format(new Date(slot.slotTime)).toUpperCase()}</div>
          </div>
          <div className="font-header mt-auto">
            <div className="font-light text-[0.56rem] leading-3">stand</div>
            <div className="text-[2rem] leading-[2.6rem] font-extrabold">{slot.gate}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-action font-semibold">
            {slot.flightNumber}
          </div>
          <div className="font-header mt-auto">
            <div className="font-light text-[0.56rem] leading-3">Group</div>
            <div className="text-sm">G1</div>
          </div>
          <div className="font-header mt-auto">
            <div className="font-light text-[0.56rem] leading-3">
              {slot.slotTimeReference === SlotType.EOBT ? "EOBT(UTC)" : "ETA(UTC)"}
            </div>
            <div className="text-[2rem] leading-[2.6rem] font-extrabold">{timeFormatter.format(new Date(slot.slotTime))}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-action font-semibold">
            {destination.name}/{destination.iata}
          </div>
          <div className={bodyStyle.qrCodeInfo}>
            <div className={bodyStyle.infoText}>
              Para participar do evento você deve estar ciente e disposto a
              cumprir todas as orientações disponíveis no briefing de piloto
            </div>

            <QrCode value="https://br.ivao.aero" size={76} renderAs="svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const BoardingPassRightSide: FunctionComponent<BoardingPassProps> = ({
  slot,
  origin,
  destination,
}) => {
  return (
    <div className={bodyStyle.sideContent}>
      <div className={bodyStyle.passengerInfoSideBar}>
        <div>name</div>
        <div>
          {slot.owner!.lastName}, {slot.owner!.firstName}
        </div>
      </div>
      <div className={bodyStyle.flightInfoSidebar}>
        <div>{origin.iata}</div>
        <div>
          <div>
            <IoAirplaneOutline size={17} />
          </div>
          <div>{slot.flightNumber}</div>
        </div>
        <div>{destination.iata}</div>
      </div>
      <div className={bodyStyle.dateInfoSidebar}>
        <div>
          <div>Date</div>
          <div>{dateFormatter.format(new Date(slot.slotTime)).toUpperCase()}</div>
        </div>
        <div>
          <div>
            {slot.slotTimeReference === SlotType.EOBT ? "EOBT(UTC)" : "ETA(UTC)"}
          </div>
          <div className="text-right">{timeFormatter.format(new Date(slot.slotTime))}</div>
        </div>
      </div>
      <div className={bodyStyle.seatInfo}>
        <div>
          <div>Group</div>
          <div>G1</div>
        </div>
        <div>
          <div>Seat</div>
          <div className="text-right">1A</div>
        </div>
      </div>
    </div>
  );
};

export const BoardingPass: FunctionComponent<BoardingPassProps> = (props) => {
  return (
    <section style={{ minWidth: "976px" }}>
      <BoardingPassHeader {...props} />

      <main className={bodyStyle.body}>
        <BoardingPassLeftSide {...props} />
        <BoardingPassRightSide {...props} />
      </main>
    </section>
  );
};
