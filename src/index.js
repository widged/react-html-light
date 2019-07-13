import React from "react";
import ReactDOM from "react-dom";
import View from "./primitives/View";
import Text from "./primitives/Text";
import Image from "./primitives/Image";
import Touchable from "./primitives/Touchable";
import StyleSheet from "./stylesheet";

const skin = StyleSheet.create({
  h1: {
    display: "block",
    fontSize: "2em",
    marginTop: "0.67em",
    marginBottom: "0.67em",
    marginLeft: 0,
    marginRight: 0,
    fontWeight: "bold"
  },
  vgroup: { display: "flex", flexDirection: "column", flexWrap: "no-wrap" },
  centered: { textAlign: "center" }
});
function App() {
  const onPress = e => {
    e.stopPropagation();
    alert("press");
    console.log(e.type, e.target.id);
  };

  const onLongPress = e => {
    e.stopPropagation();
    alert("long press");
    console.log(e.type, e.target.id);
  };
  const touchable = (
    <div>
      <Text>Press Me</Text>
    </div>
  );

  return (
    <View style={[skin.vgroup, skin.centered]}>
      <Text style={skin.h1}>React-html-elements</Text>
      <Touchable
        activeStyle={{ backgroundColor: "blue" }}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        {touchable}
      </Touchable>
      <View style={skin.vgroup}>
        <Image source={{ uri: "https://loremflickr.com/320/240" }} />
        <Text style={[{ color: "gray" }]}>Hello Kitty</Text>
      </View>
    </View>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
