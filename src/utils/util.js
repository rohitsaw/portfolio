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

export { groupBy, transformSkills };
