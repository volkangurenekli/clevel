import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import { List, Avatar } from "antd";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

const { Meta } = Card;

function Summary(props) {
  return (
    <Row>
      <Col span={10}>
        <Card
          style={{ width: 240 }}
          cover={<img alt={props.name} src={props.image} />}
        >
          <Meta title={props.name} description={props.url} />
        </Card>
      </Col>
      <Col span={14}>
        <List itemLayout="horizontal">
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={"Type"}
              description={props.type}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={"Language"}
              description={props.language}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={"Official Site"}
              description={
                <a href={props.officialSite}>{props.officialSite}</a>
              }
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={"Summary"}
              description={ReactHtmlParser(props.summary)}
            />
          </List.Item>
        </List>
      </Col>
    </Row>
  );
}

export default Summary;
