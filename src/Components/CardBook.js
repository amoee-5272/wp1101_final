import { Card } from 'antd';
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

function CardBook(props)
{
    const {cardBookInfo, type, navigate, onClick, deleteFunc} =props;

    const cardBookStyle =
    {
        width: 240,
        margin: 10,
        borderRadius: 20,
        minWidth: 200,
        display: "inline-block"
    };

    const coverStyle =
    {
        borderRadius: "20px 20px 0 0",
        backgroundColor: `${cardBookInfo ? cardBookInfo.color : "#00000000"}`,
        width: "100%",
        height: 120
    };

    const cardBookCreaterCoverStyle =
    {
        borderRadius: "20px 20px 0 0",
        backgroundColor: `${cardBookInfo ? cardBookInfo.color : "#00000000"}`,
        width: "100%",
        textAlign: "center",
        height: 110,
        position: "relative"
    };

    if(type === "card-book-creater")
        return(
            <Card className="card-books"
                bordered ={false}
                style={cardBookStyle}
                onClick={onClick}
                cover={<div style ={cardBookCreaterCoverStyle}><PlusCircleOutlined style ={{padding: 80, fontSize: 50}}/></div>}
            >
                <Meta
                    title="&nbsp;"
                    description={<span style ={{fontSize: 20}}>&nbsp;</span>}
                >
                </Meta>
                
            </Card>
        );

    return(
        <Card className="card-books"
            hoverable
            style={cardBookStyle}
            cover=
            {
                <div
                    style ={coverStyle}
                    onClick={() => navigate(`/cardBook/${cardBookInfo.bookId}`)}
                />
            }
        >
            <Meta
                title={`${cardBookInfo.name}`}
                description={
                    <span style={{display: "flex", justifyContent: "space-between"}}>
                        {cardBookInfo.num_of_card} words
                        <DeleteOutlined
                            style ={{fontSize: 20}}
                            onClick={() => deleteFunc(cardBookInfo.bookId)}
                        />
                    </span>}
            >
            </Meta>
        </Card>
    );
}

export default CardBook;