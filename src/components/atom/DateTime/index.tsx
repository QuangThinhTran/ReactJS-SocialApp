import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";

const DateTime = ({ datetime }: { datetime: string | undefined }) => {
    const formattedDate = moment(datetime).format("DD-MM-YYYY");

    return (
        <>
            <FontAwesomeIcon icon={faClock} />
            {formattedDate}
        </>
    );
};

export default DateTime;
