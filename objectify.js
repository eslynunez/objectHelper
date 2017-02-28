
/**
 *
 * @param {Object} obj
 * @param {String} key
 * @param {String} val
 * @returns {Array}
 * @description return an array of objects according to key, value, or key and value matching
 */
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}

/**
 *
 * @param {Object} obj
 * @param {String} key
 * @returns {Array}
 * @description return an array of values that match on a certain key
 */
function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

/**
 *
 * @param {Object} obj
 * @param {String} val
 * @returns {Array}
 * @description return an array of keys that match on a certain value
 */
function getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
            objects.push(i);
        }
    }
    return objects;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports.getObjects = getObjects;
    module.exports.getValues = getValues;
    module.exports.getKeys = getKeys;
}

