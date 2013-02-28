var handler = { };

// change this meta for your publication
handler.meta = {
  "owner_email":"{%= author_email %}",
  "publication_api_version":"1.0",
  "name": "{%= name %}",
  "description": "{%= description %}",
  "delivered_on":"{%= delivered_on %}",
  "external_configuration": false,
  "send_timezone_info": true,
  "send_delivery_count": true
};

//use default edition handler
handler.edition = undefined;

//use default sample handler
handler.sample = undefined; 

module.exports = handler;