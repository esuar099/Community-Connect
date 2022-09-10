import { Card, CardBody, CardTitle, CardText, Label, React } from "reactstrap";
import { CgChevronDown } from "react-icons/cg";
import { useState, useEffect, setList, useRef } from "react";
import styles from "./TopicsCard.module.scss";
import { useRouter } from 'next/router'

/* 
 * Prints out the selected {city} of the user, along with a list of the {topics}
 * and corresponding checkboxes. It uses {setTopics} to update the page's topics.
 * Parameters:
 * [+] city         :       the city to display.
 * [+] topics       :       the list of topics to display.
 * [+] setTopics    :       the hook to call and update the topics.
 */
export function TopicsCard({city, topics, setTopicsHook}) {
    const [state, setState] = useState(false);

    const checkboxSelector = (id) => {
        if (setTopicsHook == null) {
            console.error("TopicsCard requires [setTopicsHook] to be defined. Add setTopicsHook={hook} to the component.");
            return;
        }

        var index = id - 1;
        var temp = topics;

        temp[index].selected = !temp[index].selected;

        // If "All Topics" is clicked, change all.
        if (id == temp.length)
            for (var i = 0; i < index; i++)
                temp[i].selected = temp[index].selected;
        // Else if another is unselected and "All Topics" is, unselect "All Topics".
        else if (temp[temp.length - 1].selected == true)
            temp[temp.length - 1].selected = false;
        // Else if each topic is selected but "All Topics" is not, select it.
        else {
            var all = true;
            for (var i = 0; (i < temp.length - 1) && all; i++) 
                if (temp[i].selected == false)
                    all = false;

            if (all == true) 
                temp[temp.length - 1].selected = true;
        }
        setTopicsHook(temp);
        setState(!state);
    }

    const createTopicOptions = () => {
        if (topics == null) {
            console.error("TopicsCard requires [topics] to be set. Add topics={array} to the component." + 
                "\nExample:\n{[\n {\n  id: (int),\n  label: (name),\n  selected: (bool)\n }\n]}");
            return;
        }

        return (
            <>
            {topics.map((topic) => 
                <CardText className={styles.underline} key={topic.id}>
                    <Label className="d-flex justify-content-between">
                    {topic.label}
                    <input 
                        className={styles.radio} 
                        type="checkbox" 
                        name="radio"  
                        onChange={checkboxSelector.bind(checkboxSelector, topic.id)}
                        checked={topic.selected}
                    />
                    </Label>
                </CardText>
            )}
            </>
        );
    }

    return (                
        <Card className={styles.cardFormatting}>
        <CardBody>
            <CardTitle className={styles.underlineTitle}>
            Your Community
            </CardTitle>
            <CardTitle className={styles.citySpacing}>
            {city}
            </CardTitle>
            <CardTitle className={styles.underlineTitle}>
            Select Topics
            </CardTitle>
            {createTopicOptions()}
        </CardBody>
        </Card>
    );
}