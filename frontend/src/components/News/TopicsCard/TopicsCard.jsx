import { Card, CardBody, CardTitle, CardText, Label, React } from "reactstrap";
import { useState } from "react";
import styles from "./TopicsCard.module.scss";

/*
 * Prints out the selected {city} of the user, along with a list of the {topics}
 * and corresponding checkboxes. It uses {setTopics} to update the page's topics.
 * Parameters:
 * [+] city         :       the city to display.
 * [+] topics       :       the list of topics to display.
 * [+] setTopics    :       the hook to call and update the topics.
 */
export function TopicsCard({
  city,
  topics,
  setTopicsHook,
  searchTypes,
  setSearchTypesHook,
  onChange,
}) {
  const [state, setState] = useState(false);

  const topicSelector = (id) => {
    if (setTopicsHook == null) {
      console.error(
        "TopicsCard requires [setTopicsHook] to be defined. Add setTopicsHook={hook} to the component."
      );
      return;
    }

    let index = id - 1;
    let temp = topics;
    let atLeast1 = false;

    const selectedCount = temp.filter((topic) => topic.selected).length;

    if (selectedCount === 1 && temp[index].selected) {
      return;
    }
    temp[index].selected = !temp[index].selected;

    setTopicsHook(temp);
    setState(!state);
    onChange();
  };

  const searchTypeSelector = (id) => {
    if (setSearchTypesHook == null) return;

    var temp = searchTypes;

    for (let i = 0; i < temp.length; i++) {
      temp[i].selected = !temp[i].selected;
    }

    setSearchTypesHook(temp);
    setState(!state);
    onChange();
  };

  const createTopicOptions = () => {
    if (topics == null) {
      console.error(
        "TopicsCard requires [topics] to be set. Add topics={array} to the component." +
          "\nExample:\n{[\n {\n  id: (int),\n  label: (name),\n  selected: (bool)\n }\n]}"
      );
      return;
    }

    return (
      <>
        <CardTitle className={styles.underlineTitle}>
          Topics of Interest
        </CardTitle>
        <div className={styles.cardSection}>
          {topics.map((topic) => (
            <CardText className={styles.underline} key={topic.id}>
              <Label
                className={styles.label + " d-flex justify-content-between"}
              >
                {topic.label}
                <input
                  className={styles.radio}
                  type="checkbox"
                  name="radio"
                  onChange={topicSelector.bind(topicSelector, topic.id)}
                  checked={topic.selected}
                />
              </Label>
            </CardText>
          ))}
        </div>
      </>
    );
  };

  const createSearchOptions = () => {
    if (searchTypes == null) return;
    return (
      <>
        <CardTitle className={styles.underlineTitle}>
          Information Source
        </CardTitle>
        <div className={styles.cardSection}>
          {searchTypes.map((searchType) => (
            <CardText key={searchType.id}>
              <Label
                className={styles.label + " d-flex justify-content-between"}
              >
                {searchType.label}
                <input
                  className={styles.radio}
                  type="radio"
                  name="unique"
                  onChange={searchTypeSelector.bind(
                    searchTypeSelector,
                    searchType.id
                  )}
                  checked={searchType.selected}
                />
              </Label>
            </CardText>
          ))}
        </div>
      </>
    );
  };

  return (
    <Card className={styles.cardFormatting}>
      <CardBody>
        <CardTitle className={styles.underlineTitle}>Your Community</CardTitle>
        <CardTitle className={styles.citySpacing}>{city}</CardTitle>
        {createTopicOptions()}
        {createSearchOptions()}
      </CardBody>
    </Card>
  );
}
