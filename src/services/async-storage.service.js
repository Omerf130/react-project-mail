import { loggedinUser } from "../consts";
export const storageService = {
  query,
  get,
  post,
  put,
  remove,
};

// const filterBy = {
//   status: "inbox/sent/star/trash",
//   txt: "puki", // no need to support complex text search
//   isRead: true / false / null, // (optional property, if missing: show all)
// };

function query(entityType, delay = 200, filterBy) {
  const entities = JSON.parse(localStorage.getItem(entityType)) || [];
  let updatedEntities = [];
  
  if(!filterBy){
    updatedEntities = [...entities];
    return new Promise((resolve) => setTimeout(() => resolve(updatedEntities), delay));
  }
  
  if(filterBy.status === "/react-project-mail/inbox") {
    updatedEntities = [...entities].filter((message) => message.to === loggedinUser.email && message.subject.toLowerCase().includes(filterBy.text));
  }else if(filterBy.status === "/react-project-mail/sent") {
    updatedEntities = [...entities].filter((message) => message.from === loggedinUser.email && message.subject.toLowerCase().includes(filterBy.text));
    
  }else if(filterBy.status === "/react-project-mail/starred") {
    updatedEntities = [...entities].filter((message) => message.isStarred && message.subject.toLowerCase().includes(filterBy.text));
  }else if(filterBy.status === "/react-project-mail/trash") {
    updatedEntities = [...entities].filter((message) => message.removedAt && message.subject.toLowerCase().includes(filterBy.text));
  }

  return new Promise((resolve) => setTimeout(() => resolve(updatedEntities), delay));
}

function get(entityType, entityId) {
  return query(entityType).then((entities) => {
    const entity = entities.find((entity) => entity.id === entityId);
    if (!entity)
      throw new Error(
        `Get failed, cannot find entity with id: ${entityId} in: ${entityType}`
      );
    return entity;
  });
}

function post(entityType, newEntity) {
  newEntity = { ...newEntity };
  newEntity.id = _makeId();
  return query(entityType).then((entities) => {
    entities.push(newEntity);
    save(entityType, entities);
    return newEntity;
  });
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === updatedEntity.id);
    if (idx < 0)
      throw new Error(
        `Update failed, cannot find entity with id: ${updatedEntity.id} in: ${entityType}`
      );
    entities.splice(idx, 1, updatedEntity);
    save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity.id === entityId);
    if (idx < 0)
      throw new Error(
        `Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`
      );
    entities.splice(idx, 1);
    save(entityType, entities);
  });
}

export function save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}
// Private functions

function _makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
