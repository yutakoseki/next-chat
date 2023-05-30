import type { NextPage } from "next";
import { Card, Text, Row, Col, Button } from "@nextui-org/react"

interface Props {
    title: string;
    label: string;
    imageURL: string;
    studentCount: string;
}

const InfoCard:NextPage<Props> = (props) => {
    const { title, label, imageURL, studentCount } = props;

    return (
        <Card>
            <Card.Header css={{position: "absolute", top: 5}}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        {label}
                    </Text>
                    <Text h4 color="white">
                        {title}
                    </Text>
                </Col>
            </Card.Header>

        </Card>
    )
}

export default InfoCard