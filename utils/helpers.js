module.exports = {
  fixImg: (path) => {
    let imageData = path;
    let s = "s";
    var position = 4;
    imageData = [
      imageData.slice(0, position),
      s,
      imageData.slice(position),
    ].join("");
    imageData = imageData + "/clean.jpg";
    return imageData;
  },

  fixUrl: (url) => {
    let urlData = url;
    urlData = urlData.split("?")[0];

    return urlData;
  },

  fixDesc: (description) => {
    let desc = description;
    if (!desc) {
      return "No description available";
    } else {
      desc = desc.substr(0, 250) + "...";
      return desc;
    }
  },
};
