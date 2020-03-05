import React from "react";
import { Row } from "antd";
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
    <div>
      <Row style={{ justifyContent: "center" }}>
        <Card
          style={{ width: "300px" }}
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
      </Row>
      <Row>
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
      </Row>
    </div>
  );
}

export default Summary;
