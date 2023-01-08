import { useState } from "react";
import axios from "axios";
import { styles } from "./Style";
import {
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

//fw876
//helloworld

export default function App() {
  const [username, setUsername] = useState();
  const [repository, setRepository] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const [isError, setIsError] = useState(false);
  const [repos, setRepos] = useState([]);

  const getUser = (user, repo) => {
    var path =
      "https://api.github.com/repos/" + user + "/" + repo + "/stargazers";
    axios
      .get(path)
      .then((response) => {
        let data = [];
        //console.log(response.data);
        response.data.map((repo) => {
          let rep = {
            img: repo?.avatar_url,
            name: repo?.login,
          };
          data.push(rep);
        });
        setIsError(false);
        setRepos(data);
      })
      .catch((err) => {
        setRepos([]);
        setIsError(true);
      });
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 150,
      }}
    >
      <View style={styles.view1}>
        <Text style={styles.text1}>Enter the data </Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          value={repository}
          onChangeText={setRepository}
          placeholder="repository"
        />
        <View alignItems="center">
          <TouchableOpacity
            key="continua"
            onPress={() => {
              getUser(username, repository);
              setIsVisible(false);
            }}
            style={[styles.button]}
          >
            <Text>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isVisible && (
        <View style={styles.container2}>
          <Text style={styles.text2}>Stargazers viewer</Text>
          <Text style={styles.text}>
            Enter the owner and repository. Click on the "continue" button to be
            able to get the list of users who have added it to their favorites.
          </Text>
        </View>
      )}
      {isError && (
        <View style={styles.container2}>
          <Text style={styles.text2}>Missing repositories</Text>
          <Text style={styles.text}>
            There is an error, try double-checking that the owner and repository
            are correct.
          </Text>
        </View>
      )}

      <FlatList
        data={repos}
        renderItem={({ item }) => (
          <View style={styles.container} flexDirection={"row"}>
            <Image
              style={styles.logo}
              source={{
                uri: item?.img,
              }}
            />
            <Text style={styles.text3}>{item?.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
