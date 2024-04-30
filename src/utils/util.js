import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ShopIcon from "@mui/icons-material/Shop";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  faJs,
  faNode,
  faReact,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as FlutterLogo } from "../icons/Google-flutter-logo.svg";

function groupBy(array, callbackFn) {
  let obj = {};
  for (let each of array) {
    let tmp = callbackFn(each);
    if (!obj.hasOwnProperty(tmp)) {
      obj[tmp] = [];
    }
    obj[tmp].push(each);
  }
  return obj;
}

function transformSkills(skills) {
  if (Array.isArray(skills)) {
    let tmp = groupBy(skills, ({ skill_category }) => skill_category);
    return Object.keys(tmp).map((skill_category) => {
      return {
        skill_category: skill_category,
        skills: tmp[skill_category],
      };
    });
  } else {
    return skills;
  }
}

const transformProjects = (projects) => {
  return projects?.map((each) => {
    const links = [];
    if (each.github_url) {
      links.push({
        getIcon: () => <GitHubIcon />,
        url: each.github_url,
      });
    }
    if (each.play_store_url) {
      links.push({
        getIcon: () => <ShopIcon />,
        url: each.play_store_url,
      });
    }
    if (each.web_url) {
      links.push({
        getIcon: () => <ArrowOutwardIcon />,
        url: each.web_url,
      });
    }

    return {
      id: each.id,
      title: each.project_name,
      description: each.project_description,
      links: links,
      getLogo: () => (
        <>
          {each.technology_tags.includes("react") && (
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "#5ED2F3" }}
              size="xl"
            />
          )}
          {each.technology_tags.includes("android") && (
            <FontAwesomeIcon
              icon={faAndroid}
              style={{ color: "#9FC036" }}
              size="xl"
            />
          )}
          {each.technology_tags.includes("node") && (
            <FontAwesomeIcon
              icon={faNode}
              style={{ color: "#57A745" }}
              size="2xl"
            />
          )}
          {each.technology_tags.includes("javascript") && (
            <FontAwesomeIcon
              icon={faJs}
              style={{ color: "#EFD81A" }}
              size="xl"
            />
          )}
          {each.technology_tags.includes("flutter") && (
            <FlutterLogo height={22} />
          )}
        </>
      ),
    };
  });
};

export { groupBy, transformSkills, transformProjects };
