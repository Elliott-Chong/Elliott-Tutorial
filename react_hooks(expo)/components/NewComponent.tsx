import React from "react";
import { Text } from "react-native";

export default function NewComponent() {
  const [seconds, setSeconds] = React.useState(5);

  React.useEffect(() => {
    setInterval(() => {
      console.log("im being called");
      // console.log(seconds);
      // setSeconds(seconds + 1);
      setSeconds((updated_seconds) => {
        return updated_seconds + 1;
      });
    }, 1000);
  }, []);

  return <Text>seconds elapsed: {seconds}</Text>;
}
