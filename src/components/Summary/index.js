import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import { List, Avatar } from "antd";
import ReactHtmlParser from "react-html-parser";
import {
  StarOutlined,
  IeOutlined,
  TranslationOutlined,
  FileTextOutlined
} from "@ant-design/icons";
const { Meta } = Card;

function Summary(props) {
  return (
    <Row style={{ justifyContent: "center" }}>
      <Col span={9}>
        <Card
          style={{ width: "8wh" }}
          cover={
            <img
              alt={props.name}
              src={
                props.image
                  ? props.image.medium
                  : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
              }
            />
          }
        >
          <Meta title={props.name} />
        </Card>
      </Col>
      <Col span={1} />
      <Col span={14}>
        <List itemLayout="horizontal">
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  icon={<StarOutlined />}
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#3c948b"
                  }}
                />
              }
              title={"Type"}
              description={props.type}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  icon={<TranslationOutlined />}
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#3c948b"
                  }}
                />
              }
              title={"Language"}
              description={props.language}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  icon={<IeOutlined />}
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#3c948b"
                  }}
                />
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
                <Avatar
                  icon={<FileTextOutlined />}
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#3c948b"
                  }}
                />
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
