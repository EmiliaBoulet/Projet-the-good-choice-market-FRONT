import {
  Badge,
  Container,
  Dropdown,
} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function ShoppingCard() {
  return (

    <Container>
      <Dropdown>

        <Dropdown.Toggle variant="success">
          <FaShoppingCart color="black" fontSize="25px" />
          <Badge> {10} </Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ minWidth: 370 }}>
          <span style={{ padding: 10 }}> Cart is Empty !</span>
        </Dropdown.Menu>
      </Dropdown>
    </Container>

  );
}

// == Export
export default ShoppingCard;
