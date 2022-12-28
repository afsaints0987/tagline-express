import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as FaIcons from "react-icons/fa"

const popover = (
  <Popover id="popover-basic" >
    <Popover.Header as="h3" className="text-light bg-danger">Here's how?</Popover.Header>
    <Popover.Body>
      <ul className="text-start">
        <li>Write a tagline for your business, brand and service by starting with "Write a tagline for..." (ex. Write a tagline for shoe business)</li>
        <li>Press the "Give it to me" to create a tagline</li>
      </ul>
    </Popover.Body>
  </Popover>
);

export const TagTooltip = () => {
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <button type="button" className="btn btn-transparent btn-sm mb-4">
        <FaIcons.FaInfoCircle className="text-dark border-none" />
      </button>
    </OverlayTrigger>
  );
}



