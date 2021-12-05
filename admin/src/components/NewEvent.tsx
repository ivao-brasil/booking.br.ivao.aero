import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { IocContext } from "../context/IocContext";
import {
  NotificationContext,
  NotificationType,
} from "../context/NotificationContext";

interface INewEventForm {
  dateStart: string;
  dateEnd: string;
  eventName: string;
  privateSlots: boolean;
  pilotBriefing: string;
  atcBriefing: string;
  description: string;
  banner: string;
  atcBooking: string;
}

export const NewEvent = () => {
  const [img, setImg] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<INewEventForm>();

  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);

  const onSubmit = (data: INewEventForm) => {
    apiClient
      .createEvent(
        {
          ...data,
          dateEnd: new Date(data.dateEnd).getTime() / 1000,
          dateStart: new Date(data.dateStart).getTime() / 1000,
        },
        token
      )
      .then(() => {
        setImg(undefined);
        reset();
        dispatch(
          "Event successfully created",
          "Event created",
          NotificationType.SUCCESS,
          5000
        );
      })
      .catch(() => {
        dispatch(
          "Error to create event",
          "Event creation error",
          NotificationType.ERROR,
          5000
        );
      });
  };

  return (
    <section style={{ display: "flex", gap: "24px" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          placeholder="Event Name"
          value={img}
          {...register("eventName", { required: true })}
        />
        <Tooltip title="Your local time" placement="left-start">
          <TextField
            placeholder="Date Start"
            type="datetime-local"
            value={img}
            {...register("dateStart", { required: true, valueAsDate: true })}
          />
        </Tooltip>
        <Tooltip title="Your local time" placement="left-start">
          <TextField
            placeholder="Date end"
            type="datetime-local"
            value={img}
            {...register("dateEnd", { required: true, valueAsDate: true })}
          />
        </Tooltip>
        <TextField
          placeholder="Pilot Briefing"
          {...register("pilotBriefing", { required: true })}
        />
        <TextField
          placeholder="ATC Briefing"
          {...register("atcBriefing", { required: true })}
        />
        <TextField
          placeholder="Event Description"
          rows={4}
          multiline
          {...register("description", { required: true })}
        />
        <TextField
          placeholder="Banner Link"
          value={img}
          {...register("banner", { required: true })}
          onChange={(event) => setImg(event.target.value)}
        />
        <TextField
          placeholder="ATC Booking Link"
          {...register("atcBooking", { required: true })}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox {...register("privateSlots", { required: true })} />
            }
            label="Private slots available"
          />
        </FormGroup>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
      <section style={{ width: "100%" }}>
        {img && <img src={img} width="600px" />}
      </section>
    </section>
  );
};
