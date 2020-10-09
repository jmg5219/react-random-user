import React from "react";

import { Columns, Column, Card, CardImage, Image, Title, Content, withHelpersModifiers } from 'bloomer';
import "bulma/css/bulma.css"
import "./RandomUser.css";

//refactored as a function
function RandomUser(props) {
    //passing data to the component via props
    const { userData } = props;
    console.log(userData)
    //accessing the props
    return (

        <div className="wrapper">
            {userData.map((user) => (
                //every li should have a key if you map through data in React

                <Card className="card" key={user.login.uuid}>
                    <CardImage>
                        <Image isSize='128x128' src={user.picture.large} />
                    </CardImage>
                    <Title hasTextAlign='left' isSize={4}>{user.name.first} {user.name.last}</Title>
                    <Content hasTextAlign='left'>
                        {user.email}
                    </Content>
                    <Content hasTextAlign='left'>
                        {user.cell}
                    </Content>
                </Card>


            ))}
        </div>






    );

}

export default RandomUser