import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, Button } from "react-native";
import { StyleSheet } from "react-native";
import SecondMenu from "../components/SecondMenu";
import ProgressBarAnimated from "react-native-progress-bar-animated";
export class OverviewTopicItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
      progressComplete: 40
    };
  }

  handlePressFavorite = () => {
    console.log(this.state.favorite);
    this.setState({ favorite: !this.state.favorite });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childContainer}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={this.handlePressFavorite}>
              <Image
                source={
                  !this.state.favorite
                    ? require("../assets/icon/star-outline.png")
                    : require("../assets/icon/star-fill-color.png")
                }
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
            <Image
              source={require("../assets/image/people.png")}
              style={styles.mainImage}
            />
          </View>
          <ProgressBarAnimated
            style={styles.progressBar}
            width={100}
            height={8}
            backgroundColor="orange"
            value={this.state.progressComplete}
          ></ProgressBarAnimated>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.topicName}>{this.props.topicName}</Text>
            <Text style={styles.topicNameVi}>{this.props.topicNameVi}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </View>
        <SecondMenu style={styles.secondMenu}></SecondMenu>
        <View style={styles.viewBtnDeail}>
          <TouchableOpacity style={styles.btnDetail} activeOpacity={0.9}>
            <Text style={styles.textBtnDetail}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default OverviewTopicItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0,
    padding: 10
  },
  childContainer: {
    borderRadius: 20,
    backgroundColor: "#fff",
    height: "85%",
    justifyContent: "space-around",
    margin: 20,
    padding: 12,
    alignItems: "center"
  },
  secondMenu: {
    position: "absolute",
    right: 10,
    top: 110
  },
  btnDetail: {
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#1f7ac4",
    borderWidth: 0,
    alignItems: "center",
    height: 40,
    width: 150
  },
  viewBtnDeail: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    left: 15,
    width: "100%"
  },
  textBtnDetail: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18
  },
  mainImage: {
    borderRadius: 100,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    marginRight: 20
  },
  progressBar: {
    margin: 5
  },
  topicName: {
    textTransform: "capitalize",
    fontSize: 25,
    color: "gray",
    fontWeight: "bold"
  },
  topicNameVi: {
    textTransform: "none",
    fontSize: 20,
    color: "#F57F17",
    fontWeight: "bold"
  },
  description: {
    textAlign: "center",
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#8E8E8E"
  }
});
