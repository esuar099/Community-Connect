import axios from "axios";


//gets backend data for users city, selected topics, and login user
function getUserInfo(setCity, setLogin, setTopics) {
    console.log("AT THE HOME PAGE MAAM"+axios.defaults.headers.common.Authorization) 
    axios
      .get("user/profile/", axios.defaults.headers.common.Authorization)
      .then((response) => {
        let topicsList = ["Pandemic", "Climate Change", "Greenhouse Gases", "Extreme Events and Environment", "Energy and Environment", "Sustainability of the   Environment", "All Topics"];
        let topicsObject = [];
        let topicsRaw = response.data[0].topics;
        for (let i=0; i<7; i++){
          let topic = {
            id: i+1,
            topic: topicsList[i],
            selected: topicsRaw.includes((i+1).toString())
          };
          topicsObject.push(topic);
        };
        setCity(response.data[0].city);
        setLogin(true);
        setTopics(topicsObject);
        console.log('success');

      })
      .catch(error => {
        console.log(error)
        setLogin(false);
        localStorage.clear()
      });;
      
  }

/*//gets backend data for users city and topics list
function getUserInfoForumsPage(setCity, setTopics) {
    console.log("AT THE FORUMS PAGE MAAM"+axios.defaults.headers.common.Authorization) 
    axios
      .get("user/profile/", axios.defaults.headers.common.Authorization)
      .then((response) => {
        let topicsList = ["Pandemic", "Climate Change", "Greenhouse Gases", "Extreme Events and Environment", "Energy and Environment", "Sustainability of the   Environment", "All Topics"];
        let topicsObject = [];
        let topicsRaw = response.data[0].topics;
        for (let i=0; i<7; i++){
          let topic = {
            id: i+1,
            topic: topicsList[i],
            selected: topicsRaw.includes((i+1).toString())
          };
          topicsObject.push(topic);
        };
        setCity(response.data[0].city);
        setTopics(topicsObject);
        console.log('success');

      })
      .catch(error => {
        console.log(error)
        localStorage.clear()
      });;
      
}
*/

//for exporting a single function
export default getUserInfo;

//export several functions
//export { getUserInfo, getUserInfoForumsPage };
