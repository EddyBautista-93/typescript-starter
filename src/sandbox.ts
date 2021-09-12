type StringOrNum = string|number;

const logDetails = (uid: StringOrNum, item: string ):void => console.log(`${item} has a uid of ${uid}`);   

const greet = (user: {name: string, uid: StringOrNum}):void => console.log(`${user.name} says hello`);
