import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as FaIcons from "react-icons/fa"

const popover = (
  <Popover id="popover-basic" >
    <Popover.Header as="h3" className="text-light bg-danger">Instruction</Popover.Header>
    <Popover.Body>
      <ul className="text-start">
            <li>Write your business or services by starting with "Write a tagline for..." (ex. Write a tagline for shoe business)</li>
            <li>Click the "Give it to me" button to generate a tagline for your business or services</li>
        </ul>
    </Popover.Body>
  </Popover>
);

export const TagTooltip = () => {
    return (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <button type="button" className="btn btn-transparent btn-sm mb-4">
          <FaIcons.FaInfoCircle className="text-danger border-none" />
        </button>
      </OverlayTrigger>
    );
}



