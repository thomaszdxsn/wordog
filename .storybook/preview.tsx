import React from "react";
import {addDecorator} from "@storybook/react";


const Center: React.FC = props => (
 <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
   {props.children}
 </div>
);


addDecorator(story => <Center>{story()}</Center>);

