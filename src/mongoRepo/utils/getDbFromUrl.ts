// tslint:disable-next-line:max-line-length
const regex = /^mongodb:\/\/(?:(?:[\-\w\d\%]+:[\-\w\d\%]+@)?[\-\w\d\%\.]+(?::\d+)?,?)*\/([\-\w\d\%]+)/i;

export default (url: string): string | undefined => {
  const result = regex.exec(url);
  if (result === null) {
    return undefined;
  }
  return result[1];
};
