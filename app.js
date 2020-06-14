import React, { useState } from "react"; // import from react

import { View, Window, App, Text, Button } from "proton-native"; // import the proton-native components

export default function Example() {
  const [display, setDisplay] = useState("");

  function clearAll() {
    setDisplay("");
  }

  function appendToCalculate(value) {
    if (display === "") setDisplay(value);
    else setDisplay((display) => display + value);
  }

  function calculate() {
    try {
      let resolution = eval(display);
      setDisplay(resolution);
    } catch (error) {
      alert("You entered an ill-formated equation. Please start over");
    }
  }

  return (
    <App>
      <Window style={{ width: 300, height: 470 }} menuBar={false}>
        <View style={{ flex: 1 }}>
          <Text style={{ alignSelf: "flex-end" }}>{display}</Text>

          <Button onPress={() => appendToCalculate("0")} title="0" />
          <Button onPress={() => appendToCalculate("1")} title="1" />
          <Button onPress={() => appendToCalculate("2")} title="2" />
          <Button onPress={() => appendToCalculate("3")} title="3" />
          <Button onPress={() => appendToCalculate("4")} title="4" />
          <Button onPress={() => appendToCalculate("5")} title="5" />
          <Button onPress={() => appendToCalculate("6")} title="6" />
          <Button onPress={() => appendToCalculate("7")} title="7" />
          <Button onPress={() => appendToCalculate("8")} title="8" />
          <Button onPress={() => appendToCalculate("9")} title="9" />
          <Button onPress={() => appendToCalculate("+")} title="+" />
          <Button onPress={() => appendToCalculate("-")} title="-" />
          <Button onPress={() => appendToCalculate("*")} title="*" />
          <Button onPress={() => appendToCalculate("/")} title="/" />
          <Button onPress={() => appendToCalculate("(")} title="(" />
          <Button onPress={() => appendToCalculate(")")} title=")" />
          <Button onPress={calculate} title="=" />
          <Button onPress={clearAll} title="Clear All" />
        </View>
      </Window>
    </App>
  );
}
