import { Card } from "antd";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

function SingleCards(props) {
  const { cardInfo, type, onClick, deleteFunc } = props;

  const cardStyle = {
    width: 240,
    margin: 4,
    minWidth: 240,
    display: "inline-block",
  };
  const cardCreatorStyle = {
    width: 240,
    margin: 10,
    backgroundColor: "rgb(240, 242,245)",
    minWidth: 240,
    display: "inline-block",
  };

  if (type === "card-creater")
    return (
      <Card
        className="card"
        bordered={false}
        style={cardCreatorStyle}
        onClick={onClick}
      >
        <div style={{ textAlign: "center" }}>
          <PlusCircleOutlined style={{ margin: "auto", fontSize: 50 }} />
        </div>
      </Card>
    );

  return (
    <Card
      className="card"
      hoverable
      style={cardStyle}
      title={<span style ={{fontSize: "24px"}}>{cardInfo.front}</span>}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ width: "80%" }}>{cardInfo.back}</p>
        <DeleteOutlined
          style={{ fontSize: 20 }}
          onClick={() => deleteFunc(cardInfo.cardId)}
        />
      </div>
    </Card>
  );
}

export default SingleCards;
