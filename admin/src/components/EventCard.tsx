import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {FunctionComponent, useState} from "react";
import {Event} from "../types/Event";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

interface EventCardProps {
    event: Event;
}

const months = [
    "Jannuary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const EventCard: FunctionComponent<EventCardProps> = ({event}) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const formatDate = (date: Date) => {
        console.log({event});
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        const day = date.getUTCDate();
        const hours = date.getUTCHours().toString().padStart(2, "0");
        const minutes = date.getUTCMinutes().toString().padStart(2, "0");

        return `${month} ${day}, ${year} ${hours}${minutes}Z`
    }

    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                title={event.eventName}
                subheader={formatDate(new Date(event.dateStart))}
            />
            <CardMedia
                component="img"
                image={event.banner}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {event.description}
                </Typography>
            </CardContent>
        </Card>
    );
};
